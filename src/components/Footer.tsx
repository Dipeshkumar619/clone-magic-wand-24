import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">
              Falcon <span className="text-gold">Crest</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              A trusted merchant exporter specializing in premium spices, rice, pulses, and agro commodities.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-gold transition-colors">Products</a></li>
              <li><a href="#why-us" className="hover:text-gold transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Ananthapur, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+918885271092" className="hover:text-gold transition-colors">+91 8885271092</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@falconcrest.com" className="hover:text-gold transition-colors">info@falconcrest.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-4 text-center text-sm text-primary-foreground/50">
        <div className="container-wide px-4">
          © {new Date().getFullYear()} Falcon Crest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
