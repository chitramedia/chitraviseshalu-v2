'use client'

import React, { useState } from 'react'
import LeftSidebar from '@/components/layout/LeftSidebar'
import RightSidebar from '@/components/layout/RightSidebar'
import Navbar from '@/components/layout/Navbar'
import MobileNav from '@/components/layout/MobileNav'
import Feed from '@/components/features/feed/Feed'
import { Sparkles, Compass, HelpCircle } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  // Render view depending on active tab (simple layout tabs)
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Feed />
      case 'trending':
        return (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-lg font-bold text-primary flex items-center gap-2">
                <Compass className="h-5 w-5" />
                Trending Cinema Topics
              </h2>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                See what the community is talking about right now. Conversations around new releases, retro reviews, and cinematic awards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-4.5 rounded-xl border border-border bg-secondary/30 hover:border-primary/20 transition-all cursor-pointer">
                  <span className="text-xs text-primary font-bold">#TollywoodVibe</span>
                  <p className="text-xs font-semibold mt-1">Is SSR's next film going to break global records?</p>
                  <span className="text-3xs text-muted-foreground mt-2 block">1.2k active discussions</span>
                </div>
                <div className="p-4.5 rounded-xl border border-border bg-secondary/30 hover:border-primary/20 transition-all cursor-pointer">
                  <span className="text-xs text-primary font-bold">#RetroGold</span>
                  <p className="text-xs font-semibold mt-1">Celebrating 60 years of Mayabazar visual effects</p>
                  <span className="text-3xs text-muted-foreground mt-2 block">458 reviews this week</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        )
      case 'communities':
        return (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-lg font-bold">Browse Communities</h2>
              <p className="text-xs text-muted-foreground mt-1">Join specialized hubs to discuss your favorite genres, directors, and languages.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mt-5">
                {[
                  { name: "Tollywood Club", slug: "c/tollywood", desc: "For discussions about Telugu cinema, retro classics, and new releases.", count: "14.2K members" },
                  { name: "Criterion Corner", slug: "c/criterion", desc: "Art-house, classic, and foreign cinema discussions.", count: "8.9K members" },
                  { name: "Sci-Fi Explorers", slug: "c/sci-fi", desc: "Time travel, space operas, and futuristic speculations.", count: "12.1K members" },
                  { name: "Indie Film Lab", slug: "c/indie", desc: "Independent cinema, screenplays, and low-budget masterpieces.", count: "5.4K members" }
                ].map((comm) => (
                  <div key={comm.slug} className="p-4 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all cursor-pointer flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-primary font-bold">{comm.slug}</span>
                      <h3 className="font-semibold text-sm mt-1">{comm.name}</h3>
                      <p className="text-2xs text-muted-foreground mt-1.5 leading-relaxed">{comm.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/40">
                      <span className="text-3xs text-muted-foreground font-semibold">{comm.count}</span>
                      <button className="text-3xs font-extrabold bg-primary text-primary-foreground px-3 py-1 rounded-lg">Join</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'reviewers':
        return (
          <div className="p-6 rounded-2xl border border-border bg-card text-center">
            <h2 className="text-lg font-bold">Top Critics & Reviewers</h2>
            <p className="text-xs text-muted-foreground mt-1">Discover users writing the most helpful and detailed cinema reviews.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { name: "Kalyan C.", handle: "@kalyancinema", rating: "4.9", bio: "Telugu classics enthusiast and visual essayist.", count: "234 reviews" },
                { name: "Srinivas Prasad", handle: "@sriniprasad", rating: "4.8", bio: "World cinema collector, focusing on screenplay designs.", count: "189 reviews" }
              ].map((reviewer) => (
                <div key={reviewer.handle} className="p-4 rounded-xl border border-border bg-secondary/20 flex flex-col justify-between items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm mb-3">
                    {reviewer.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{reviewer.name}</h3>
                    <span className="text-3xs text-muted-foreground">{reviewer.handle}</span>
                    <p className="text-2xs text-muted-foreground mt-2 leading-relaxed">{reviewer.bio}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 w-full flex items-center justify-between">
                    <span className="text-2xs text-amber-500 font-bold">★ {reviewer.rating}</span>
                    <span className="text-3xs text-muted-foreground">{reviewer.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'watchlist':
        return (
          <div className="p-6 rounded-2xl border border-border bg-card text-center">
            <h2 className="text-lg font-bold">Your Saved Discussions</h2>
            <p className="text-xs text-muted-foreground mt-1">Bookmarked posts, reviews, and film lists will appear here.</p>
            <div className="mt-6 p-8 border border-dashed border-border rounded-xl bg-secondary/10">
              <HelpCircle className="h-8 w-8 text-muted-foreground/45 mx-auto mb-3" />
              <p className="text-xs text-muted-foreground">No bookmarked items yet. Bookmark discussions in the feed to save them here.</p>
            </div>
          </div>
        )
      default:
        // Handles custom selected community tabs (like c-tollywood)
        return (
          <div className="space-y-5">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Active Community</span>
              <h2 className="text-lg font-black mt-1">
                {activeTab === 'c-tollywood' ? 'Tollywood Club' :
                 activeTab === 'c-criterion' ? 'Criterion Corner' :
                 activeTab === 'c-sci-fi' ? 'Sci-Fi Explorers' : 'Indie Film Lab'}
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Exclusive discussions, reviews, and threads focused on this category.
              </p>
            </div>
            <Feed />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      
      {/* Top Mobile Navbar */}
      <Navbar />

      {/* Left Sidebar - Desktop */}
      <LeftSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Right Sidebar - Desktop */}
      <RightSidebar />

      {/* Main Layout Area */}
      <div className="md:pl-64 lg:pr-80 min-h-screen pb-24 md:pb-8">
        
        {/* Center Container */}
        <main className="max-w-2xl mx-auto px-4 md:px-6 pt-6">
          {renderContent()}
        </main>

      </div>

      {/* Mobile Bottom Navigation & Action Trigger */}
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

    </div>
  )
}
