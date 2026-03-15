import spicesImg from "@/assets/spices.jpg";
import riceImg from "@/assets/rice.jpg";
import pulsesImg from "@/assets/pulses.jpg";
import groundnutsImg from "@/assets/groundnuts.jpg";
import nutsOilseedsImg from "@/assets/nuts-oilseeds.jpg";
import milletsImg from "@/assets/millets.jpg";
import plantationImg from "@/assets/plantation.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import vegetablesImg from "@/assets/vegetables.jpg";
import oilsImg from "@/assets/oils.jpg";
import agriProductsImg from "@/assets/agri-products.jpg";

const products = [
  { name: "Spices", image: spicesImg, desc: "Premium spices sourced from reliable growers, known for rich aroma, natural color, and strong flavor." },
  { name: "Rice", image: riceImg, desc: "High-quality rice suitable for both retail and bulk consumption across global markets." },
  { name: "Pulses", image: pulsesImg, desc: "Nutritious pulses sourced from trusted farms and cleaned using modern techniques." },
  { name: "Ground Nuts", image: groundnutsImg, desc: "Carefully selected and processed ground nuts to maintain freshness and quality." },
  { name: "Nuts & Oilseeds", image: nutsOilseedsImg, desc: "Premium nuts and oilseeds, processed under strict quality control measures." },
  { name: "Millets & Grains", image: milletsImg, desc: "Premium selection of millets and grains, processed under strict quality standards." },
  { name: "Plantation & Horticulture", image: plantationImg, desc: "Diverse range of premium plantation and horticulture products from trusted estates." },
  { name: "Fresh Fruits", image: fruitsImg, desc: "Premium fresh fruits, sourced from trusted orchards and handled with care." },
  { name: "Vegetables", image: vegetablesImg, desc: "Premium fresh vegetables, sourced from trusted farms and growers." },
  { name: "Oils & Extracts", image: oilsImg, desc: "Premium range of oils and extracts from high-quality seeds and raw materials." },
  { name: "Agri Products", image: agriProductsImg, desc: "Diverse range of premium agri products processed under strict standards." },
];

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
            <div
              key={product.name}
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
                <a
                  href="#contact"
                  className="inline-block bg-gold text-secondary-foreground text-sm px-5 py-2 rounded font-semibold hover:bg-gold-dark transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
