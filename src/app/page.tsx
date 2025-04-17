'use client'

import React, { useState, useEffect } from 'react'
import { Note, Tag } from '@prisma/client'
import NoteModal from './components/NoteModal'
import NoteCard from './components/NoteCard'
import SearchBar from './components/SearchBar'
import NoteGraph from './components/NoteGraph'

interface NoteWithRelations extends Note {
  tags: Tag[]
  children: NoteWithRelations[]
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notes, setNotes] = useState<NoteWithRelations[]>([])
  const [filteredNotes, setFilteredNotes] = useState<NoteWithRelations[]>([])
  const [parentId, setParentId] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'graph'>('cards')

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      const response = await fetch('/api/notes')
      if (!response.ok) throw new Error('Failed to fetch notes')
      const data = await response.json()
      setNotes(data)
      setFilteredNotes(data)
    } catch (error) {
      console.error('Error fetching notes:', error)
    }
  }

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setFilteredNotes(notes)
      return
    }

    try {
      const response = await fetch(`/api/notes/search?q=${encodeURIComponent(query)}`)
      if (!response.ok) throw new Error('Failed to search notes')
      const data = await response.json()
      setFilteredNotes(data)
    } catch (error) {
      console.error('Error searching notes:', error)
      setFilteredNotes(notes) // Reset to all notes on error
    }
  }

  const handleCreateNote = async (noteData: {
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
          parentId,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create note')
      }

      setIsModalOpen(false)
      setParentId(null)
      fetchNotes() // Refresh the notes list
    } catch (error) {
      console.error('Error creating note:', error)
    }
  }

  const handleDeleteNote = async (noteId: string) => {
    try {
      const response = await fetch(`/api/notes?id=${noteId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete note')
      }

      fetchNotes() // Refresh the notes list
    } catch (error) {
      console.error('Error deleting note:', error)
    }
  }

  const handleAddChild = (parentId: string) => {
    setParentId(parentId)
    setIsModalOpen(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Notes</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewMode(viewMode === 'cards' ? 'graph' : 'cards')}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              {viewMode === 'cards' ? 'Show Graph' : 'Show Cards'}
            </button>
            <button
              onClick={() => {
                setParentId(null)
                setIsModalOpen(true)
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 whitespace-nowrap"
            >
              + New Note
            </button>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>

      {viewMode === 'graph' ? (
        <NoteGraph notes={filteredNotes} />
      ) : (
        <>
          {filteredNotes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                {notes.length === 0
                  ? "No notes yet. Create your first note to get started!"
                  : "No notes found matching your search."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onAddChild={handleAddChild}
                  onDelete={handleDeleteNote}
                />
              ))}
            </div>
          )}
        </>
      )}

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setParentId(null)
        }}
        onSave={handleCreateNote}
        mode="create"
      />
    </div>
  )
} 