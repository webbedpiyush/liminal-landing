import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GlassesCanvas from "@/components/GlassesCanvas";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      setScrollProgress(Math.min(scrollY / maxScroll, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Glasses Canvas */}
      <div className="absolute inset-0 z-0">
        <GlassesCanvas scrollProgress={scrollProgress} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-10" />

      <div className="container relative z-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-body text-smoke text-sm tracking-[0.3em] uppercase mb-8">
            Memory, Redefined
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] mb-8">
            <span className="text-gradient italic">Dashing</span>
            <br />
            <span className="text-foreground">Glasses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-body text-lg md:text-xl text-smoke max-w-xl mx-auto leading-relaxed mb-12">
            While others chase the extraordinary, we celebrate the everyday.
            Your dog's first trick. Your child's first steps. The moments that
            matter most often happen when you least expect them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button variant="solid" size="xl" asChild>
              <a href="/waitlist">Reserve Yours</a>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <a href="/interested">Book a Demo</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-3">
          <span className="text-smoke text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-champagne to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;