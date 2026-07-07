'use client'

import React, { useState } from 'react'
import { Image as ImageIcon, Film, Star, Smile, Send, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CreatePostCardProps {
  onPostCreated?: (post: {
    id: string
    author: { name: string; handle: string; initials: string; avatarColor: string }
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
  const [selectedCommunity, setSelectedCommunity] = useState('c/tollywood')
  const [movieTag, setMovieTag] = useState('')
  const [movieRating, setMovieRating] = useState(0)
  const [showMovieTagger, setShowMovieTagger] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    if (onPostCreated) {
      onPostCreated({
        id: Math.random().toString(36).substring(2, 9),
        author: {
          name: "Manish MV",
          handle: "@manishmv",
          initials: "MM",
          avatarColor: "bg-primary/10 text-primary"
        },
        time: "Just now",
        community: selectedCommunity,
        text: text,
        movieTag: movieTag ? { title: movieTag, rating: movieRating ? movieRating.toString() : '8.0' } : undefined,
        likes: 0,
        comments: 0,
        shares: 0,
        hasLiked: false
      })
    }

    setText('')
    setMovieTag('')
    setMovieRating(0)
    setShowMovieTagger(false)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4.5 shadow-sm transition-all duration-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Top input bar */}
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
            MM
          </div>
          <div className="flex-1 min-w-0">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What did you watch today? Share your thoughts..."
              rows={3}
              className="w-full resize-none bg-transparent border-0 focus:outline-none focus:ring-0 text-sm placeholder:text-muted-foreground/80 leading-relaxed text-foreground"
            />
          </div>
        </div>

        {/* Selected Movie Tag / Rating preview */}
        {(showMovieTagger || movieTag) && (
          <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-secondary/60 border border-border/80 anim-fade-in">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                value={movieTag}
                onChange={(e) => setMovieTag(e.target.value)}
                placeholder="Link Movie (e.g. Mayabazar, Kalki...)"
                className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-xs font-semibold placeholder:text-muted-foreground text-foreground"
              />
            </div>
            
            <div className="flex items-center gap-1.5 border-l border-border/80 pl-3">
              <span className="text-2xs text-muted-foreground font-semibold">Rating:</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setMovieRating(star * 2)}
                    className="focus:outline-none"
                  >
                    <Star 
                      className={cn(
                        "h-3.5 w-3.5 transition-colors",
                        star * 2 <= movieRating 
                          ? "fill-amber-500 text-amber-500" 
                          : "text-muted-foreground/40 hover:text-amber-500"
                      )} 
                    />
                  </button>
                ))}
              </div>
              {movieRating > 0 && (
                <span className="text-2xs font-bold text-amber-500 ml-1">{movieRating}/10</span>
              )}
            </div>
          </div>
        )}

        {/* Action bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setShowMovieTagger(!showMovieTagger)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground hover:text-primary transition-all",
                showMovieTagger && "bg-secondary text-primary"
              )}
              title="Link a movie"
            >
              <Film className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              title="Add movie stills"
            >
              <ImageIcon className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              title="Aesthetic analysis"
            >
              <Sparkles className="h-4.5 w-4.5" />
            </button>
            
            {/* Community Selector Dropdown */}
            <div className="ml-2 relative">
              <select
                value={selectedCommunity}
                onChange={(e) => setSelectedCommunity(e.target.value)}
                className="appearance-none bg-secondary/80 border border-border text-2xs font-semibold px-3.5 py-1.5 pr-8 rounded-full focus:outline-none focus:border-primary text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <option value="c/tollywood">c/tollywood</option>
                <option value="c/criterion">c/criterion</option>
                <option value="c/sci-fi">c/sci-fi</option>
                <option value="c/indie">c/indie</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!text.trim()}
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-md",
              text.trim()
                ? "bg-primary text-primary-foreground hover:opacity-95 hover:scale-[1.02] cursor-pointer glow-primary"
                : "bg-secondary text-muted-foreground/60 cursor-not-allowed border border-border"
            )}
          >
            <Send className="h-3.5 w-3.5" />
            Post Review
          </button>
        </div>
      </form>
    </div>
  )
}
