import { Phone, Facebook, Linkedin, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy text-primary-foreground py-2 px-4 sm:px-6 lg:px-8">
      <div className="container-wide flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Follow Us:</span>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold" />
            <a href="tel:+919211611686" className="hover:text-gold transition-colors">+91 9211611686</a>
          </div>
          <span className="text-primary-foreground/30">|</span>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold" />
            <a href="tel:+971505170270" className="hover:text-gold transition-colors">+971 505170270</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
