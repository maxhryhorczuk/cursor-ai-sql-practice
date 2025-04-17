import React from 'react';
import { Note, Tag } from '@prisma/client';
import Link from 'next/link';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface NoteWithRelations extends Note {
  tags: Tag[];
  children: NoteWithRelations[];
}

interface NoteCardProps {
  note: NoteWithRelations;
  onAddChild: (parentId: string) => void;
  onDelete: (noteId: string) => void;
}

export default function NoteCard({ note, onAddChild, onDelete }: NoteCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent triggering the Link click
    e.stopPropagation(); // Prevent event bubbling
    if (window.confirm('Are you sure you want to delete this note and all its child notes? This action cannot be undone.')) {
      onDelete(note.id);
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={handleDelete}
          className="p-1 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-full"
          title="Delete note"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent triggering the Link click
            e.stopPropagation(); // Prevent event bubbling
            onAddChild(note.id);
          }}
          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
          title="Add child note"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>

      <Link href={`/notes/${note.id}`} className="block">
        {/* Tags at the top */}
        {note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {note.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Title and Content */}
        <h3 className="text-lg font-semibold mb-2 pr-16">{note.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>

        {/* Child Notes Indicator */}
        {note.children && note.children.length > 0 && (
          <div className="text-sm text-gray-500">
            {note.children.length} child note{note.children.length !== 1 ? 's' : ''}
          </div>
        )}
      </Link>
    </div>
  );
} 