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
      "Deportista de élite con más de 20 años de trayectoria en el racquetball. Top 10 mundial y representante del Ecuador en múltiples campeonatos internacionales.",
    secondaryText:
      "Su carrera se distingue por la disciplina, la constancia y los logros obtenidos en escenarios de alto rendimiento.",
    image: "/slide1pc.webp",
    imageMobile: "/slide1pc.webp",
  },
  {
    id: 2,
    title: "CAMPEÓN MUNDIAL",
    subtitle: "EXCELENCIA | DEDICACIÓN",
    description:
      "Múltiples títulos internacionales y reconocimientos que destacan su dominio técnico y mental en el deporte del racquetball.",
    secondaryText:
      "Una trayectoria marcada por la búsqueda constante de la perfección y el compromiso con la excelencia deportiva.",
    image: "/slide2pc.webp",
    imageMobile: "/slide2pc.webp",
  },
  {
    id: 3,
    title: "REPRESENTANTE ECUATORIANO",
    subtitle: "ORGULLO NACIONAL | INSPIRACIÓN",
    description:
      "Embajador del deporte ecuatoriano en competencias internacionales, llevando el nombre del país a los más altos niveles.",
    secondaryText:
      "Un ejemplo de determinación que inspira a las nuevas generaciones de deportistas ecuatorianos.",
    image: "/slide3pc.webp",
    imageMobile: "/slide3pc.webp",
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
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-30 p-6 md:p-8"
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

      {/* Carousel Container */}
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-8 pt-20 lg:pt-0">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : -50,
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 max-w-2xl lg:pr-12 text-center lg:text-left"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      y: currentIndex === index ? 0 : 30,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 text-sm md:text-base tracking-wider"
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
                    className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
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
                    className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
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
                      className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-sm tracking-wider font-medium"
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
                  className="flex-1 max-w-lg mt-12 lg:mt-0"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover hidden md:block"
                        priority={index === 0}
                      />
                      {slide.imageMobile && (
                        <Image
                          src={slide.imageMobile}
                          alt={slide.title}
                          fill
                          className="object-cover md:hidden"
                          priority={index === 0}
                        />
                      )}
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: currentIndex === index ? 1 : 0,
                        scale: currentIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 1, delay: 1.4 }}
                      className="absolute -top-4 -right-4 w-20 h-20 border border-white/20 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: currentIndex === index ? 1 : 0,
                        scale: currentIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 1, delay: 1.6 }}
                      className="absolute -bottom-4 -left-4 w-16 h-16 border border-white/10 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Prev/Next Buttons */}
        <motion.button
          onClick={scrollPrev}
          className="p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={scrollNext}
          className="p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5" />
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
