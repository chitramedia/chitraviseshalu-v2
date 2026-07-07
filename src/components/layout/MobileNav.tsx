'use client'

import React, { useState } from 'react'
import { Home, Flame, Users, BookOpen, Bookmark, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import CreatePostCard from '../features/feed/CreatePostCard'

interface MobileNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function MobileNav({ activeTab, setActiveTab }: MobileNavProps) {
  const [showCreateModal, setShowCreateModal] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'communities', label: 'Groups', icon: Users },
    { id: 'reviewers', label: 'Critics', icon: BookOpen },
    { id: 'watchlist', label: 'Saved', icon: Bookmark },
  ]

  return (
    <>
      {/* Floating Create Button */}
      <div className="fixed bottom-20 right-4 z-40 md:hidden">
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex h-13 w-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-all glow-primary cursor-pointer"
        >
          <Plus className="h-6 w-6" />
        </button>
      </div>

      {/* Bottom Nav Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 border-t border-border bg-card/90 backdrop-blur-lg md:hidden flex justify-around items-center px-2 z-40">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center w-14 h-full gap-1 group focus:outline-none"
            >
              <Icon className={cn(
                "h-5.5 w-5.5 transition-transform duration-200 group-active:scale-95",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )} />
              <span className={cn(
                "text-3xs font-medium transition-colors",
                isActive ? "text-primary font-bold" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Mobile Create Post Overlay Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-card w-full max-w-lg rounded-t-2xl sm:rounded-2xl border border-border p-5 shadow-2xl relative animate-in slide-in-from-bottom duration-250">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-4">
              <span className="font-bold text-sm">Create New Post</span>
              <button
                onClick={() => setShowCreateModal(false)}
                className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Post Card */}
            <CreatePostCard onPostCreated={() => {
              // Close modal on post creation (in a real app it'd add to feed state)
              setShowCreateModal(false)
            }} />
          </div>
        </div>
      )}
    </>
  )
}
