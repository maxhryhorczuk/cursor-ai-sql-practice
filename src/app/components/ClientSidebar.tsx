'use client'

import React, { useEffect, useState } from 'react'
import { Note } from '@prisma/client'
import Sidebar from './Sidebar'

interface NoteWithChildren extends Note {
  children: NoteWithChildren[]
}

export default function ClientSidebar() {
  const [notes, setNotes] = useState<NoteWithChildren[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/notes')
        if (!response.ok) {
          throw new Error('Failed to fetch notes')
        }
        const data = await response.json()
        setNotes(data)
      } catch (error) {
        console.error('Error fetching notes:', error)
      }
    }

    fetchNotes()
  }, [])

  return <Sidebar notes={notes} />
} 