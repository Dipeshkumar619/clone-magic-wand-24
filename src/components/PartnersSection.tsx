import partnerLmok from "@/assets/partner-lmok.jpeg";
import partnerWeiber from "@/assets/partner-weiber.jpeg";
import partnerAbn from "@/assets/partner-abn.jpeg";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "LMOK Global Trade",
    role: "",
    image: partnerLmok,
    url: undefined,
  },
  {
    name: "Weiber India",
    role: "",
    image: partnerWeiber,
    url: undefined,
  },
  {
    name: "ABN Trading Co.",
    role: "Premium Spice Exporters",
    image: partnerAbn,
    url: "https://abntradingco.in/",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-cream">
      <div className="container-wide">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 text-center">
          Trusted Network
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
          Our Partners
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-card rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow"
            >
              {partner.image ? (
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-navy flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-gold-light">
                    {partner.name}
                  </span>
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{partner.role}</p>
                {partner.url && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
