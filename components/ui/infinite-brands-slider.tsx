"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Brand {
  name: string
  svg: React.ReactNode
}

interface InfiniteBrandsSliderProps {
  brands: Brand[]
  speed?: number
  className?: string
}

export function InfiniteBrandsSlider({ brands, speed = 50, className }: InfiniteBrandsSliderProps) {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands]

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex gap-8 md:gap-12"
        animate={{
          x: [0, -50 * brands.length + "%"],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-gray-700">{brand.svg}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Nike SVG
export const NikeSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.525-.616-3.668-1.848L24 7.8z" />
  </svg>
)

// Adidas SVG
export const AdidasSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M8.5 17.5h2.25L12 15.25h-2.25L8.5 17.5zm3-4.5h2.25L15 10.75h-2.25L11.5 13zm3-4.5h2.25L18 6.25h-2.25L14.5 8.5zM1.5 21.5h21L12 2.5 1.5 21.5z" />
  </svg>
)

// Puma SVG
export const PumaSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
)

// Under Armour SVG
export const UnderArmourSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-10-5z" />
  </svg>
)

// New Balance SVG
export const NewBalanceSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
)

// Asics SVG
export const AsicsSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
