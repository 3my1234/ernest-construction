"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.50.jpeg",
    title: "Professional Work",
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
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.52.jpeg",
    title: "Craftsmanship",
  },
  {
    src: "/media/WhatsApp Image 2025-10-12 at 08.57.53.jpeg",
    title: "Architectural Beauty",
  },
];

export default function HorizontalGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-900">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none" />
        
        <motion.div
          style={{ x }}
          className="flex gap-8 px-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[70vh] group"
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
        </motion.div>
      </div>
    </section>
  );
}

