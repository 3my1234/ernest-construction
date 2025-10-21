"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Johnsonernest20@gmail.com",
      href: "mailto:Johnsonernest20@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "09037538468",
      href: "tel:+2349037538468",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: "Suit 11 Global Plaza, Jahi, Abuja",
      href: "#",
    },
    {
      icon: MapPin,
      title: "Site Location",
      value: "Block 15, Opposite Jigo Primary School",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/share/17bbWF63zU/",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/j_ernestto?igsh=MXFyeW5jZndzZmNyMQ==",
      color: "hover:bg-pink-600",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: "https://x.com/Evans1thARICHA?t=JgOlIWo-P61D3IE9EZbF2w&s=09",
      color: "hover:bg-black",
    },
    {
      name: "TikTok",
      icon: ({ className, size }: { className?: string; size?: number }) => (
        <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      href: "https://tiktok.com/@ernestconstruction",
      color: "hover:bg-gray-900",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary-light to-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Build <span className="text-accent">Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to start your next construction project? Get in touch with us today and let&apos;s create something amazing.
            </p>

            {/* Contact Information */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-white group"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.title}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-6"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="d5e73433-4fe8-4795-a2e0-abcdd71de6bf" />
              <input type="hidden" name="subject" value="New Contact from Ernest Construction Website" />
              <input type="hidden" name="from_name" value="Ernest Construction Website" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-white font-semibold py-4 rounded-lg hover:bg-accent-light transition-colors shadow-lg"
              >
                Send Message
              </motion.button>
              <p className="text-sm text-gray-500 text-center">
                Messages will be sent to: <strong>Johnsonernest20@gmail.com</strong>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

