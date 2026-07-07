'use client'

import React from 'react'
import { Star, ShieldAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RightSidebar() {
  const trendingMovies = [
    {
      title: "Devara: Part 1",
      rating: "Rating 8.9/10",
      tag: "Movie Gold",
      posterUrl: "/poster-devara.png"
    },
    {
      title: "Lucky Baskhar",
      posterUrl: "/poster-lucky.png"
    },
    {
      title: "Pushpa 2: The Rule",
      posterUrl: "/poster-pushpa2.png"
    }
  ]

  const topReviewers = [
    {
      name: "Suresh Kumar",
      avatarUrl: "/avatar-man1.png",
      badgeType: "star",
      subtext: "Star"
    },
    {
      name: "Radha Reddy",
      avatarUrl: "/avatar-woman1.png",
      badgeType: "verified",
      subtext: "Verified"
    }
  ]

  const suggestedProfiles = [
    {
      name: "Prasad K.",
      handle: "@prasad_cinema",
      avatarColor: "bg-cyan-500/10 text-cyan-500",
      initials: "PK"
    },
    {
      name: "Anitha S.",
      handle: "@anithafilms",
      avatarColor: "bg-emerald-500/10 text-emerald-500",
      initials: "AS"
    }
  ]

  return (
    <aside className="fixed bottom-0 top-0 right-0 hidden w-80 border-l border-border bg-background px-5 pt-6 pb-4 overflow-y-auto lg:flex flex-col gap-5.5 z-30 select-none">
      
      {/* Trending Movies Card */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
        <h3 className="font-extrabold text-sm text-foreground tracking-tight mb-4">Trending Movies</h3>
        <div className="space-y-4">
          {trendingMovies.map((movie) => (
            <div key={movie.title} className="flex gap-3 items-center group cursor-pointer">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="h-14 w-10.5 rounded-md object-cover border border-border/80 group-hover:border-primary/45 transition-colors shrink-0"
              />
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-bold text-xs text-foreground truncate group-hover:text-primary transition-colors">
                  {movie.title}
                </span>
                {movie.rating && (
                  <span className="text-3xs text-muted-foreground mt-0.5 font-medium">
                    {movie.rating}
                  </span>
                )}
                {movie.tag && (
                  <span className="text-3xs font-bold text-amber-500 mt-0.5">
                    {movie.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Reviewers Card */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
        <h3 className="font-extrabold text-sm text-foreground tracking-tight mb-4">Top Reviewers</h3>
        <div className="space-y-4">
          {topReviewers.map((rev) => (
            <div key={rev.name} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src={rev.avatarUrl} 
                  alt={rev.name}
                  className="h-9 w-9 rounded-full object-cover border border-border shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-foreground truncate group-hover:text-primary transition-colors">
                      {rev.name}
                    </span>
                    {rev.badgeType === 'star' && (
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500 shrink-0" />
                    )}
                  </div>
                  <span className="text-3xs text-muted-foreground mt-0.5 font-medium">
                    {rev.subtext}
                  </span>
                </div>
              </div>
              
              {rev.badgeType === 'verified' && (
                <svg className="h-4.5 w-4.5 fill-primary text-primary shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Profiles */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
        <h3 className="font-extrabold text-sm text-foreground tracking-tight mb-4">Suggested Profiles</h3>
        <div className="space-y-4">
          {suggestedProfiles.map((profile) => (
            <div key={profile.handle} className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className={cn("flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full font-extrabold text-xs border border-border", profile.avatarColor)}>
                  {profile.initials}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-xs text-foreground truncate hover:text-primary transition-colors cursor-pointer">
                    {profile.name}
                  </span>
                  <span className="text-3xs text-muted-foreground mt-0.5 font-medium">
                    {profile.handle}
                  </span>
                </div>
              </div>
              <button className="text-3xs font-extrabold text-primary hover:text-primary-foreground hover:bg-primary px-3 py-1 rounded-lg border border-primary/20 hover:border-transparent transition-all cursor-pointer">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

    </aside>
  )
}
