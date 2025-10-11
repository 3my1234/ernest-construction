"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Award } from "lucide-react";

export default function MasterAtWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workImages = [
    "/media/new2.jpeg",
    "/media/new 3.jpeg",
    "/media/new4.jpeg",
    "/media/new5.jpeg",
    "/media/new 6.jpeg",
    "/media/new7.jpeg",
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary-light to-black text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-accent" size={40} />
            <h2 className="text-4xl lg:text-5xl font-bold">
              The <span className="text-accent">Master</span> at Work
            </h2>
            <Award className="text-accent" size={40} />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience craftsmanship and dedication in action
          </p>
        </motion.div>

        {/* Featured Video with About Image */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src="/media/about me.jpeg"
              alt="The Master at Work"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold mb-2">Meet the Expert</h3>
              <p className="text-gray-200">Years of experience delivering excellence</p>
            </div>
          </motion.div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <video
              className="w-full h-full object-cover"
              controls
              poster="/media/new2.jpeg"
              preload="metadata"
            >
              <source src="/media/new.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Play size={16} />
              Watch Process
            </div>
          </motion.div>
        </div>

        {/* Image Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Precision & <span className="text-accent">Excellence</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {workImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer ${
                  index === 0 || index === 5 ? "md:col-span-2 h-64" : "h-48"
                }`}
              >
                <img
                  src={image}
                  alt={`Master at work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Play className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Want to see this level of craftsmanship in your project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-colors shadow-lg"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

