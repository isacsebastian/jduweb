"use client"

import { motion } from "framer-motion"

const countries = [
  { name: "Canadá", x: "23%", y: "25%" },
  { name: "USA", x: "25%", y: "33%" },
  { name: "Nicaragua", x: "27%", y: "47%" },
  { name: "México", x: "23%", y: "42%" },
  { name: "Guatemala", x: "26%", y: "44%" },
  { name: "Rep. Dominicana", x: "31%", y: "45%" },
  { name: "Ecuador", x: "28%", y: "60%" },
  { name: "Colombia", x: "30%", y: "55%" },
  { name: "Perú", x: "30%", y: "65%" },
  { name: "Chile", x: "31%", y: "78%" },
  { name: "Bolivia", x: "33%", y: "67%" },
  { name: "Irlanda", x: "47%", y: "30%" },
  { name: "China", x: "75%", y: "45%" },
]

export default function WorldScenariosSection() {
  return (
    <section className="w-full py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Escenarios Mundiales
        </h2>

        {/* Mobile con scroll horizontal */}
        <div className="block md:hidden overflow-x-auto">
          <div className="relative min-w-[900px]">
            <img
              src="/MAPA.svg"
              alt="Mapa mundial"
              className="w-full h-auto"
            />
            {countries.map((country, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center"
                style={{ left: country.x, top: country.y }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-3 h-3 bg-white rounded-full border border-black shadow" />
                <span className="ml-2 px-2 py-1 text-xs bg-white text-black rounded-md shadow whitespace-nowrap">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop con mapa completo */}
        <div className="hidden md:block">
          <div className="relative w-full">
            <img
              src="/MAPA.svg"
              alt="Mapa mundial"
              className="w-full h-auto"
            />
            {countries.map((country, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center"
                style={{ left: country.x, top: country.y }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-3 h-3 bg-white rounded-full border border-black shadow" />
                <span className="ml-2 px-2 py-1 text-xs bg-white text-black rounded-md shadow whitespace-nowrap">
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
