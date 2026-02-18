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
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gold" />
          <a href="tel:+918885271092" className="hover:text-gold transition-colors">+91 8885271092</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
