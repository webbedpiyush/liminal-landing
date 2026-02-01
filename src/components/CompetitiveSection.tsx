import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type FeatureValue = "yes" | "no" | "partial" | string;

interface CompetitorData {
    name: string;
    highlight?: boolean;
    features: Record<string, FeatureValue>;
}

const competitors: CompetitorData[] = [
    {
        name: "Liminal",
        highlight: true,
        features: {
            primaryUse: "Evidence / Work",
            battery: "12h+ (Tether)",
            camera: "12MP / 8MP GS",
            display: "None (Audio)",
            dataPrivacy: "Local / Evidence",
            price: "$99 / $199",
        },
    },
    {
        name: "Ray-Ban Meta",
        features: {
            primaryUse: "Social Media",
            battery: "~4h",
            camera: "12MP Ultra-Wide",
            display: "None",
            dataPrivacy: "Meta Cloud",
            price: "$299",
        },
    },
    {
        name: "Solos AirGo 3",
        features: {
            primaryUse: "AI Chat / Audio",
            battery: "10h (Audio)",
            camera: "None / 16MP",
            display: "None",
            dataPrivacy: "Solos Cloud",
            price: "$199 - $299",
        },
    },
    {
        name: "Vuzix Blade 2",
        features: {
            primaryUse: "AR / Info Display",
            battery: "~2-3h",
            camera: "8MP Auto-Focus",
            display: "Waveguide HUD",
            dataPrivacy: "Enterprise",
            price: "~$1,299",
        },
    },
];

const featureLabels: Record<string, string> = {
    primaryUse: "Primary Utility",
    battery: "Battery Life",
    camera: "Camera",
    display: "Display",
    dataPrivacy: "Data Privacy",
    price: "Price",
};

const featureOrder = ["primaryUse", "battery", "camera", "display", "dataPrivacy", "price"];

const CompetitiveSection = () => {
    return (
        <section className="py-32 md:py-48 relative overflow-hidden">
            {/* Section divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
                        The Competitive Landscape
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                        Why <span className="text-gradient italic">Liminal</span>?
                    </h2>
                    <p className="font-body text-lg text-smoke max-w-2xl mx-auto">
                        We don't chase features. We perfect the essentials.
                    </p>
                </motion.div>

                {/* Comparison table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto overflow-x-auto"
                >
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 text-left font-body text-sm text-smoke border-b border-border/30">
                                    Feature
                                </th>
                                {competitors.map((competitor) => (
                                    <th
                                        key={competitor.name}
                                        className={`p-4 text-center font-body text-sm border-b border-border/30 ${competitor.highlight
                                                ? "text-champagne bg-champagne/5"
                                                : "text-foreground"
                                            }`}
                                    >
                                        {competitor.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {featureOrder.map((featureKey) => (
                                <tr key={featureKey} className="border-b border-border/20">
                                    <td className="p-4 font-body text-sm text-smoke">
                                        {featureLabels[featureKey]}
                                    </td>
                                    {competitors.map((competitor) => {
                                        const value = competitor.features[featureKey];
                                        return (
                                            <td
                                                key={`${competitor.name}-${featureKey}`}
                                                className={`p-4 text-center font-body text-sm ${competitor.highlight ? "bg-champagne/5" : ""
                                                    }`}
                                            >
                                                {value === "yes" ? (
                                                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                ) : value === "no" ? (
                                                    <X className="w-5 h-5 text-red-500 mx-auto" />
                                                ) : value === "partial" ? (
                                                    <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
                                                ) : (
                                                    <span
                                                        className={
                                                            competitor.highlight ? "text-foreground" : "text-smoke"
                                                        }
                                                    >
                                                        {value}
                                                    </span>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Key differentiators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        {
                            title: "12-Hour Enterprise Battery",
                            description: "Tether-Link system shifts weight off nose for all-day comfort.",
                        },
                        {
                            title: "Evidence-Grade Privacy",
                            description: "Chain-of-custody metadata. Air-gapped mode. Court-ready.",
                        },
                        {
                            title: "No Display = No Distraction",
                            description: "Reduced power draw, weight, and cognitive overload.",
                        },
                    ].map((diff) => (
                        <div
                            key={diff.title}
                            className="p-6 rounded-xl border border-champagne/20 bg-champagne/5 text-center"
                        >
                            <h4 className="font-display text-lg text-foreground mb-2">
                                {diff.title}
                            </h4>
                            <p className="font-body text-sm text-smoke">{diff.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CompetitiveSection;
