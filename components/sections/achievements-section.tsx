"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"

interface Achievement {
  id: number
  title: string
  description: string
  details?: string[]
}

const numberImages = {
  1: "/assests/slides/numbers/uno.png",
  2: "/assests/slides/numbers/dos.png",
  3: "/assests/slides/numbers/tres.png"
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Carrera Open",
    description: "Finalista Panamericano en dos ocasiones, medallas en Juegos Bolivarianos y Panamericanos.",
    details: [
      "Vicecampeón mundial en dobles mixtos (2006)",
      "Medalla de bronce en singles y dobles (2006)",
      "Medalla de plata en dobles varonil juvenil en el (2009)",
      "Finalista en múltiples torneos panamericanos",
      "Representante oficial del Ecuador en competencias internacionales",
    ],
  },
  {
    id: 2,
    title: "World Games",
    description: "Participación destacada en competencias mundiales de racquetball.",
    details: [
      "Top 10 mundial en ranking oficial",
      "Más de 20 años de trayectoria profesional",
      "Participación en campeonatos mundiales",
      "Reconocimiento internacional en el deporte",
    ],
  },
  {
    id: 3,
    title: "Ranking",
    description: "Posicionamiento destacado en rankings nacionales e internacionales.",
    details: [
      "Top 10 mundial en racquetball",
      "Múltiples medallas internacionales (2012-2013)",
      "Subcampeón en República Dominicana",
      "Fundador de academia juvenil de racquetball (2014-2015)",
    ],
  },
]

export default function AchievementsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-[0.2em] text-white mb-4">LOGROS</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="border-b border-gray-800 last:border-b-0"
            >
              <div className="flex items-start gap-8 py-8">
                <div className="flex-shrink-0">
                  <Image
                    src={numberImages[achievement.id as keyof typeof numberImages]}
                    alt={`Número ${achievement.id}`}
                    width={120}
                    height={120}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{achievement.title}</h3>

                    <button
                      onClick={() => toggleExpanded(achievement.id)}
                      className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-200"
                      aria-label={expandedId === achievement.id ? "Colapsar" : "Expandir"}
                    >
                      {expandedId === achievement.id ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>

                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">{achievement.description}</p>

                  <AnimatePresence>
                    {expandedId === achievement.id && achievement.details && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-800">
                          <ul className="space-y-3">
                            {achievement.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: detailIndex * 0.1,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex items-start gap-3 text-gray-400"
                              >
                                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                                <span className="text-base leading-relaxed">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
