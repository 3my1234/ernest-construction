"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building, School, Church, Construction, MapPin, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Building beautiful homes with attention to detail and quality craftsmanship",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    icon: Building,
    title: "Estate Development",
    description: "Creating modern estates with world-class amenities and infrastructure",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
  },
  {
    icon: Paintbrush,
    title: "Painting & Production",
    description: "All kinds of painting work: screeding paint, emulsion paint, satin paint and more",
    image: "/media/WhatsApp Image 2025-10-12 at 08.59.22.jpeg",
  },
  {
    icon: School,
    title: "Educational Facilities",
    description: "Constructing schools designed for optimal learning environments",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
  },
  {
    icon: Church,
    title: "Religious Buildings",
    description: "Building churches and mosques with spiritual significance and architectural beauty",
    image: "/media/church.webp",
  },
  {
    icon: Construction,
    title: "Infrastructure",
    description: "Constructing roads and bridges that connect communities",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
  },
  {
    icon: MapPin,
    title: "Commercial Projects",
    description: "Delivering commercial spaces that drive business success",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive construction services across Nigeria, delivering excellence in every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-accent rounded-lg flex items-center justify-center">
                  <service.icon className="text-white" size={28} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

