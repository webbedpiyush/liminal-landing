import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroGlasses from "@/assets/hero-glasses.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-gold border border-gold/30 rounded-full bg-gold/5">
              Introducing the Future of Memory
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6"
          >
            <span className="text-gradient-gold">Dashcam</span>{" "}
            <span className="text-foreground">for Life</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            GoPro is for the 1% full of extreme adventures. We're for the 99% — 
            <span className="text-foreground"> hassle-free recording of life's special moments.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl">
              Pre-order Now
            </Button>
            <Button variant="heroOutline" size="xl">
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-75" />
            <img
              src={heroGlasses}
              alt="Premium video recording glasses"
              className="relative z-10 w-full max-w-4xl animate-float"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
