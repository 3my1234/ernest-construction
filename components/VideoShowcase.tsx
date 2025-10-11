"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Construction Excellence",
    description: "Watch our team deliver outstanding construction projects",
    videoSrc: "/media/WhatsApp Video 2025-10-12 at 08.44.05.mp4",
    thumbnail: "/media/WhatsApp Image 2025-10-12 at 08.45.37.jpeg",
  },
  {
    id: 2,
    title: "Quality Workmanship",
    description: "See our attention to detail in every project",
    videoSrc: "/media/WhatsApp Video 2025-10-12 at 08.46.21.mp4",
    thumbnail: "/media/WhatsApp Image 2025-10-12 at 08.54.41.jpeg",
  },
  {
    id: 3,
    title: "Professional Service",
    description: "Experience our professional approach to construction",
    videoSrc: "/media/WhatsApp Video 2025-10-12 at 08.47.29.mp4",
    thumbnail: "/media/WhatsApp Image 2025-10-12 at 08.57.42.jpeg",
  },
];

export default function VideoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            See Our Work in <span className="text-accent">Action</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the quality and professionalism that sets us apart
          </p>
        </motion.div>

        <div className="space-y-32">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{video.title}</h3>
                <p className="text-xl text-gray-400 mb-6">{video.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors"
                >
                  <Play size={20} className="mr-2" />
                  Watch Video
                </motion.button>
              </div>

              {/* Video */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl group"
                >
                  <video
                    className="w-full h-auto"
                    controls
                    poster={video.thumbnail}
                    preload="metadata"
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

