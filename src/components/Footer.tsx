const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo */}
            <div>
              <span className="font-display text-xl font-light text-foreground tracking-wide">
                <span className="text-champagne italic">Dashing</span> Glasses
              </span>
              <p className="font-body text-sm text-smoke mt-2">
                Memory, redefined.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 font-body text-sm text-smoke">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Press</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-smoke">
              © 2026 Dashing Glasses. All rights reserved.
            </p>
            <p className="font-body text-xs text-smoke">
              Designed with intention. Built for presence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
