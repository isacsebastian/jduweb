"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-10 p-6 md:p-8"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.h1
            className="text-xl md:text-2xl font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            JOSÉ DANIEL UGALDE
          </motion.h1>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col space-y-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-8 pt-20 lg:pt-0">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-2xl lg:pr-12 text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            JOSÉ DANIEL <span className="block">UGALDE</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 text-sm md:text-base tracking-wider"
          >
            <span className="border-b border-white pb-1">ENTRENA CON PASIÓN</span>
            <span className="hidden sm:block">|</span>
            <span className="border-b border-white pb-1">COMPITE CON PROPÓSITO</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Deportista de élite con más de 20 años de trayectoria en el racquetball. Top 10 mundial y representante del
            Ecuador en múltiples campeonatos internacionales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
          >
            Su carrera se distingue por la disciplina, la constancia y los logros obtenidos en escenarios de alto
            rendimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-sm tracking-wider font-medium"
            >
              CONOCE SU HISTORIA
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 max-w-lg mt-12 lg:mt-0"
        >
          <div className="relative">
            {/* Placeholder for athlete image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-[500px] md:h-[600px] bg-gray-800 rounded-lg overflow-hidden"
            >
              {/* You can replace this with the actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Imagen del atleta</p>
                  <p className="text-xs text-gray-400 mt-1">Reemplazar con foto original</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -top-4 -right-4 w-20 h-20 border border-white/20 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border border-white/10 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"
        />
      </div>
    </section>
  )
}
