import { Link } from "react-router-dom";
import { products } from "@/data/products";

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          Our Products
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          <strong className="text-foreground">Falcon Crest</strong> offers a wide range of high-quality agro products sourced directly from trusted farmers and suppliers.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              to={`/products/${product.slug}`}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-primary mb-2 capitalize">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <span className="inline-block bg-gold text-secondary-foreground text-sm px-5 py-2 rounded font-semibold group-hover:bg-gold-dark transition-colors">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
