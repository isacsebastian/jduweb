"use client"

import { motion } from "framer-motion"
import { InfiniteBrandsSlider } from "@/components/ui/infinite-brands-slider"

// Default SVG icons for sports brands/sponsors
const AdidasSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M8.5 17.5h2.25L12 15.25h-2.25L8.5 17.5zm3-4.5h2.25L15 10.75h-2.25L11.5 13zm3-4.5h2.25L18 6.25h-2.25L14.5 8.5zM1.5 21.5h21L12 2.5 1.5 21.5z" />
  </svg>
)

const NikeSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.525-.616-3.668-1.848L24 7.8z" />
  </svg>
)

const PumaSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
)

const UnderArmourSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-10-5z" />
  </svg>
)

const WilsonSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
  </svg>
)

const HeadSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const brands = [
  { name: "Adidas", svg: <AdidasSVG /> },
  { name: "Nike", svg: <NikeSVG /> },
  { name: "Puma", svg: <PumaSVG /> },
  { name: "Under Armour", svg: <UnderArmourSVG /> },
  { name: "Wilson", svg: <WilsonSVG /> },
  { name: "Head", svg: <HeadSVG /> },
]

export default function BrandsSection() {
  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">PATROCINADORES Y MARCAS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Respaldado por las mejores marcas deportivas del mundo</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InfiniteBrandsSlider brands={brands} speed={30} className="py-8" />
        </motion.div>
      </div>
    </section>
  )
}
