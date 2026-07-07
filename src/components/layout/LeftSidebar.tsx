'use client'

import React, { useState } from 'react'
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
    { id: 'watchlist', label: 'Watchlist', icon: Bookmark },
  ]

  const myCommunities = [
    { id: 'c-tollywood', name: 'Tollywood Club', initials: 'TC', color: 'bg-red-500/10 text-red-500' },
    { id: 'c-criterion', name: 'Criterion Corner', initials: 'CC', color: 'bg-amber-500/10 text-amber-500' },
    { id: 'c-sci-fi', name: 'Sci-Fi Explorers', initials: 'SF', color: 'bg-cyan-500/10 text-cyan-500' },
    { id: 'c-indie', name: 'Indie Film Lab', initials: 'IL', color: 'bg-emerald-500/10 text-emerald-500' },
  ]

  return (
    <aside className="fixed bottom-0 top-0 left-0 hidden w-64 border-r border-border bg-card/45 px-4 pt-6 pb-4 md:flex flex-col justify-between z-30">
      <div className="space-y-6">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-xl shadow-lg glow-primary">
            C
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight">Chitra</h1>
            <p className="text-xs text-muted-foreground font-medium">Viseshalu</p>
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
                  "flex w-full items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group text-left",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-transform duration-200 group-hover:scale-105",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <hr className="border-border mx-2" />

        {/* My Communities */}
        <div className="space-y-3">
          <h2 className="px-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            My Communities
          </h2>
          <div className="space-y-1">
            {myCommunities.map((community) => (
              <button
                key={community.id}
                onClick={() => setActiveTab(community.id)}
                className={cn(
                  "flex w-full items-center justify-between px-3.5 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all group",
                  activeTab === community.id && "bg-secondary text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-transform group-hover:scale-105",
                    community.color
                  )}>
                    {community.initials}
                  </div>
                  <span className="truncate max-w-[120px]">{community.name}</span>
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
          className="flex w-full items-center justify-between px-3.5 py-3 rounded-xl border border-border bg-card/60 hover:bg-muted text-sm font-medium transition-all group"
        >
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
            Appearance
          </span>
          <div className="flex h-7 w-12 items-center rounded-full bg-muted p-1 transition-colors relative border border-border">
            <div className={cn(
              "flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform duration-200",
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
