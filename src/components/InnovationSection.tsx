import spicesBanner from "@/assets/spices-banner.jpg";
import { Lightbulb } from "lucide-react";

const InnovationSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-5">
              <Lightbulb className="w-7 h-7 text-gold-dark" />
            </div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Falcon Crest, innovation is at the core of everything we do. We continuously explore new ideas, technologies, and processes to enhance the quality of our spices, rice, pulses, and agro products. From customized packaging solutions to efficient supply chain management, our innovative approach ensures that we meet the evolving needs of our global customers.
            </p>
            <a href="#" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-navy-light transition-colors">
              Read More
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={spicesBanner} alt="Innovation at Falcon Crest" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
