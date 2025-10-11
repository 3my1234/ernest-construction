"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Residential", href: "#services" },
      { name: "Commercial", href: "#services" },
      { name: "Infrastructure", href: "#services" },
      { name: "Estate Development", href: "#services" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/ernestconstruction" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/ernestconstruction" },
    { name: "X", icon: Twitter, href: "https://x.com/ernestconstruct" },
    {
      name: "TikTok",
      icon: ({ className, size }: { className?: string; size?: number }) => (
        <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      href: "https://tiktok.com/@ernestconstruction",
    },
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-accent">ERNEST</span>
              </h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Ernest Building and Construction Enterprise Nigeria LTD - Building stunning architectural outcomes across Nigeria.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Suit 11 Global Plaza, Jahi, Abuja</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+2349037538468" className="hover:text-accent transition-colors">
                  09037538468
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@ernestconstruction.ng" className="hover:text-accent transition-colors">
                  info@ernestconstruction.ng
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Ernest Building and Construction Enterprise Nigeria LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

