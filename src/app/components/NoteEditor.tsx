import React, { useState } from 'react'
import { Note, Tag } from '@prisma/client'

interface NoteEditorProps {
  initialNote?: Note & {
    tags: Tag[]
  }
  parentId?: string
  onSave: (note: {
    title: string
    content: string
    tags: string[]
    parentId?: string
  }) => Promise<void>
  onCancel: () => void
}

export default function NoteEditor({
  initialNote,
  parentId,
  onSave,
  onCancel
}: NoteEditorProps) {
  const [title, setTitle] = useState(initialNote?.title ?? '')
  const [content, setContent] = useState(initialNote?.content ?? '')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<string[]>(initialNote?.tags.map(t => t.name) ?? [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSave({ title, content, tags, parentId })
  }

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()])
      }
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="Press Enter to add tags"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-700"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  )
} 