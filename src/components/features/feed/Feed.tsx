'use client'

import React, { useState } from 'react'
import CreatePostCard from './CreatePostCard'
import FeedCard, { PostType } from './FeedCard'
import { Sparkles, MessageSquare, AlertCircle } from 'lucide-react'

export default function Feed() {
  const [activeFeedTab, setActiveFeedTab] = useState<'all' | 'following' | 'reviews'>('all')
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 'mock-devara-post',
      author: {
        name: "Manoj K.",
        handle: "@manojtwt",
        avatarUrl: "/avatar-manoj.png",
        initials: "MK",
        avatarColor: "bg-amber-500/10 text-amber-500",
        badge: "Movie Gold"
      },
      time: "14m ago",
      community: "R/ComedyFans",
      text: "Just watched #Devara! Mind-blowing experience! The visuals, NTR's performance, and that climax BGM! Absolute mass treat. #DevaraDevara #Tollywood",
      postImage: "/devara-feed.png",
      movieTag: {
        title: "Devara: Part 1",
        rating: "8.9"
      },
      likes: "2.1k",
      comments: 345,
      shares: 78,
      voteStatus: 'up'
    },
    {
      id: '2',
      author: {
        name: "Vijay Kumar",
        handle: "@vijaycinema",
        initials: "VK",
        avatarColor: "bg-red-500/10 text-red-500",
        badge: "Movie Gold"
      },
      time: "2 hours ago",
      community: "R/ClassicCinema",
      text: "Just rewatched Mayabazar (1957) in remastered color. The screenplay structure is still a masterclass in narrative efficiency. Every character's motivation is established in the first 15 minutes, and the pay-offs in the final act work flawlessly. Truly the crown jewel of Telugu cinema history. What's your favorite sequence?",
      likes: "1.2k",
      comments: 112,
      shares: 45
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
    <div className="space-y-4.5">
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
