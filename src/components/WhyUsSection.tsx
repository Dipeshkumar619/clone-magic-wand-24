import { Award, Package, Globe } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality Products",
    desc: "We source spices, rice, pulses, and ground nuts directly from trusted farmers and suppliers, ensuring top-notch quality.",
  },
  {
    icon: Package,
    title: "Customized Packaging",
    desc: "Flexible packaging and private labeling options to meet diverse market requirements.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Serving customers in over 50 countries with timely and safe delivery.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 text-center">
          Why Choosing Us!
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Few Reasons Why People Choosing Us!
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold/20 flex items-center justify-center">
                <r.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{r.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
