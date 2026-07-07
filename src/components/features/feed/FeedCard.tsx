'use client'

import React, { useState } from 'react'
import { MessageSquare, Share2, MoreHorizontal, ArrowUp, ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PostType {
  id: string
  author: {
    name: string
    handle: string
    avatarUrl?: string
    initials: string
    avatarColor: string
    badge?: string
  }
  time: string
  community: string
  text: string
  postImage?: string
  movieTag?: {
    title: string
    rating: string
  }
  likes: string | number
  comments: string | number
  shares: string | number
  hasLiked?: boolean
  voteStatus?: 'up' | 'down' | null
}

interface FeedCardProps {
  post: PostType
}

export default function FeedCard({ post }: FeedCardProps) {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(post.voteStatus || null)
  const [votesCount, setVotesCount] = useState<number>(() => {
    if (typeof post.likes === 'string' && post.likes.includes('k')) {
      return Math.round(parseFloat(post.likes.replace('k', '')) * 1000)
    }
    return Number(post.likes)
  })

  const handleVote = (type: 'up' | 'down') => {
    if (voteStatus === type) {
      // Undo vote
      setVotesCount(prev => (type === 'up' ? prev - 1 : prev + 1))
      setVoteStatus(null)
    } else {
      // Toggle or apply new vote
      setVotesCount(prev => {
        let diff = 0
        if (voteStatus === null) {
          diff = type === 'up' ? 1 : -1
        } else {
          // Changed from up to down, or down to up
          diff = type === 'up' ? 2 : -2
        }
        return prev + diff
      })
      setVoteStatus(type)
    }
  }

  const formatVotes = (count: number) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count.toString()
  }

  const renderFormattedText = (text: string) => {
    return text.split(/(\s+)/).map((word, idx) => {
      if (word.startsWith('#') || word.startsWith('@')) {
        return (
          <span key={idx} className="text-primary hover:underline cursor-pointer font-medium">
            {word}
          </span>
        )
      }
      return word
    })
  }

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-border/80">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar image or initials */}
          {post.author.avatarUrl ? (
            <img 
              src={post.author.avatarUrl} 
              alt={post.author.name}
              className="h-10 w-10 rounded-full object-cover border border-border shrink-0"
            />
          ) : (
            <div className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm select-none",
              post.author.avatarColor
            )}>
              {post.author.initials}
            </div>
          )}
          
          <div>
            <div className="flex flex-wrap items-center gap-1.5 text-sm">
              <span className="font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                {post.author.name}
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground font-medium">
                {post.author.handle}
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground font-medium">
                {post.time}
              </span>
              {post.author.badge && (
                <>
                  <span className="text-muted-foreground">|</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600">
                    {/* Gold badge checkmark */}
                    <svg className="h-4 w-4 fill-amber-500 text-amber-500" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {post.author.badge}
                  </span>
                </>
              )}
            </div>
            
            <div className="mt-1 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              ({post.community})
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Main post text */}
      <p className="mt-3.5 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
        {renderFormattedText(post.text)}
      </p>

      {/* Image Block with Tag */}
      {post.postImage && (
        <div className="relative mt-4.5 rounded-xl overflow-hidden border border-border group select-none">
          <img 
            src={post.postImage} 
            alt="Cinematic still" 
            className="w-full h-auto max-h-[380px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/75 text-white text-2xs font-extrabold uppercase tracking-wider">
            Tagged: #{post.movieTag ? post.movieTag.title.split(':')[0] : 'Devara'}
          </span>
        </div>
      )}

      {/* Action Footer Bar */}
      <div className="flex items-center gap-6 mt-4.5 pt-3 border-t border-border/60 text-muted-foreground/75">
        
        {/* Vote Widget */}
        <div className="flex items-center rounded-lg bg-secondary/80 border border-border p-1 gap-1">
          <button
            onClick={() => handleVote('up')}
            className={cn(
              "h-7 w-7 flex items-center justify-center rounded-md transition-colors cursor-pointer",
              voteStatus === 'up' 
                ? "bg-primary/10 text-primary" 
                : "hover:bg-muted hover:text-foreground"
            )}
          >
            <ArrowUp className="h-4.5 w-4.5 stroke-[2.2]" />
          </button>
          
          <span className={cn(
            "text-xs font-bold px-1 min-w-[32px] text-center select-none",
            voteStatus === 'up' && "text-primary",
            voteStatus === 'down' && "text-red-500"
          )}>
            {formatVotes(votesCount)}
          </span>

          <button
            onClick={() => handleVote('down')}
            className={cn(
              "h-7 w-7 flex items-center justify-center rounded-md transition-colors cursor-pointer",
              voteStatus === 'down' 
                ? "bg-red-500/10 text-red-500" 
                : "hover:bg-muted hover:text-foreground"
            )}
          >
            <ArrowDown className="h-4.5 w-4.5 stroke-[2.2]" />
          </button>
        </div>

        {/* Comments */}
        <button className="flex items-center gap-2 text-xs font-bold hover:text-foreground transition-colors group cursor-pointer">
          <MessageSquare className="h-4.5 w-4.5 stroke-[2] transition-transform duration-200 group-hover:scale-105" />
          <span>{post.comments} Comments</span>
        </button>

        {/* Shares */}
        <button className="flex items-center gap-2 text-xs font-bold hover:text-foreground transition-colors group cursor-pointer">
          <Share2 className="h-4.5 w-4.5 stroke-[2] transition-transform duration-200 group-hover:scale-105" />
          <span>{post.shares} Shares</span>
        </button>
      </div>
    </article>
  )
}
