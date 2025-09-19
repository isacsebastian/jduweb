"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    year: "1999",
    title: "Inicio en raquetball.",
    description: "",
  },
  {
    year: "2006",
    title: "Primer Mundial Juvenil:",
    description: "Vicecampeón mundial en dobles mixtos, bronce en singles y dobles.",
  },
  {
    year: "2012 - 2013",
    title: "Varias medallas internacionales,",
    description: "incluido el subcampeonato en República Dominicana.",
  },
  {
    year: "2014 - 2015",
    title: "Apertura de una academia",
    description: "juvenil de raquetball.",
  },
]

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="relative flex items-start group"
    >
      {/* Year */}
      <div className="flex-shrink-0 w-32 text-right pr-8">
        <motion.span
          className="text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
        >
          {item.year}
        </motion.span>
      </div>

      {/* Timeline dot and line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-4 h-4 bg-white rounded-full z-10 shadow-lg"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 200,
          }}
        />
        {index < timelineData.length - 1 && (
          <motion.div
            className="w-0.5 h-24 bg-white/30 mt-2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.4,
              ease: "easeOut",
            }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pl-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.4,
            ease: "easeOut",
          }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-relaxed">{item.title}</h3>
          {item.description && <p className="text-gray-300 text-base md:text-lg leading-relaxed">{item.description}</p>}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wider">TRAYECTORIA</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
