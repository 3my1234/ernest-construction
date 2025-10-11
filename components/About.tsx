"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Award, Handshake } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Expert Craftsmanship",
    description: "Delivering exceptional quality in every project we undertake",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals dedicated to excellence",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Committed to the highest standards in construction",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Collaborating with leading construction companies",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              About <span className="text-accent">Ernest</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ernest Building and Construction Enterprise Nigeria LTD is a leading construction services company based in Abuja, Nigeria. We specialize in building homes, estates, schools, churches, mosques, and constructing roads and bridges.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team provides all kinds of painting and production work including screeding paint, emulsion paint, and satin paint. We work with different construction companies to achieve stunning architectural outcomes, delivering excellence, innovation, and quality in every project.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/media/WhatsApp Image 2025-10-12 at 08.57.50.jpeg"
                  alt="Construction Site"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/media/WhatsApp Image 2025-10-12 at 08.57.51.jpeg"
                  alt="Modern Building"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/media/WhatsApp Image 2025-10-12 at 08.57.52.jpeg"
                  alt="Architecture"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/media/WhatsApp Image 2025-10-12 at 08.57.53.jpeg"
                  alt="Construction Team"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

