'use client'

import React, { useState } from 'react'
import CreatePostCard from './CreatePostCard'
import FeedCard, { PostType } from './FeedCard'
import { Sparkles, MessageSquare, AlertCircle } from 'lucide-react'

export default function Feed() {
  const [activeFeedTab, setActiveFeedTab] = useState<'all' | 'following' | 'reviews'>('all')
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: '1',
      author: {
        name: "Vijay Kumar",
        handle: "@vijaycinema",
        initials: "VK",
        avatarColor: "bg-red-500/10 text-red-500",
        badge: "PRO CRITIC"
      },
      time: "2 hours ago",
      community: "c/tollywood",
      text: "Just rewatched Mayabazar (1957) in remastered color. The screenplay structure is still a masterclass in narrative efficiency. Every character's motivation is established in the first 15 minutes, and the pay-offs in the final act work flawlessly. Truly the crown jewel of Telugu cinema history. What's your favorite sequence?",
      movieTag: {
        title: "Mayabazar (1957)",
        rating: "10"
      },
      likes: 342,
      comments: 56,
      shares: 12,
      hasLiked: true
    },
    {
      id: '2',
      author: {
        name: "Aisha Rahman",
        handle: "@aisha_reviews",
        initials: "AR",
        avatarColor: "bg-cyan-500/10 text-cyan-500",
      },
      time: "5 hours ago",
      community: "c/criterion",
      text: "Edward Yang's Yi Yi (2000) captures the gentle melancholia of everyday life better than almost any film I've ever seen. The cinematography is so patient, let's you feel like an observer in their living room. A 3-hour movie that feels like 30 minutes. Absolutely stunning.",
      movieTag: {
        title: "Yi Yi (2000)",
        rating: "9.5"
      },
      likes: 189,
      comments: 24,
      shares: 8
    },
    {
      id: '3',
      author: {
        name: "Rahul Roy",
        handle: "@rahul_roy",
        initials: "RR",
        avatarColor: "bg-emerald-500/10 text-emerald-500",
        badge: "CINEPHILE"
      },
      time: "1 day ago",
      community: "c/sci-fi",
      text: "The sound design in Dune: Part Two is absolute wizardry. The thump of the thumper, the low frequency hum of the Voice, and Hans Zimmer's score being integrated directly into the environmental atmospheric noise. Must be experienced in IMAX.",
      movieTag: {
        title: "Dune: Part Two (2024)",
        rating: "9.0"
      },
      likes: 512,
      comments: 89,
      shares: 34
    }
  ])

  const handlePostCreated = (newPost: PostType) => {
    setPosts([newPost, ...posts])
  }

  const filteredPosts = posts.filter(post => {
    if (activeFeedTab === 'reviews') {
      return !!post.movieTag
    }
    return true
  })

  return (
    <div className="space-y-5">
      {/* Feed Filter Header tabs */}
      <div className="flex items-center justify-between border-b border-border bg-card/40 backdrop-blur-md sticky top-0 z-20 py-2.5 px-1 -mx-1">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveFeedTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFeedTab === 'all'
                ? 'bg-secondary text-primary shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All Discussions
          </button>
          <button
            onClick={() => setActiveFeedTab('following')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFeedTab === 'following'
                ? 'bg-secondary text-primary shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Following
          </button>
          <button
            onClick={() => setActiveFeedTab('reviews')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFeedTab === 'reviews'
                ? 'bg-secondary text-primary shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Reviews Only
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/5 text-primary text-3xs font-extrabold uppercase tracking-wide">
          <Sparkles className="h-3 w-3 animate-pulse" />
          <span>Active Session</span>
        </div>
      </div>

      {/* Create Post */}
      <CreatePostCard onPostCreated={handlePostCreated} />

      {/* Feed Cards List */}
      <div className="space-y-4.5">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-border bg-card/20">
            <AlertCircle className="h-8 w-8 text-muted-foreground/60 mb-3" />
            <h3 className="font-semibold text-sm">No posts found</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-[240px]">
              Be the first to post something in this category!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
