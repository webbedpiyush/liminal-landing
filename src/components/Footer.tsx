const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">D</span>
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              Dashcam for Life
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Dashcam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
