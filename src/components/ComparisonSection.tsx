import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    { feature: "Everyday wear comfort", us: true, them: false },
    { feature: "Subtle, elegant design", us: true, them: false },
    { feature: "Always-ready recording", us: true, them: false },
    { feature: "Hands-free capture", us: true, them: false },
    { feature: "Extreme sports focus", us: false, them: true },
    { feature: "Bulky mounting required", us: false, them: true },
  ];

  return (
    <section className="py-32 bg-gradient-radial">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Built for <span className="text-gradient-gold">Real Life</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Not everyone skydives. But everyone has moments worth remembering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-right">
              <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Feature</span>
            </div>
            <div className="text-center">
              <span className="text-gradient-gold font-display text-lg font-semibold">Us</span>
            </div>
            <div className="text-center">
              <span className="text-muted-foreground font-display text-lg">Them</span>
            </div>
          </div>

          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 items-center py-4 border-b border-border"
              >
                <div className="text-right">
                  <span className="text-foreground">{item.feature}</span>
                </div>
                <div className="flex justify-center">
                  {item.us ? (
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-gold" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.them ? (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Check className="w-5 h-5 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
