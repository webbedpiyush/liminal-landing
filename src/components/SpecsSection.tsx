import { motion } from "framer-motion";
import { useState } from "react";

const dashingSpecs = [
  { label: "Camera", value: "12MP", detail: "Ultra-Wide, Portrait Native" },
  { label: "Recording", value: "4K 60fps", detail: "Electronic Image Stabilization" },
  { label: "Weight", value: "38g", detail: "Lighter than regular glasses" },
  { label: "Storage", value: "128GB", detail: "~40 hours of footage" },
  { label: "Battery", value: "14 hours", detail: "Standby / 4h recording" },
  { label: "Chipset", value: "AR1 Gen 1", detail: "Qualcomm Snapdragon" },
];

const project67Specs = [
  { label: "Camera", value: "8MP", detail: "Global Shutter for scanning" },
  { label: "Recording", value: "1080p 60fps", detail: "Timestamp overlay mode" },
  { label: "Weight", value: "42g", detail: "Tether reduces nose weight" },
  { label: "Storage", value: "64GB", detail: "Auto-offload via WiFi" },
  { label: "Battery", value: "12+ hours", detail: "Tether-Link belt system" },
  { label: "Audio", value: "Bone", detail: "Conduction transducers" },
];

const SpecsSection = () => {
  const [activeTab, setActiveTab] = useState<"dashing" | "project67">("dashing");
  const specs = activeTab === "dashing" ? dashingSpecs : project67Specs;

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
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            Technology that <span className="text-gradient italic">disappears</span>
          </h2>

          {/* Tab toggle */}
          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab("dashing")}
              className={`px-6 py-3 rounded-lg font-body text-sm transition-all ${activeTab === "dashing"
                  ? "bg-champagne/20 text-foreground border border-champagne/40"
                  : "bg-card/30 text-smoke border border-border/30 hover:border-border/50"
                }`}
            >
              Dashing Glasses
            </button>
            <button
              onClick={() => setActiveTab("project67")}
              className={`px-6 py-3 rounded-lg font-body text-sm transition-all ${activeTab === "project67"
                  ? "bg-champagne/20 text-foreground border border-champagne/40"
                  : "bg-card/30 text-smoke border border-border/30 hover:border-border/50"
                }`}
            >
              Project 67
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6"
          >
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="space-y-2"
              >
                <p className="font-body text-smoke text-xs tracking-[0.15em] uppercase">
                  {spec.label}
                </p>
                <p className="font-display text-2xl md:text-3xl text-champagne">
                  {spec.value}
                </p>
                <p className="font-body text-xs text-smoke leading-relaxed">
                  {spec.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecsSection;
