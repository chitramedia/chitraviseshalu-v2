'use client'

import React, { useState } from 'react'
import { Image as ImageIcon, Sparkles, Smile, FileText, Sliders, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CreatePostCardProps {
  onPostCreated?: (post: {
    id: string
    author: { name: string; handle: string; initials: string; avatarColor: string; avatarUrl?: string }
    time: string
    community: string
    text: string
    movieTag?: { title: string; rating: string }
    likes: number
    comments: number
    shares: number
    hasLiked?: boolean
  }) => void
}

export default function CreatePostCard({ onPostCreated }: CreatePostCardProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    if (onPostCreated) {
      onPostCreated({
        id: Math.random().toString(36).substring(2, 9),
        author: {
          name: "Manoj K.",
          handle: "@manojtwt",
          initials: "MK",
          avatarColor: "bg-amber-500/10 text-amber-500",
          avatarUrl: "/avatar-manoj.png"
        },
        time: "Just now",
        community: "R/ComedyFans",
        text: text,
        likes: 0,
        comments: 0,
        shares: 0,
        hasLiked: false
      })
    }

    setText('')
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <h2 className="font-extrabold text-sm text-foreground tracking-tight">Create Post</h2>

        {/* Input Text Area */}
        <div className="w-full">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind regarding Telugu Cinema, Manoj?"
            rows={2}
            className="w-full resize-none bg-transparent border-0 p-0 focus:outline-none focus:ring-0 text-sm placeholder:text-muted-foreground/80 leading-relaxed text-foreground"
          />
        </div>

        {/* Bottom icon row */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-muted-foreground/75">
            <button
              type="button"
              className="hover:text-primary transition-colors cursor-pointer"
              title="Add Image"
            >
              <ImageIcon className="h-5 w-5 stroke-[1.8]" />
            </button>
            <button
              type="button"
              className="hover:text-primary transition-colors cursor-pointer"
              title="Add Sticker / GIF"
            >
              <Smile className="h-5 w-5 stroke-[1.8]" />
            </button>
            <button
              type="button"
              className="hover:text-primary transition-colors cursor-pointer"
              title="Post Settings / Polls"
            >
              <Sliders className="h-5 w-5 stroke-[1.8]" />
            </button>
          </div>

          {text.trim() && (
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4.5 py-1.5 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all cursor-pointer shadow-xs"
            >
              <Send className="h-3 w-3" />
              Post
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
