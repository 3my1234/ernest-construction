"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.43.jpeg",
    title: "Premium Construction",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.44.jpeg",
    title: "Quality Finishing",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.46.jpeg",
    title: "Modern Design",
  },
  {
    src: "/media/x.jpeg",
    title: "Expert Craftsmanship",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.50.jpeg",
    title: "Professional Work",
  },
  {
    src: "/media/xx.jpeg",
    title: "Innovative Solutions",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.50(1).jpeg",
    title: "Excellence in Detail",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.51.jpeg",
    title: "Stunning Results",
  },
  {
    src: "/media/xxx.jpeg",
    title: "Premium Development",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.52.jpeg",
    title: "Craftsmanship",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.53.jpeg",
    title: "Architectural Beauty",
  },
];

export default function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Work <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-lg text-gray-400">
            Swipe to explore our stunning projects
          </p>
        </motion.div>
      </div>

      {/* Horizontally Scrollable Container */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide px-4 lg:px-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] h-[400px] md:h-[500px] group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl lg:text-3xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-6">
        <p className="text-gray-500 text-sm">← Swipe horizontally to see more →</p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
