"use client";

import { useState } from "react"
import HeroSection from "@/components/sections/hero-section"
import BrandsSection from "@/components/sections/brands-section"
import TimelineSection from "@/components/sections/timeline-section"
import AchievementsSection from "@/components/sections/achievements-section"
import WorldScenariosSection from "@/components/sections/world-scenarios-section"
import AgendaProxima from "@/components/sections/AgendaProxima"
import CollaborateSection from "@/components/sections/ColaborateSection"
import NavigationMenu from "@/components/ui/NavigationMenu"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <h1 className="text-white text-nav">
            JOSÉ DANIEL <span className="font-bold">UGALDE</span>
          </h1>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white p-2 hover:bg-gray-800 rounded transition-colors"
            aria-label="Abrir menú"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        <HeroSection />
        <BrandsSection />
        <TimelineSection />
        <AchievementsSection />
        <WorldScenariosSection />
        <AgendaProxima />
        <CollaborateSection />
      </div>

      {/* Navigation Menu */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  )
}
