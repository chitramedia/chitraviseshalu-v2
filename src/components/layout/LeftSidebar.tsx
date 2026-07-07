'use client'

import React from 'react'
import { Home, Flame, Users, BookOpen, Bookmark, Sun, Moon, Film, ChevronRight } from 'lucide-react'
import { useTheme } from '../ThemeProvider'
import { cn } from '@/lib/utils'

interface SidebarNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function LeftSidebar({ activeTab, setActiveTab }: SidebarNavProps) {
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'reviewers', label: 'Reviewers', icon: BookOpen },
    { id: 'watchlist', label: 'My Watchlist', icon: Bookmark },
  ]

  const myCommunities = [
    { id: 'c-comedy', name: 'Comedy Fans', emoji: '😂' },
    { id: 'c-action', name: 'Action Telugu', emoji: '🏃' },
    { id: 'c-vintage', name: 'Vintage Tollywood', emoji: '🎬' },
  ]

  return (
    <aside className="fixed bottom-0 top-0 left-0 hidden w-64 border-r border-border bg-card px-4 pt-6 pb-4 md:flex flex-col justify-between z-30 shadow-2xs">
      <div className="space-y-6">
        {/* Logo matching the screenshot */}
        <div className="flex items-center gap-3 px-2">
          {/* Film reel logo icon */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-3.5 3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-3.5 3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
            </svg>
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight leading-none text-foreground">Chitra</h1>
            <p className="text-xs text-foreground font-semibold tracking-wide mt-1.5">చిత్ర విశేషాలు</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex w-full items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group text-left",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-transform duration-200 group-hover:scale-105",
                  isActive ? "text-accent-foreground" : "text-muted-foreground group-hover:text-foreground"
                )} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <hr className="border-border mx-2" />

        {/* My Communities */}
        <div className="space-y-3">
          <h2 className="px-3.5 text-sm font-bold text-foreground">
            My Communities
          </h2>
          <div className="space-y-1">
            {myCommunities.map((community) => (
              <button
                key={community.id}
                onClick={() => setActiveTab(community.id)}
                className={cn(
                  "flex w-full items-center justify-between px-3.5 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-all group",
                  activeTab === community.id && "bg-secondary text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base select-none shrink-0">{community.emoji}</span>
                  <span className="truncate max-w-[150px]">{community.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Theme Toggle */}
      <div className="space-y-4">
        <button
          onClick={toggleTheme}
          className="flex w-full items-center justify-between px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-sm font-semibold transition-all group"
        >
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
            Appearance
          </span>
          <div className="flex h-6.5 w-11 items-center rounded-full bg-secondary p-0.5 transition-colors relative border border-border">
            <div className={cn(
              "flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs transition-transform duration-200",
              theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
            )}>
              {theme === 'dark' ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
            </div>
          </div>
        </button>
        <div className="px-2 text-2xs text-muted-foreground font-medium flex items-center justify-between">
          <span>v2.0.0-alpha</span>
          <span>© 2026 Chitra Media</span>
        </div>
      </div>
    </aside>
  )
}
