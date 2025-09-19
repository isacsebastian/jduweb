"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  secondaryText: string;
  image: string;
  imageMobile?: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "JOSÉ DANIEL UGALDE",
    subtitle: "ENTRENA CON PASIÓN | COMPITE CON PROPÓSITO",
    description:
      "Deportista de élite con más de 20 años de trayectoria en racquetball. Top 10 mundial y representante del Ecuador.",
    secondaryText:
      "Su carrera se distingue por la disciplina y los logros en escenarios de alto rendimiento.",
    image: "/slide1pc.webp",
    imageMobile: "/slide1.png",
  },
  {
    id: 2,
    title: "CAMPEÓN MUNDIAL",
    subtitle: "EXCELENCIA | DEDICACIÓN",
    description:
      "Múltiples títulos internacionales que destacan su dominio técnico y mental en el racquetball.",
    secondaryText:
      "Una trayectoria marcada por la búsqueda de la perfección y excelencia deportiva.",
    image: "/slide2pc.webp",
    imageMobile: "/slide2.webp",
  },
  {
    id: 3,
    title: "REPRESENTANTE ECUATORIANO",
    subtitle: "ORGULLO NACIONAL | INSPIRACIÓN",
    description:
      "Embajador del deporte ecuatoriano en competencias internacionales de alto nivel.",
    secondaryText:
      "Un ejemplo que inspira a las nuevas generaciones de deportistas ecuatorianos.",
    image: "/slide3pc.webp",
    imageMobile: "/slide3.webp",
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="min-h-screen lg:h-[90vh] lg:max-h-[90vh] bg-black text-white relative overflow-hidden">
   

      {/* Carousel Container */}
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0"
            >
              <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen lg:h-[90vh] px-4 md:px-6 lg:px-8 pt-4 pb-8 lg:pt-0 lg:pb-0">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : -50,
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 max-w-2xl lg:pr-12 text-center lg:text-left mb-0 lg:mb-0"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      y: currentIndex === index ? 0 : 30,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="title-main mb-4 lg:mb-6"
                  >
                    {slide.title.split(" ").map((word, i) => (
                      <span key={i} className={i > 1 ? "block" : ""}>
                        {word}
                        {i <= 1 && i < slide.title.split(" ").length - 1
                          ? " "
                          : ""}
                      </span>
                    ))}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      y: currentIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4 lg:mb-8 subtitle"
                  >
                    {slide.subtitle.split(" | ").map((part, i) => (
                      <span key={i}>
                        <span className="border-b border-white pb-1">
                          {part}
                        </span>
                        {i === 0 && (
                          <span className="hidden sm:inline mx-4">|</span>
                        )}
                      </span>
                    ))}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      y: currentIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-gray-300 text-body-large mb-4 lg:mb-8 max-w-lg mx-auto lg:mx-0"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      y: currentIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-gray-400 text-body mb-6 lg:mb-10 max-w-lg mx-auto lg:mx-0"
                  >
                    {slide.secondaryText}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      y: currentIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-button"
                    >
                      CONOCE SU HISTORIA
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1 max-w-lg mt-0 lg:mt-0 mb-4 lg:mb-0"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-full h-[600px] lg:h-[600px] rounded-lg overflow-hidden"
                    >
                      {/* Mobile Image */}
                      <Image
                        src={slide.imageMobile || slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover lg:hidden"
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={90}
                        onError={(e) => {
                          console.log(`Failed to load mobile image: ${slide.imageMobile}, trying desktop: ${slide.image}`);
                          e.currentTarget.src = slide.image;
                        }}
                      />
                      {/* Desktop Image */}
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover hidden lg:block"
                        priority={index === 0}
                        sizes="(max-width: 1024px) 0px, 50vw"
                        quality={90}
                      />
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: currentIndex === index ? 1 : 0,
                        scale: currentIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 1, delay: 1.4 }}
                      className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 border border-white/20 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: currentIndex === index ? 1 : 0,
                        scale: currentIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 1, delay: 1.6 }}
                      className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-10 h-10 lg:w-16 lg:h-16 border border-white/10 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4 lg:gap-6">
        {/* Prev/Next Buttons */}
        <motion.button
          onClick={scrollPrev}
          className="p-1.5 lg:p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={scrollNext}
          className="p-1.5 lg:p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </motion.button>
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
  );
}
