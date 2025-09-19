"use client"

import { motion } from "framer-motion"
import { InfiniteBrandsSlider } from "@/components/ui/infinite-brands-slider"
import Image from "next/image"

// Brand component for consistent styling
const BrandCard = ({ name, imageSrc }: { name: string; imageSrc: string }) => (
  <div className="flex items-center justify-center h-20 w-48 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-600/50">
    <div className="relative w-32 h-12">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
        sizes="(max-width: 768px) 128px, 128px"
      />
    </div>
  </div>
)

const brands = [
  { name: "RUNADX", imageSrc: "/run.png" },
  { name: "Tiendamia", imageSrc: "/tienda.png" },
  { name: "Cielo", imageSrc: "/cielo.png" },
  { name: "Kay", imageSrc: "/kay.png" },
  { name: "Mall", imageSrc: "/mall.png" },
  { name: "Finalin", imageSrc: "/finalin.png" },
]

export default function BrandsSection() {
  return (
    <section className="py-16 bg-black-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-3xl font-bold text-white mb-4">PATROCINADORES Y MARCAS</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Respaldado por las mejores marcas y empresas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <div className="flex animate-scroll">
            {/* Primera fila de marcas */}
            {brands.map((brand, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BrandCard name={brand.name} imageSrc={brand.imageSrc} />
              </motion.div>
            ))}
            {/* Duplicado para efecto infinito */}
            {brands.map((brand, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BrandCard name={brand.name} imageSrc={brand.imageSrc} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}