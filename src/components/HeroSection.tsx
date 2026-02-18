import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-gold font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
            Trusted Exporters of Quality Agro Products
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Premium Indian Spices, Rice & Pulses to the World
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            We are a leading merchant exporter of spices, rice, pulses, and agro commodities from India, specializing in sourcing, processing, customized packing, and global marketing.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-gold text-secondary-foreground px-7 py-3 rounded font-semibold hover:bg-gold-dark transition-colors"
            >
              Our Company
            </a>
            <a
              href="#products"
              className="border-2 border-primary-foreground text-primary-foreground px-7 py-3 rounded font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
