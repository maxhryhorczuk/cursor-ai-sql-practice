import React from 'react'
import { Note } from '@prisma/client'
import { ChevronDownIcon, ChevronRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NoteWithChildren extends Note {
  children: NoteWithChildren[]
}

interface SidebarProps {
  notes: NoteWithChildren[]
}

interface NoteItemProps {
  note: NoteWithChildren
  level?: number
}

function NoteItem({ note, level = 0 }: NoteItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const isActive = pathname === `/notes/${note.id}`
  const paddingLeft = level * 12 + 'px' // Reduced padding for nested items

  // Auto-expand if current note or its child is active
  React.useEffect(() => {
    if (pathname?.startsWith(`/notes/${note.id}`)) {
      setIsOpen(true)
    }
  }, [pathname, note.id])

  return (
    <div style={{ paddingLeft }} className="min-w-0">
      <div className="my-0.5">
        <div 
          className={`
            bg-white rounded-lg shadow-sm border transition-colors
            ${isActive 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-300'
            }
          `}
        >
          <div className="flex items-center p-1.5 gap-1 min-w-0">
            {note.children.length > 0 ? (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors flex-shrink-0"
                aria-label={isOpen ? 'Collapse' : 'Expand'}
              >
                {isOpen ? (
                  <ChevronDownIcon className="h-3.5 w-3.5 text-gray-500" />
                ) : (
                  <ChevronRightIcon className="h-3.5 w-3.5 text-gray-500" />
                )}
              </button>
            ) : (
              <DocumentTextIcon className="h-3.5 w-3.5 text-gray-400 ml-1 flex-shrink-0" />
            )}
            <Link
              href={`/notes/${note.id}`}
              className={`
                flex-1 truncate text-sm
                ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}
              `}
              title={note.title}
            >
              {note.title}
            </Link>
            {note.children.length > 0 && (
              <span className="text-xs text-gray-400 px-1 flex-shrink-0">
                {note.children.length}
              </span>
            )}
          </div>
        </div>
      </div>
      {isOpen && note.children.length > 0 && (
        <div className="ml-1 border-l border-gray-200">
          {note.children.map((child) => (
            <NoteItem key={child.id} note={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ notes }: SidebarProps) {
  return (
    <aside className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-200">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
          Home
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </aside>
  )
} 