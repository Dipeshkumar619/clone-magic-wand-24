const values = [
  { letter: "S", title: "Strength", desc: "We are strong in our commitment to quality, reliability, and global partnerships." },
  { letter: "P", title: "Passion", desc: "Our love for what we do drives us to deliver the best products and service." },
  { letter: "I", title: "Integrity", desc: "Honesty, transparency, and ethical practices guide all our business decisions." },
  { letter: "R", title: "Resilience", desc: "We overcome challenges and adapt to deliver consistent results for our clients." },
  { letter: "I", title: "Innovation", desc: "We embrace creative solutions to improve processes, products, and customer experience." },
  { letter: "T", title: "Teamwork", desc: "Collaboration and mutual respect help us achieve shared success worldwide." },
];

const ValuesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 text-center">
          Our Values
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
          The SPIRIT That Drives Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={`${v.letter}-${i}`}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded bg-gold/20 flex items-center justify-center mb-4">
                <span className="text-xl font-heading font-bold text-gold-dark">{v.letter}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
