import { motion } from "framer-motion";

interface NavbarProps {
  showNavLinks?: boolean;
  showCta?: boolean;
}

const Navbar = ({ showNavLinks = true, showCta = true }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/30"
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
          <img
              src="/favicon.ico"
              alt="Dashing Glasses"
              className="h-20 md:h-32 w-auto"
            />
          </a>

          {/* Navigation Links */}
          {showNavLinks && (
            <div className="hidden md:flex items-center gap-10">
              <a href="#philosophy" className="font-body text-smoke hover:text-foreground transition-colors text-sm tracking-wide">
                Philosophy
              </a>
              <a href="#moments" className="font-body text-smoke hover:text-foreground transition-colors text-sm tracking-wide">
                Moments
              </a>
              <a href="#specs" className="font-body text-smoke hover:text-foreground transition-colors text-sm tracking-wide">
                Specs
              </a>
            </div>
          )}

          {/* CTA */}
          {showCta && (
            <a
              href="#reserve"
              className="font-body text-sm tracking-wide px-5 py-2.5 border border-champagne/40 text-champagne hover:bg-champagne hover:text-background transition-all duration-500"
            >
              Reserve
            </a>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
