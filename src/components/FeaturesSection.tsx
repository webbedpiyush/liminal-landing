import { motion } from "framer-motion";
import { Glasses, Battery, Wifi, Camera, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Glasses,
    title: "Elegant Design",
    description: "Looks like designer eyewear. Works like a high-end camera.",
  },
  {
    icon: Camera,
    title: "4K Recording",
    description: "Crystal clear footage that does your memories justice.",
  },
  {
    icon: Battery,
    title: "All-Day Battery",
    description: "12+ hours of standby. Always ready when life happens.",
  },
  {
    icon: Wifi,
    title: "Instant Sync",
    description: "Footage appears in your phone. No cables, no hassle.",
  },
  {
    icon: Sparkles,
    title: "AI Highlights",
    description: "Automatic editing creates shareable clips instantly.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your memories stay yours. End-to-end encrypted.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 bg-charcoal-light">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Premium <span className="text-gradient-gold">Features</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Technology that disappears, so you can be present.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-background/50 border border-border hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
