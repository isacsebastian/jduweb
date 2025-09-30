"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Brand component for consistent styling
const BrandCard = ({ name, imageSrc }: { name: string; imageSrc: string }) => (
  <div className="flex items-center justify-center h-16 sm:h-20 w-36 sm:w-48 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 transition-all duration-300 hover:bg-black/60 hover:border-white/20 flex-shrink-0">
    <div className="relative w-24 sm:w-32 h-10 sm:h-12">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
        sizes="(max-width: 768px) 96px, 128px"
        priority
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
  // Duplicamos las marcas múltiples veces para asegurar un loop infinito suave
  const repeatedBrands = [...brands, ...brands, ...brands, ...brands]

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
          className="relative overflow-hidden py-4"
        >
          <div className="flex gap-4 sm:gap-6 animate-scroll">
            {repeatedBrands.map((brand, index) => (
              <BrandCard 
                key={`brand-${index}`} 
                name={brand.name} 
                imageSrc={brand.imageSrc} 
              />
            ))}
          </div>
          
          {/* Gradientes laterales para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black-900 to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 4));
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}