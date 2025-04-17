import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      )
    }

    // Search in both title and content, include tags and children
    const notes = await prisma.note.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { content: { contains: query } },
          { tags: { some: { name: { contains: query } } } },
        ],
      },
      include: {
        tags: true,
        children: {
          include: {
            tags: true,
            children: {
              include: {
                tags: true,
              },
            },
          },
        },
      },
    })

    return NextResponse.json(notes)
  } catch (error) {
    console.error('Error searching notes:', error)
    return NextResponse.json(
      { error: 'Failed to search notes' },
      { status: 500 }
    )
  }
} 