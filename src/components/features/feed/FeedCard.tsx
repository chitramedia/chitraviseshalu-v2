'use client'

import React, { useState } from 'react'
import { Heart, MessageCircle, Share2, Bookmark, Star, ExternalLink, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PostType {
  id: string
  author: {
    name: string
    handle: string
    initials: string
    avatarColor: string
    badge?: string
  }
  time: string
  community: string
  text: string
  movieTag?: {
    title: string
    rating: string
  }
  likes: number
  comments: number
  shares: number
  hasLiked?: boolean
  hasBookmarked?: boolean
}

interface FeedCardProps {
  post: PostType
}

export default function FeedCard({ post }: FeedCardProps) {
  const [likes, setLikes] = useState(post.likes)
  const [hasLiked, setHasLiked] = useState(!!post.hasLiked)
  const [hasBookmarked, setHasBookmarked] = useState(!!post.hasBookmarked)

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1)
      setHasLiked(false)
    } else {
      setLikes(likes + 1)
      setHasLiked(true)
    }
  }

  return (
    <article className="rounded-2xl border border-border bg-card p-4.5 shadow-xs transition-all duration-200 hover:border-border/80">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm select-none",
            post.author.avatarColor
          )}>
            {post.author.initials}
          </div>
          
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-sm hover:text-primary transition-colors cursor-pointer">
                {post.author.name}
              </span>
              {post.author.badge && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-3xs font-extrabold uppercase tracking-wide">
                  <Award className="h-2.5 w-2.5" />
                  {post.author.badge}
                </span>
              )}
              <span className="text-muted-foreground text-xs font-normal">
                {post.author.handle}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 mt-0.5 text-xs text-muted-foreground font-medium">
              <span>{post.time}</span>
              <span>•</span>
              <span className="text-primary hover:underline cursor-pointer">
                {post.community}
              </span>
            </div>
          </div>
        </div>

        {/* Bookmark Trigger */}
        <button 
          onClick={() => setHasBookmarked(!hasBookmarked)}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all",
            hasBookmarked && "text-primary hover:text-primary bg-primary/5"
          )}
        >
          <Bookmark className={cn("h-4 w-4", hasBookmarked && "fill-current")} />
        </button>
      </div>

      {/* Main post text */}
      <p className="mt-3.5 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
        {post.text}
      </p>

      {/* Optional Linked Movie / Visual Block */}
      {post.movieTag && (
        <div className="mt-4 rounded-xl border border-border bg-secondary/40 hover:bg-secondary/60 transition-all p-3.5 flex items-center justify-between gap-4 cursor-pointer group">
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Visual poster mockup */}
            <div className="flex h-16 w-11 shrink-0 items-center justify-center rounded-lg bg-card border border-border/80 font-black text-4xs text-muted-foreground tracking-tighter shadow-xs">
              POSTER
            </div>
            <div className="min-w-0">
              <span className="block font-bold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                {post.movieTag.title}
              </span>
              <span className="block text-2xs text-muted-foreground mt-0.5 font-medium">
                Linked Movie Reference
              </span>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span className="text-2xs font-bold text-amber-500">
                  {post.movieTag.rating}/10
                </span>
              </div>
            </div>
          </div>

          <ExternalLink className="h-4 w-4 text-muted-foreground/60 group-hover:text-foreground transition-colors shrink-0" />
        </div>
      )}

      {/* Action Footer Bar */}
      <div className="flex items-center gap-6 mt-4.5 pt-3 border-t border-border/60 text-muted-foreground">
        <button
          onClick={handleLike}
          className={cn(
            "flex items-center gap-2 text-xs font-semibold hover:text-primary transition-colors group",
            hasLiked && "text-primary"
          )}
        >
          <Heart className={cn(
            "h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110",
            hasLiked && "fill-current"
          )} />
          <span>{likes}</span>
        </button>

        <button className="flex items-center gap-2 text-xs font-semibold hover:text-foreground transition-colors group">
          <MessageCircle className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110" />
          <span>{post.comments}</span>
        </button>

        <button className="flex items-center gap-2 text-xs font-semibold hover:text-foreground transition-colors group">
          <Share2 className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110" />
          <span>{post.shares}</span>
        </button>
      </div>
    </article>
  )
}
