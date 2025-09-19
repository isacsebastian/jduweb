"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const countries = [
  // América del Norte
  { name: "Canadá", x: "18%", y: "22%" },
  { name: "USA", x: "20%", y: "30%" },
  { name: "México", x: "18%", y: "39%" },
  
  // América Central y Caribe
  { name: "Guatemala", x: "21%", y: "41%" },
  { name: "Nicaragua", x: "22%", y: "44%" },
  { name: "Rep. Dominicana", x: "26%", y: "42%" },
  
  // América del Sur
  { name: "Colombia", x: "25%", y: "52%" },
  { name: "Ecuador", x: "23%", y: "57%" },
  { name: "Perú", x: "25%", y: "62%" },
  { name: "Bolivia", x: "28%", y: "64%" },
  { name: "Chile", x: "26%", y: "75%" },
  
  // Europa
  { name: "Irlanda", x: "42%", y: "27%" },
  
  // Asia
  { name: "China", x: "60%", y: "42%" },
]

export default function WorldScenariosSection() {
  return (
    <section className="w-full py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="title-section text-center mb-8">
          Escenarios Mundiales
        </h2>

        {/* Mobile con scroll horizontal centrado */}
        <div className="block md:hidden">
          <div className="overflow-x-auto">
            <div className="relative min-w-[1000px] h-[450px] mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/mapa.svg"
                  alt="Mapa mundial"
                  width={900}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
              {countries.map((country, i) => (
                <motion.div
                  key={i}
                  className="absolute flex items-center z-10"
                  style={{ left: country.x, top: country.y }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full border border-white shadow-lg" />
                  <span className="ml-2 px-2 py-1 text-xs bg-white text-black rounded-md shadow-lg whitespace-nowrap font-medium">
                    {country.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop con mapa completo */}
        <div className="hidden md:block">
          <div className="relative w-full max-w-6xl mx-auto h-[600px]">
            <Image
              src="/mapa.svg"
              alt="Mapa mundial"
              fill
              className="object-contain"
              priority
            />
            {countries.map((country, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center z-10"
                style={{ left: country.x, top: country.y }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full border border-white shadow-lg" />
                <span className="ml-2 px-2 py-1 text-sm bg-white text-black rounded-md shadow-lg whitespace-nowrap font-medium">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}