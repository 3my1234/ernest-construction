"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Premium Construction Project",
    category: "Residential",
    image: "/media/WhatsApp Image 2025-10-12 at 08.45.37.jpeg",
    description: "High-quality residential construction with modern amenities",
  },
  {
    id: 2,
    title: "Professional Building Work",
    category: "Commercial",
    image: "/media/WhatsApp Image 2025-10-12 at 08.54.41.jpeg",
    description: "Commercial construction showcasing our expertise",
  },
  {
    id: 3,
    title: "Quality Construction",
    category: "Residential",
    image: "/media/WhatsApp Image 2025-10-12 at 08.57.42.jpeg",
    description: "Delivering excellence in residential projects",
  },
  {
    id: 4,
    title: "Modern Architecture",
    category: "Estate Development",
    image: "/media/WhatsApp Image 2025-10-12 at 08.57.43.jpeg",
    description: "Contemporary design and construction",
  },
  {
    id: 5,
    title: "Premium Painting Work",
    category: "Painting",
    image: "/media/WhatsApp Image 2025-10-12 at 08.59.22.jpeg",
    description: "Professional painting and finishing services",
  },
  {
    id: 6,
    title: "Quality Finishing",
    category: "Painting",
    image: "/media/WhatsApp Image 2025-10-12 at 08.59.23.jpeg",
    description: "Expert painting and decorative finishes",
  },
  {
    id: 7,
    title: "Construction Excellence",
    category: "Infrastructure",
    image: "/media/WhatsApp Image 2025-10-12 at 08.57.44.jpeg",
    description: "Infrastructure development and construction",
  },
  {
    id: 8,
    title: "Professional Services",
    category: "Commercial",
    image: "/media/WhatsApp Image 2025-10-12 at 08.57.46.jpeg",
    description: "Complete construction solutions",
  },
  {
    id: 9,
    title: "Expert Craftsmanship",
    category: "Residential",
    image: "/media/x.jpeg",
    description: "Showcasing our attention to detail and quality",
  },
  {
    id: 10,
    title: "Innovative Design",
    category: "Commercial",
    image: "/media/xx.jpeg",
    description: "Modern commercial construction solutions",
  },
  {
    id: 11,
    title: "Premium Development",
    category: "Estate Development",
    image: "/media/xxx.jpeg",
    description: "High-end estate development and planning",
  },
];

const categories = ["All", "Residential", "Estate Development", "Commercial", "Infrastructure", "Painting"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Showcasing stunning architectural outcomes across Nigeria
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="text-primary" size={20} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Note for replacing images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-lg px-6 py-4">
            <p className="text-gray-700">
              <span className="font-semibold text-accent">Note:</span> Replace these placeholder images with your actual project photos in the <code className="bg-gray-200 px-2 py-1 rounded">public/images</code> folder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

