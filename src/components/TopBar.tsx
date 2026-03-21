import { Phone, Facebook, Linkedin, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy text-primary-foreground py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8">
      <div className="container-wide flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden sm:inline">Follow Us:</span>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
              <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors">
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-0.5 sm:gap-4">
          <a href="tel:+919211611686" className="flex items-center gap-1 sm:gap-2 hover:text-gold transition-colors">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>+91 9211611686</span>
          </a>
          <span className="hidden sm:inline text-primary-foreground/30">|</span>
          <a href="tel:+971505170270" className="flex items-center gap-1 sm:gap-2 hover:text-gold transition-colors">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>+971 505170270</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
