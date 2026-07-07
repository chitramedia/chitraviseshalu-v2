'use client'

import React from 'react'
import { Sparkles, Bell, Search, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/85 backdrop-blur-md md:hidden">
      <div className="flex h-15 items-center justify-between px-4">
        
        {/* Mobile Left: Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-sm shadow-xs">
            C
          </div>
          <span className="font-bold text-sm tracking-tight">Chitra Viseshalu</span>
        </div>

        {/* Mobile Right: Basic utilities */}
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
            <Search className="h-4.5 w-4.5" />
          </button>
          <button className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all relative">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>
          <div className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center border border-border">
            MM
          </div>
        </div>

      </div>
    </header>
  )
}
