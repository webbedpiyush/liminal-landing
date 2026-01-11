import { motion } from "framer-motion";

const specs = [
  { label: "Recording", value: "4K 60fps", detail: "Cinematic quality" },
  { label: "Battery", value: "14 hours", detail: "Standby time" },
  { label: "Weight", value: "38g", detail: "Lighter than regular glasses" },
  { label: "Storage", value: "128GB", detail: "~40 hours of footage" },
];

const SpecsSection = () => {
  return (
    <section className="py-32 md:py-48 border-t border-border/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
            Specifications
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-16">
            Technology that <span className="text-gradient italic">disappears</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="font-body text-smoke text-xs tracking-[0.15em] uppercase">
                  {spec.label}
                </p>
                <p className="font-display text-3xl md:text-4xl text-champagne">
                  {spec.value}
                </p>
                <p className="font-body text-sm text-smoke">
                  {spec.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecsSection;
