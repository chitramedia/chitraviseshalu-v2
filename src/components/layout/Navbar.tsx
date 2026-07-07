'use client'

import React from 'react'
import { Sparkles, Bell, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/90 backdrop-blur-md md:hidden">
      <div className="flex h-15 items-center justify-between px-4">
        
        {/* Mobile Left: Brand matches the LeftSidebar logo style */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-foreground text-background">
            <svg className="h-5.5 w-5.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-3.5 3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-3.5 3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
            </svg>
          </div>
          <span className="font-extrabold text-sm tracking-tight text-foreground">Chitra Viseshalu</span>
        </div>

        {/* Mobile Right: Basic utilities */}
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
            <Search className="h-4.5 w-4.5" />
          </button>
          <button className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all relative">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>
          <img 
            src="/avatar-manoj.png" 
            alt="Manoj" 
            className="h-7.5 w-7.5 rounded-full object-cover border border-border"
          />
        </div>

      </div>
    </header>
  )
}
