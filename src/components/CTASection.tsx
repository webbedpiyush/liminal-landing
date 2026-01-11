import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Ready to Never Miss a{" "}
            <span className="text-gradient-gold">Moment</span>?
          </h2>
          <p className="text-muted-foreground text-xl mb-12 max-w-xl mx-auto">
            Join thousands of people who are capturing life's special moments, 
            hands-free and hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Pre-order Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-muted-foreground text-sm">
              Starting at <span className="text-gold font-semibold">$299</span> · Free shipping
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-border"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">50K+</p>
                <p className="text-muted-foreground text-sm mt-2">Pre-orders</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">4.9★</p>
                <p className="text-muted-foreground text-sm mt-2">Rating</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">12hr</p>
                <p className="text-muted-foreground text-sm mt-2">Battery Life</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
