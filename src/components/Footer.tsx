const Footer = () => {
  return (
    <footer className="py-8 relative border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
            <p className="text-foreground font-semibold">
              Designed and Developed by Pruthviraj K P Copyright © 2025
            </p>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow"></div>
          </div>
          <p className="text-muted-foreground text-sm">
            Crafted with passion for immersive experiences
          </p>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
