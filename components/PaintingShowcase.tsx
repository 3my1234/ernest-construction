"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Paintbrush, CheckCircle } from "lucide-react";

const paintingServices = [
  "Screeding Paint",
  "Emulsion Paint",
  "Satin Paint",
  "Interior Painting",
  "Exterior Painting",
  "Wall Texturing",
  "Decorative Finishes",
  "Commercial Painting",
];

const paintingImages = [
  "/media/WhatsApp Image 2025-10-12 at 08.59.22.jpeg",
  "/media/WhatsApp Image 2025-10-12 at 08.59.22(1).jpeg",
  "/media/WhatsApp Image 2025-10-12 at 08.59.23.jpeg",
  "/media/WhatsApp Image 2025-10-12 at 08.59.23(1).jpeg",
  "/media/WhatsApp Image 2025-10-12 at 08.59.24.jpeg",
];

export default function PaintingShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                <Paintbrush className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                  Painting & <span className="text-accent">Production</span>
                </h2>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              All kinds of painting and production work delivered with excellence and precision. 
              From screeding to emulsion and satin finishes, we bring color and life to your spaces.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {paintingServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-colors shadow-lg"
            >
              Get a Quote
            </motion.a>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {paintingImages.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  index === 0 ? "col-span-2 h-64" : "h-48"
                }`}
              >
                <img
                  src={image}
                  alt={`Painting work ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

