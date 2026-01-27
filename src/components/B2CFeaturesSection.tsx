import { motion } from "framer-motion";
import { Shield, Heart, Brain, Video } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
    {
        id: "security",
        icon: Shield,
        title: "The Dashcam for Life",
        subtitle: "Personal Security & Liability",
        description:
            "Your silent witness. From workplace exploitation to road rage, your word against theirs isn't enough anymore.",
        details: [
            {
                heading: "Always-Ready Buffer",
                content:
                    "Capture the last 60 seconds of any interaction with a single tap. The inciting incident—not just the reaction—is preserved.",
            },
            {
                heading: "Evidence Certification",
                content:
                    "Automated chain-of-custody metadata with GPS, timestamp, and device ID for court admissibility.",
            },
            {
                heading: "Behavior Modification",
                content:
                    "The documented Hawthorne Effect means people behave better when they know they're on camera. Walk with confidence.",
            },
        ],
    },
    {
        id: "parents",
        icon: Heart,
        title: "Be in the Moment",
        subtitle: "For Parents & Families",
        description:
            "Stop watching your children through a 6-inch phone screen. Capture their first steps while looking them in the eye.",
        details: [
            {
                heading: "Hands-Free Memory",
                content:
                    "Toss your toddler in the air with both hands. Make eye contact with your child, not a lens. The camera is always ready.",
            },
            {
                heading: "Safety Tracking",
                content:
                    "Integrated GPS lets you locate children in crowded places. The camera adds visual context—see who they're with.",
            },
            {
                heading: "No Missed Moments",
                content:
                    "Life's magic happens when you least expect it. No fumbling for your phone. Just presence and memory.",
            },
        ],
    },
    {
        id: "caregivers",
        icon: Brain,
        title: "Peace of Mind",
        subtitle: "For Caregivers & Dementia Care",
        description:
            "Caring for a loved one with dementia is a full-time worry. Dashing Glasses act as a lifeline.",
        details: [
            {
                heading: "Memory Reinforcement",
                content:
                    "Reviewing POV footage with a caregiver stimulates neural pathways. The visual cues serve as an external hippocampus.",
            },
            {
                heading: "Drop-In View",
                content:
                    "Securely check their location and surroundings during a wandering event. Reduce the stress of constant worry.",
            },
            {
                heading: "Privacy Geofencing",
                content:
                    "Recording is disabled in bathrooms but enabled when the front door opens. Dignity preserved, safety assured.",
            },
        ],
    },
    {
        id: "creators",
        icon: Video,
        title: "True POV",
        subtitle: "For Content Creators",
        description:
            "Your audience wants to see the world through your eyes. Not from a chest mount. Not from a shaky hand.",
        details: [
            {
                heading: "Vertical Video Native",
                content:
                    "9:16 portrait orientation optimized for TikTok, Instagram Reels, and YouTube Shorts. Ready to share instantly.",
            },
            {
                heading: "Industrial-Grade EIS",
                content:
                    "Electronic Image Stabilization eliminates the nauseating yaw and pitch of walking. Buttery-smooth footage every time.",
            },
            {
                heading: "Authentic Perspective",
                content:
                    "The ultimate vlogging tool is the one you're already wearing. No awkward mounts. Just pure, authentic POV.",
            },
        ],
    },
];

const B2CFeaturesSection = () => {
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
                    className="text-center mb-20"
                >
                    <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
                        Dashing Glasses
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6">
                        The Ultimate <span className="text-gradient italic">Witness</span>.
                        <br />
                        The Perfect <span className="text-gradient italic">Memory</span>.
                    </h2>
                    <p className="font-body text-lg text-smoke max-w-2xl mx-auto">
                        Never lose an argument. Never miss a moment.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl border border-border/50 bg-card/30 hover:border-champagne/30 transition-colors"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-champagne/10">
                                    <feature.icon className="w-6 h-6 text-champagne" />
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl text-foreground mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="font-body text-sm text-champagne">
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className="font-body text-smoke leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={feature.id} className="border-border/30">
                                    <AccordionTrigger className="font-body text-sm text-smoke hover:text-foreground py-3">
                                        Learn more
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-4 pt-2">
                                            {feature.details.map((detail) => (
                                                <div key={detail.heading}>
                                                    <h4 className="font-body text-sm font-medium text-foreground mb-1">
                                                        {detail.heading}
                                                    </h4>
                                                    <p className="font-body text-sm text-smoke leading-relaxed">
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

export default B2CFeaturesSection;
