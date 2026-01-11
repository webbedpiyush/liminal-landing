import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">D</span>
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              Dashcam
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#moments" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Moments
            </a>
            <a href="#compare" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Compare
            </a>
          </div>

          {/* CTA */}
          <a
            href="#preorder"
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-gradient-gold rounded-lg hover:shadow-gold transition-all duration-300"
          >
            Pre-order
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
