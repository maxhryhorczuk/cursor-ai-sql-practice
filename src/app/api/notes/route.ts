import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { Note, Tag } from '@prisma/client'

interface NoteWithRelations extends Note {
  tags: Tag[];
  children: NoteWithRelations[];
}

export async function GET() {
  try {
    // Helper function to get notes with nested children
    const getNotesWithChildren = async (parentId: string | null = null, depth: number = 0): Promise<NoteWithRelations[]> => {
      if (depth > 10) return []; // Prevent infinite recursion, limit depth to 10 levels
      
      const notes = await prisma.note.findMany({
        where: { parentId },
        include: {
          tags: true,
        },
      });

      // Recursively get children for each note
      const notesWithChildren: NoteWithRelations[] = await Promise.all(
        notes.map(async (note): Promise<NoteWithRelations> => {
          const children = await getNotesWithChildren(note.id, depth + 1);
          return { ...note, children };
        })
      );

      return notesWithChildren;
    };

    // Get root notes with all their nested children
    const notes = await getNotesWithChildren();
    return NextResponse.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch notes' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const { title, content, tags, parentId } = await request.json()

    // Create the note
    const note = await prisma.note.create({
      data: {
        title,
        content,
        parentId,
        tags: {
          connectOrCreate: tags.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag }
          }))
        }
      },
      include: {
        tags: true,
        children: true
      }
    })

    return NextResponse.json(note)
  } catch (error) {
    console.error('Error creating note:', error)
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, content, tags } = await request.json()

    const note = await prisma.note.update({
      where: { id },
      data: {
        title,
        content,
        tags: {
          set: [], // First remove all existing tags
          connectOrCreate: tags.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag }
          }))
        }
      },
      include: {
        tags: true,
        children: true
      }
    })

    return NextResponse.json(note)
  } catch (error) {
    console.error('Error updating note:', error)
    return NextResponse.json(
      { error: 'Failed to update note' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Note ID is required' },
        { status: 400 }
      )
    }

    await prisma.note.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting note:', error)
    return NextResponse.json(
      { error: 'Failed to delete note' },
      { status: 500 }
    )
  }
} 