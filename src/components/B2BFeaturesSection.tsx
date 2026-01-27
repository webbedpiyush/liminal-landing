import { motion } from "framer-motion";
import { Truck, ShieldCheck, Factory, Battery, Wifi, Cpu } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const enterpriseFeatures = [
    {
        id: "logistics",
        icon: Truck,
        title: "The Last 100 Yards",
        subtitle: "Logistics & Delivery",
        description:
            "Saving 20 seconds per stop across 200 stops saves over an hour of labor per driver, per day.",
        details: [
            {
                heading: "Auto-Scan via OCR",
                content:
                    "Look at a package to scan it. No holstering/unholstering scanners. Hands stay free to carry packages.",
            },
            {
                heading: "Audio Navigation",
                content:
                    "Bone conduction audio delivers turn-by-turn directions without blocking environmental awareness.",
            },
            {
                heading: "Proof of Delivery",
                content:
                    "Look at the delivered package for automatic photo capture. GPS-tagged, timestamped, court-ready documentation.",
            },
        ],
    },
    {
        id: "security",
        icon: ShieldCheck,
        title: "Line of Sight Advantage",
        subtitle: "Industrial Security",
        description:
            "Chest-mounted cameras fail when the body turns away. Glasses record exactly what the officer sees.",
        details: [
            {
                heading: "RTMP Live Streaming",
                content:
                    "Real-time video to command center during incidents. Supervisors see what officers see, instantly.",
            },
            {
                heading: "Discreet Design",
                content:
                    "Security staff need to be approachable, not intimidating. Project 67 looks like standard eyewear.",
            },
            {
                heading: "Man Down Detection",
                content:
                    "9-axis IMU detects falls. If accelerometer detects sudden fall + no motion, triggers SOS automatically.",
            },
        ],
    },
    {
        id: "manufacturing",
        icon: Factory,
        title: "The AI Training Goldmine",
        subtitle: "Manufacturing & Robotics",
        description:
            "AI factories building humanoid robots are starving for egocentric video data of humans manipulating objects.",
        details: [
            {
                heading: "Egocentric Data Collection",
                content:
                    "First-person video of assembly tasks. How hands hold tools, turn screws, navigate cluttered workbenches.",
            },
            {
                heading: "Subsidized Hardware Model",
                content:
                    "Offer Project 67 at reduced cost in exchange for anonymized training data. Win-win for clients and AI development.",
            },
            {
                heading: "Quality Control Documentation",
                content:
                    "Visual record of assembly processes. Instant playback for training and error analysis.",
            },
        ],
    },
];

const enterpriseSpecs = [
    {
        icon: Battery,
        label: "12-Hour Runtime",
        detail: "Tether-Link belt battery system",
    },
    {
        icon: Wifi,
        label: "Air-Gapped Mode",
        detail: "Data never touches public cloud",
    },
    {
        icon: Cpu,
        label: "Global Shutter",
        detail: "8MP sensor for motion scanning",
    },
];

const B2BFeaturesSection = () => {
    return (
        <section className="py-32 md:py-48 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background">
            {/* Industrial grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--champagne) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--champagne) / 0.3) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
                        Project 67 — Enterprise
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6">
                        The Antidote to{" "}
                        <span className="text-gradient italic">Complexity</span>.
                    </h2>
                    <p className="font-body text-lg text-smoke max-w-2xl mx-auto">
                        Industrial-grade documentation. Zero learning curve.
                    </p>
                </motion.div>

                {/* Enterprise specs bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-8 mb-16 p-6 rounded-xl border border-champagne/20 bg-champagne/5 max-w-4xl mx-auto"
                >
                    {enterpriseSpecs.map((spec) => (
                        <div key={spec.label} className="flex items-center gap-3">
                            <spec.icon className="w-5 h-5 text-champagne" />
                            <div>
                                <p className="font-body text-sm font-medium text-foreground">
                                    {spec.label}
                                </p>
                                <p className="font-body text-xs text-smoke">{spec.detail}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {enterpriseFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl border border-border/50 bg-card/50 hover:border-champagne/30 transition-colors"
                        >
                            <div className="p-3 rounded-lg bg-champagne/10 w-fit mb-6">
                                <feature.icon className="w-6 h-6 text-champagne" />
                            </div>

                            <h3 className="font-display text-xl text-foreground mb-1">
                                {feature.title}
                            </h3>
                            <p className="font-body text-sm text-champagne mb-4">
                                {feature.subtitle}
                            </p>

                            <p className="font-body text-sm text-smoke leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={feature.id} className="border-border/30">
                                    <AccordionTrigger className="font-body text-sm text-smoke hover:text-foreground py-3">
                                        See capabilities
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-4 pt-2">
                                            {feature.details.map((detail) => (
                                                <div key={detail.heading}>
                                                    <h4 className="font-body text-sm font-medium text-foreground mb-1">
                                                        {detail.heading}
                                                    </h4>
                                                    <p className="font-body text-xs text-smoke leading-relaxed">
                                                        {detail.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default B2BFeaturesSection;
