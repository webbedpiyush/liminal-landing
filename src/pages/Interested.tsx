import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Video, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Interested = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar showNavLinks={false} />

      <main className="flex-1 flex items-center justify-center py-32 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-champagne/3 rounded-full blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center mx-auto mb-8">
              <Video className="w-10 h-10 text-champagne" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
              Experience the Future
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl md:text-7xl font-light text-foreground mb-6 leading-[1.1]">
              Book Your <span className="text-gradient italic">Demo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-body text-lg text-smoke max-w-lg mx-auto leading-relaxed mb-12">
              Schedule a personal demo with our team. See how Dashing Glasses
              can transform the way you capture life's precious moments.
            </motion.p>

            <div className="flex flex-col gap-12">
              {/* Cal.com Button - Shows first on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="order-1 md:order-2">
                <Button
                  variant="solid"
                  size="xl"
                  className="w-full md:w-auto group"
                  asChild>
                  <a
                    href="https://cal.com/liminalglasses/15min"
                    target="_blank"
                    rel="noopener noreferrer">
                    Schedule Demo on Cal.com
                    <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                </Button>

                <p className="font-body text-xs text-smoke mt-6">
                  Can't find a time that works?{" "}
                  <a
                    href="mailto:support@liminalglasses.com"
                    className="text-champagne hover:underline">
                    Email us
                  </a>
                </p>
              </motion.div>

              {/* Features - Shows second on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid md:grid-cols-3 gap-6 order-2 md:order-1">
                <div className="flex flex-col items-center p-6 rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm">
                  <Clock className="w-8 h-8 text-champagne mb-3" />
                  <p className="font-body text-sm text-smoke">30 Minutes</p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm">
                  <Video className="w-8 h-8 text-champagne mb-3" />
                  <p className="font-body text-sm text-smoke">Live Demo</p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm">
                  <Calendar className="w-8 h-8 text-champagne mb-3" />
                  <p className="font-body text-sm text-smoke">Pick Your Time</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 pt-12 border-t border-border/30">
            <h3 className="font-display text-2xl text-foreground mb-6 text-center">
              What to Expect
            </h3>
            <div className="space-y-4">
              {[
                "Live walkthrough of Dashing Glasses features",
                "See real-world capture quality and playback",
                "Q&A with our product specialists",
                "Exclusive early-bird pricing details",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-champagne mt-2.5 flex-shrink-0" />
                  <p className="font-body text-smoke">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Interested;