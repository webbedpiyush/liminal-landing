import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
            Limited First Edition
          </p>
          
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-8 leading-[1.1]">
            Stop watching life through a{" "}
            <span className="text-gradient italic">screen</span>
          </h2>
          
          <p className="font-body text-lg text-smoke max-w-xl mx-auto mb-12 leading-relaxed">
            The first 1,000 pairs ship this spring. Each one hand-finished. 
            Each one a commitment to presence over performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="solid" size="xl" className="group">
              Reserve Your Pair
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 text-center">
            <div>
              <p className="font-display text-3xl text-champagne">$349</p>
              <p className="font-body text-xs text-smoke tracking-wider mt-1">Starting price</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-display text-3xl text-champagne">847</p>
              <p className="font-body text-xs text-smoke tracking-wider mt-1">Reserved so far</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-display text-3xl text-champagne">Free</p>
              <p className="font-body text-xs text-smoke tracking-wider mt-1">Shipping worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
