import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/5 rounded-full blur-[120px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
          >
            {/* Left - The question */}
            <div>
              <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
                The Philosophy
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground">
                Action cameras are for the{" "}
                <span className="text-gradient italic">1%</span> chasing adrenaline.
              </h2>
            </div>

            {/* Right - The answer */}
            <div className="space-y-8">
              <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
                We built Dashing for the <span className="text-champagne">99%</span> — 
                for the quiet magic that unfolds in living rooms, backyards, 
                and kitchen tables.
              </p>
              <p className="font-body text-smoke leading-relaxed">
                No mounting. No charging anxiety. No learning curve. 
                Just life, beautifully captured.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
