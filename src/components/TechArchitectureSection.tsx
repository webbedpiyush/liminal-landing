import { motion } from "framer-motion";
import { Camera, Radio, Compass, Mic } from "lucide-react";

const apiModules = [
    {
        icon: Camera,
        name: "LiminalVision",
        description: "Camera Control",
        methods: ["startRecording()", "takePhoto()", "getBuffer()", "setResolution()"],
        highlight: "60-second pre-roll buffer for 'Witness Protection'",
    },
    {
        icon: Radio,
        name: "LiminalStream",
        description: "Connectivity",
        methods: ["RTMP/RTSP endpoints", "Webhook triggers", "Live streaming"],
        highlight: "Direct stream to YouTube, security ops, or private servers",
    },
    {
        icon: Compass,
        name: "LiminalSense",
        description: "Telemetry",
        methods: ["9-axis IMU access", "Dead reckoning", "Fall detection"],
        highlight: "Indoor positioning when GPS fails",
    },
    {
        icon: Mic,
        name: "LiminalEcho",
        description: "Audio & AI",
        methods: ["Noise cancellation", "Voice commands", "Custom wake words"],
        highlight: "Whisper-level voice isolation in noisy environments",
    },
];

const TechArchitectureSection = () => {
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
                        For Developers
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                        The Liminal <span className="text-gradient italic">SDK</span>
                    </h2>
                    <p className="font-body text-lg text-smoke max-w-2xl mx-auto">
                        Build custom integrations. Connect to your existing systems.
                        Full API access for enterprise partners.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {apiModules.map((module, index) => (
                        <motion.div
                            key={module.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl border border-border/50 bg-card/30 hover:border-champagne/30 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-champagne/10">
                                    <module.icon className="w-5 h-5 text-champagne" />
                                </div>
                                <div>
                                    <h3 className="font-body text-sm font-medium text-foreground">
                                        {module.name}
                                    </h3>
                                    <p className="font-body text-xs text-smoke">
                                        {module.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4">
                                {module.methods.map((method) => (
                                    <code
                                        key={method}
                                        className="block font-mono text-xs text-smoke/80 bg-background/50 px-2 py-1 rounded"
                                    >
                                        {method}
                                    </code>
                                ))}
                            </div>

                            <p className="font-body text-xs text-champagne/80 leading-relaxed">
                                {module.highlight}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Data sovereignty callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 rounded-xl border border-champagne/20 bg-champagne/5 max-w-3xl mx-auto text-center"
                >
                    <h4 className="font-display text-xl text-foreground mb-2">
                        Data Sovereignty Guaranteed
                    </h4>
                    <p className="font-body text-sm text-smoke">
                        Enterprise "Air-Gapped" mode available. Data transfers only via USB-C or local Intranet WiFi.
                        Your data never touches Liminal's public cloud. Required for government and high-security clients.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TechArchitectureSection;
