"use client"

import { motion } from "framer-motion"
import { InfiniteBrandsSlider } from "@/components/ui/infinite-brands-slider"
import Image from "next/image"

// Brand component for consistent styling
const BrandCard = ({ name, imageSrc }: { name: string; imageSrc: string }) => (
  <div className="flex items-center justify-center h-20 w-48 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 transition-all duration-300 hover:bg-black/60 hover:border-white/20">
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
    <section id="marcas" className="py-16 bg-black-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
                    <h1 className="title-main mb-6">PATROCINADORES Y MARCAS</h1>

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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
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
          animation: scroll 15s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}