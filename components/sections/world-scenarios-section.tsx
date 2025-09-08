"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function WorldScenariosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
            ESCENARIOS
            <br />
            MUNDIALES
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          {/* Mobile: Horizontal scroll container */}
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div className="min-w-[800px] h-[600px] relative">
              <svg
                width="800"
                height="600"
                viewBox="0 0 800 600"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 4px 20px rgba(255, 255, 255, 0.1))" }}
              >
                {/* World Map Base */}
                <g fill="#4a5568" stroke="#2d3748" strokeWidth="0.5">
                  {/* Simplified world map paths - you can replace with actual SVG content */}
                  <path d="M100 200 L300 180 L350 220 L320 280 L280 300 L200 290 L150 250 Z" />
                  <path d="M200 300 L280 290 L300 350 L250 380 L180 370 L160 340 Z" />
                  <path d="M300 180 L450 170 L480 200 L460 240 L420 250 L380 230 L350 220 Z" />
                </g>

                {/* Country Markers */}
                <g className="country-markers">
                  {/* Canada */}
                  <circle cx="150" cy="120" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="110" y="100" width="80" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="150" y="115" textAnchor="middle" className="text-xs font-medium fill-black">
                    CANADÁ
                  </text>

                  {/* USA */}
                  <circle cx="180" cy="180" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="155" y="160" width="50" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="180" y="175" textAnchor="middle" className="text-xs font-medium fill-black">
                    USA
                  </text>

                  {/* Mexico */}
                  <circle cx="120" cy="240" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="85" y="220" width="70" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="120" y="235" textAnchor="middle" className="text-xs font-medium fill-black">
                    MÉXICO
                  </text>

                  {/* Guatemala */}
                  <circle cx="140" cy="280" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="95" y="260" width="90" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="140" y="275" textAnchor="middle" className="text-xs font-medium fill-black">
                    GUATEMALA
                  </text>

                  {/* Costa Rica */}
                  <circle cx="160" cy="320" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="115" y="300" width="90" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="160" y="315" textAnchor="middle" className="text-xs font-medium fill-black">
                    COSTA RICA
                  </text>

                  {/* Ecuador */}
                  <circle cx="200" cy="380" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="160" y="360" width="80" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="200" y="375" textAnchor="middle" className="text-xs font-medium fill-black">
                    ECUADOR
                  </text>

                  {/* Peru */}
                  <circle cx="220" cy="420" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="190" y="400" width="60" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="220" y="415" textAnchor="middle" className="text-xs font-medium fill-black">
                    PERÚ
                  </text>

                  {/* Chile */}
                  <circle cx="240" cy="480" r="4" fill="white" className="cursor-pointer hover:r-6 transition-all" />
                  <rect x="210" y="460" width="60" height="25" rx="12" fill="white" className="cursor-pointer" />
                  <text x="240" y="475" textAnchor="middle" className="text-xs font-medium fill-black">
                    CHILE
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Desktop: Full map */}
          <div className="hidden md:block">
            <div className="w-full max-w-5xl mx-auto">
              <svg
                width="100%"
                height="600"
                viewBox="0 0 1000 600"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 4px 20px rgba(255, 255, 255, 0.1))" }}
              >
                {/* World Map Base */}
                <g fill="#4a5568" stroke="#2d3748" strokeWidth="0.5">
                  {/* Simplified world map paths */}
                  <path d="M100 200 L400 180 L450 220 L420 280 L380 300 L300 290 L200 250 Z" />
                  <path d="M300 300 L380 290 L400 350 L350 380 L280 370 L260 340 Z" />
                  <path d="M400 180 L600 170 L630 200 L610 240 L570 250 L530 230 L450 220 Z" />
                  <path d="M700 150 L850 140 L880 180 L860 220 L820 230 L780 210 L750 190 Z" />
                </g>

                {/* Country Markers */}
                <g className="country-markers">
                  {/* Canada */}
                  <circle cx="200" cy="120" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="150"
                    y="95"
                    width="100"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="200" y="115" textAnchor="middle" className="text-sm font-medium fill-black">
                    CANADÁ
                  </text>

                  {/* USA */}
                  <circle cx="250" cy="180" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="220"
                    y="155"
                    width="60"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="250" y="175" textAnchor="middle" className="text-sm font-medium fill-black">
                    USA
                  </text>

                  {/* Mexico */}
                  <circle cx="180" cy="240" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="135"
                    y="215"
                    width="90"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="180" y="235" textAnchor="middle" className="text-sm font-medium fill-black">
                    MÉXICO
                  </text>

                  {/* Guatemala */}
                  <circle cx="200" cy="280" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="145"
                    y="255"
                    width="110"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="200" y="275" textAnchor="middle" className="text-sm font-medium fill-black">
                    GUATEMALA
                  </text>

                  {/* Nicaragua */}
                  <circle cx="220" cy="320" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="165"
                    y="295"
                    width="110"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="220" y="315" textAnchor="middle" className="text-sm font-medium fill-black">
                    NICARAGUA
                  </text>

                  {/* Costa Rica */}
                  <circle cx="240" cy="360" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="185"
                    y="335"
                    width="110"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="240" y="355" textAnchor="middle" className="text-sm font-medium fill-black">
                    COSTA RICA
                  </text>

                  {/* Rep. Dominicana */}
                  <circle cx="380" cy="300" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="305"
                    y="275"
                    width="150"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="380" y="295" textAnchor="middle" className="text-sm font-medium fill-black">
                    REP. DOMINICANA
                  </text>

                  {/* Venezuela */}
                  <circle cx="320" cy="380" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="265"
                    y="355"
                    width="110"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="320" y="375" textAnchor="middle" className="text-sm font-medium fill-black">
                    VENEZUELA
                  </text>

                  {/* Colombia */}
                  <circle cx="280" cy="420" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="225"
                    y="395"
                    width="110"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="280" y="415" textAnchor="middle" className="text-sm font-medium fill-black">
                    COLOMBIA
                  </text>

                  {/* Ecuador */}
                  <circle cx="260" cy="460" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="210"
                    y="435"
                    width="100"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="260" y="455" textAnchor="middle" className="text-sm font-medium fill-black">
                    ECUADOR
                  </text>

                  {/* Peru */}
                  <circle cx="280" cy="500" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="245"
                    y="475"
                    width="70"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="280" y="495" textAnchor="middle" className="text-sm font-medium fill-black">
                    PERÚ
                  </text>

                  {/* Bolivia */}
                  <circle cx="320" cy="520" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="275"
                    y="495"
                    width="90"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="320" y="515" textAnchor="middle" className="text-sm font-medium fill-black">
                    BOLIVIA
                  </text>

                  {/* Chile */}
                  <circle cx="300" cy="560" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="265"
                    y="535"
                    width="70"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="300" y="555" textAnchor="middle" className="text-sm font-medium fill-black">
                    CHILE
                  </text>

                  {/* Ireland */}
                  <circle cx="750" cy="180" r="5" fill="white" className="cursor-pointer hover:r-7 transition-all" />
                  <rect
                    x="705"
                    y="155"
                    width="90"
                    height="30"
                    rx="15"
                    fill="white"
                    className="cursor-pointer hover:fill-gray-100 transition-colors"
                  />
                  <text x="750" y="175" textAnchor="middle" className="text-sm font-medium fill-black">
                    IRLANDA
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .country-markers circle:hover {
          transform: scale(1.2);
        }
        .country-markers rect:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
