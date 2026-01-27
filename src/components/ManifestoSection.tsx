import { motion } from "framer-motion";

const ManifestoSection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-champagne/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6 text-center">
              The Manifesto
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground text-center mb-12">
              Technology Should{" "}
              <span className="text-gradient italic">Serve You</span>.
              <br />
              Not Consume You.
            </h2>

            <div className="space-y-8 text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-body text-lg md:text-xl text-foreground leading-relaxed"
              >
                We believe the future isn't about strapping a computer to your face. 
                It's not about notifications floating in your eyes or emails interrupting your sunset. 
                It's about doing <span className="text-champagne">one thing</span>, and doing it perfectly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-body text-smoke leading-relaxed"
              >
                We looked at the world of smart glasses and saw a landscape of "Jack of all trades, 
                masters of none." Devices that do too much, too poorly. Batteries that die before lunch. 
                Interfaces that require a manual to understand.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-body text-lg text-foreground leading-relaxed"
              >
                So we built the <span className="text-champagne italic">antidote</span>.
              </motion.p>
            </div>

            {/* Key principles */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {[
                {
                  title: "No Screens",
                  description: "By removing the display, we eliminate cognitive overload and extend battery life.",
                },
                {
                  title: "No Friction",
                  description: "Zero learning curve. If you can wear glasses, you can use Liminal.",
                },
                {
                  title: "No Cyborgs",
                  description: "Designed to look like eyewear, not a science experiment.",
                },
              ].map((principle, index) => (
                <div
                  key={principle.title}
                  className="text-center p-6 rounded-lg border border-border/30 bg-card/30"
                >
                  <h3 className="font-display text-2xl text-champagne mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-body text-sm text-smoke leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
