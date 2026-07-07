'use client'

import React from 'react'
import { TrendingUp, Award, UserPlus, Flame, MessageSquare, Plus } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function RightSidebar() {
  const trendingMovies = [
    {
      title: "Kalki 2898 AD",
      year: "2024",
      backdrop: "/temp-kalki.jpg", // We will use inline color gradient blocks or simple icons since we have no real images
      category: "Sci-Fi / Action",
      rating: "9.2",
    },
    {
      title: "Devara: Part 1",
      year: "2024",
      category: "Action / Drama",
      rating: "8.7",
    },
    {
      title: "Salaar: Part 1",
      year: "2023",
      category: "Thriller / Action",
      rating: "8.5",
    }
  ]

  const topReviewers = [
    { name: "Kalyan C.", handle: "@kalyancinema", rating: "4.9", reviews: "234 reviews", avatarColor: "bg-red-500/10 text-red-500" },
    { name: "Srinivas Prasad", handle: "@sriniprasad", rating: "4.8", reviews: "189 reviews", avatarColor: "bg-amber-500/10 text-amber-500" },
    { name: "Divya N.", handle: "@divyafilms", rating: "4.8", reviews: "142 reviews", avatarColor: "bg-cyan-500/10 text-cyan-500" }
  ]

  const popularCommunities = [
    { name: "Rajamouli Fans", members: "12.4K members", slug: "rajamouli" },
    { name: "Classic Telugu Cinema", members: "8.2K members", slug: "classic" },
    { name: "World Cinema Club", members: "15.1K members", slug: "world" }
  ]

  const todayDiscussions = [
    { title: "Is Devara Jr. NTR's best raw action performance?", replies: 142, community: "Tollywood Club" },
    { title: "Retro Review: The cinematic brilliance of 'Mayabazar'", replies: 89, community: "Classic Telugu" },
    { title: "Sci-Fi tropes in Kalki that actually worked", replies: 231, community: "Kalki Universe" }
  ]

  return (
    <aside className="fixed bottom-0 top-0 right-0 hidden w-80 border-l border-border bg-card/45 px-5 pt-6 pb-4 overflow-y-auto lg:flex flex-col gap-6 z-30">
      
      {/* Search Bar */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search movies, reviews, fans..." 
          className="w-full h-10 px-4 pl-10 rounded-xl bg-secondary/80 border border-border focus:border-primary focus:outline-none text-sm transition-all"
        />
        <svg className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Trending Movies */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Flame className="h-4.5 w-4.5 text-primary" />
          <h3 className="font-semibold text-sm">Trending Cinema</h3>
        </div>
        <div className="space-y-2">
          {trendingMovies.map((movie, index) => (
            <div 
              key={movie.title}
              className="group flex gap-3 p-2.5 rounded-xl border border-border bg-card hover:bg-muted/80 transition-all cursor-pointer"
            >
              {/* Fallback visual placeholder instead of a broken image url */}
              <div className="flex h-14 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-black text-2xs text-muted-foreground tracking-tighter border border-border/80 group-hover:border-primary/30 transition-colors">
                POSTER
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-semibold text-sm truncate">{movie.title}</span>
                <span className="text-2xs text-muted-foreground mt-0.5">{movie.category} • {movie.year}</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-2xs font-bold text-amber-500">★ {movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Discussions */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <MessageSquare className="h-4.5 w-4.5 text-primary" />
          <h3 className="font-semibold text-sm">Hot Discussions</h3>
        </div>
        <div className="space-y-2">
          {todayDiscussions.map((disc) => (
            <div 
              key={disc.title}
              className="p-3 rounded-xl border border-border bg-card hover:bg-muted/80 transition-all cursor-pointer space-y-1.5"
            >
              <div className="flex justify-between items-start gap-2">
                <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-secondary text-primary">
                  {disc.community}
                </span>
                <span className="text-2xs text-muted-foreground shrink-0">{disc.replies} replies</span>
              </div>
              <h4 className="text-xs font-semibold leading-relaxed hover:text-primary transition-colors line-clamp-2">
                {disc.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Top Reviewers */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Award className="h-4.5 w-4.5 text-primary" />
          <h3 className="font-semibold text-sm">Top Reviewers</h3>
        </div>
        <div className="space-y-2">
          {topReviewers.map((rev) => (
            <div key={rev.handle} className="flex items-center justify-between p-2 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-xs", rev.avatarColor)}>
                  {rev.name[0]}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-xs truncate">{rev.name}</span>
                  <span className="text-2xs text-muted-foreground truncate">{rev.handle}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="block text-2xs font-bold text-amber-500">★ {rev.rating}</span>
                <span className="block text-3xs text-muted-foreground">{rev.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Communities */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Flame className="h-4.5 w-4.5 text-primary" />
          <h3 className="font-semibold text-sm">Suggested Communities</h3>
        </div>
        <div className="space-y-2">
          {popularCommunities.map((comm) => (
            <div key={comm.slug} className="flex items-center justify-between p-2 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="min-w-0">
                <span className="block font-semibold text-xs truncate">c/{comm.slug}</span>
                <span className="block text-2xs text-muted-foreground truncate">{comm.members}</span>
              </div>
              <button className="flex items-center gap-1 text-2xs font-bold text-primary hover:text-primary-foreground hover:bg-primary px-2.5 py-1 rounded-lg border border-primary/20 hover:border-transparent transition-all shrink-0">
                <Plus className="h-3 w-3" />
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

    </aside>
  )
}
