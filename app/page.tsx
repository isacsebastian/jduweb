import HeroSection from "@/components/sections/hero-section"
import BrandsSection from "@/components/sections/brands-section"
import TimelineSection from "@/components/sections/timeline-section"
import AchievementsSection from "@/components/sections/achievements-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <BrandsSection />
      <TimelineSection />
      <AchievementsSection />
    </main>
  )
}
