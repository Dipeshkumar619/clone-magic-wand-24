import aboutImg from "@/assets/about.png";
import { Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-wide">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 text-center">
          About Falcon Crest
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
          Leading Spices, Rice & Pulses Exporter
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Falcon Crest is a trusted merchant exporter based in Dubai, UAE. We specialize in the export of premium spices, rice, pulses, and agro commodities, including Dry Red Chilly, Turmeric Powder, Basmati Rice, Non-Basmati Rice, and Ground Nuts.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email us</p>
                  <p className="font-semibold text-foreground">info@falconcrest.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <p className="font-semibold text-foreground">+91 9211611686</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-navy-light transition-colors">
              About Us
            </a>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="About Falcon Crest"
              className="rounded-lg shadow-xl w-[60%] object-cover aspect-square mx-auto"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold rounded-lg hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
