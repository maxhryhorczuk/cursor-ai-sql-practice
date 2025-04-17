'use client'

import React, { useEffect, useState } from 'react'
import { Note, Tag } from '@prisma/client'
import ReactMarkdown from 'react-markdown'
import NoteModal from '@/app/components/NoteModal'
import Link from 'next/link'
import { DocumentTextIcon, PlusIcon, ArrowLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface NoteWithRelations extends Note {
  tags: Tag[]
  children: NoteWithRelations[]
}

export default function NotePage({ params }: { params: { id: string } }) {
  const [note, setNote] = useState<NoteWithRelations | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedParentId, setSelectedParentId] = useState<string | null>(null)
  const router = useRouter()

  const fetchNote = async () => {
    try {
      const response = await fetch(`/api/notes/${params.id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch note')
      }
      const data = await response.json()
      setNote(data)
    } catch (error) {
      console.error('Error fetching note:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNote()
  }, [params.id])

  const handleCreateChildNote = async (noteData: {
    title: string
    content: string
    tags: string[]
  }) => {
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...noteData,
          parentId: selectedParentId || params.id,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create note')
      }

      await fetchNote() // Refresh the note data
      setIsModalOpen(false)
      setSelectedParentId(null)
    } catch (error) {
      console.error('Error creating note:', error)
    }
  }

  const handleDelete = async (noteId: string) => {
    if (window.confirm('Are you sure you want to delete this note and all its child notes? This action cannot be undone.')) {
      try {
        const response = await fetch(`/api/notes?id=${noteId}`, {
          method: 'DELETE',
        })

        if (!response.ok) {
          throw new Error('Failed to delete note')
        }

        if (noteId === params.id) {
          router.push('/') // Navigate back to home page if deleting current note
        } else {
          await fetchNote() // Refresh the note data if deleting a child
        }
      } catch (error) {
        console.error('Error deleting note:', error)
      }
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!note) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">Note not found</h2>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setSelectedParentId(params.id)
              setIsModalOpen(true)
            }}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Child Note
          </button>
          <button
            onClick={() => handleDelete(params.id)}
            className="flex items-center text-red-600 hover:text-red-700"
            title="Delete note"
          >
            <TrashIcon className="h-5 w-5 mr-2" />
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">{note.title}</h1>

        {note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {note.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="prose max-w-none">
          <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
        </div>

        {note.children && note.children.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Child Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {note.children.map((child) => (
                <div
                  key={child.id}
                  className="relative p-4 border rounded-lg hover:border-gray-300 transition-colors"
                >
                  {/* Action buttons for child note */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedParentId(child.id);
                        setIsModalOpen(true);
                      }}
                      className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                      title="Add child note"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(child.id);
                      }}
                      className="p-1 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-full"
                      title="Delete note"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Child note content */}
                  <div
                    onClick={() => router.push(`/notes/${child.id}`)}
                    className="cursor-pointer"
                  >
                    <h3 className="font-medium pr-16">{child.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {child.content}
                    </p>
                    {child.children && child.children.length > 0 && (
                      <div className="text-xs text-gray-500 mt-2">
                        {child.children.length} child note{child.children.length !== 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedParentId(null)
        }}
        onSave={handleCreateChildNote}
        mode="create"
      />
    </div>
  )
} 