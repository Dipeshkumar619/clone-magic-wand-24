import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, ChevronRight } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-primary mb-4">Product Not Found</h1>
            <Link to="/#products" className="text-gold-dark hover:text-gold font-semibold">
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/50 to-transparent" />
        <div className="relative z-10 container-wide pb-10">
          <nav className="flex items-center gap-1.5 text-sm text-gold-light/80 mb-4">
            <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/#products" className="hover:text-gold-light transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold-light font-medium">{product.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">
            {product.name}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg leading-relaxed">
            {product.desc}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">About This Category</p>
            <p className="text-foreground/80 text-lg leading-relaxed">{product.longDesc}</p>
          </div>
        </div>
      </section>

      {/* Varieties Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-3">
            Types & Varieties
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Explore our range of {product.name.toLowerCase()} available for export.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.varieties.map((variety, index) => (
              <div
                key={variety.name}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center text-sm font-bold shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-primary group-hover:text-gold-dark transition-colors">
                    {variety.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {variety.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
            Get in touch with us for pricing, samples, and bulk order inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="inline-block bg-gold text-secondary-foreground px-8 py-3 rounded font-semibold hover:bg-gold-dark transition-colors"
            >
              Enquire Now
            </a>
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 border border-gold/40 text-gold-light px-8 py-3 rounded font-semibold hover:bg-gold/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
