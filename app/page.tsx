"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PaintingShowcase from "@/components/PaintingShowcase";
import MasterAtWork from "@/components/MasterAtWork";
import VideoShowcase from "@/components/VideoShowcase";
import HorizontalGallery from "@/components/HorizontalGallery";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <PaintingShowcase />
      <MasterAtWork />
      <VideoShowcase />
      <HorizontalGallery />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

