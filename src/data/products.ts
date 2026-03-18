import spicesImg from "@/assets/spices.jpg";
import riceImg from "@/assets/rice.jpg";
import pulsesImg from "@/assets/pulses.jpg";

import nutsOilseedsImg from "@/assets/nuts-oilseeds.jpg";
import milletsImg from "@/assets/millets.jpg";
import plantationImg from "@/assets/plantation.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import vegetablesImg from "@/assets/vegetables.jpg";
import oilsImg from "@/assets/oils.jpg";
import agriProductsImg from "@/assets/agri-products.jpg";

export interface ProductVariety {
  name: string;
  description: string;
}

export interface Product {
  name: string;
  slug: string;
  image: string;
  desc: string;
  longDesc: string;
  varieties: ProductVariety[];
}

export const products: Product[] = [
  {
    name: "Spices",
    slug: "spices",
    image: spicesImg,
    desc: "Premium spices sourced from reliable growers, known for rich aroma, natural color, and strong flavor.",
    longDesc: "India is the world's largest producer and exporter of spices. At Falcon Crest, we source the finest spices directly from trusted farms across India, ensuring authentic flavor, vibrant color, and aromatic richness that meets international quality standards.",
    varieties: [
      { name: "Turmeric (Haldi)", description: "Known for its deep golden color and earthy flavor. Used in cooking, health supplements, and cosmetics worldwide." },
      { name: "Red Chilli", description: "Available in whole, crushed, and powder forms. Rich red color with varying heat levels to suit global palates." },
      { name: "Black Pepper", description: "The 'King of Spices' — premium Malabar and Tellicherry grades with bold, pungent flavor." },
      { name: "Cumin Seeds (Jeera)", description: "Aromatic seeds with a warm, earthy taste. Essential in Indian, Middle Eastern, and Latin American cuisines." },
      { name: "Coriander Seeds", description: "Mild, citrusy flavor profile. Used whole or ground in curries, soups, and spice blends." },
      { name: "Cardamom", description: "The 'Queen of Spices' — intensely aromatic green and black varieties for sweet and savory dishes." },
      { name: "Cloves", description: "Strong, sweet, and aromatic. Used in spice blends, desserts, and traditional medicine." },
      { name: "Cinnamon", description: "Sweet and woody bark, available in sticks and powder. Used in baking, beverages, and savory dishes." },
      { name: "Fenugreek Seeds (Methi)", description: "Slightly bitter with a maple-like aroma. Used in curries, pickles, and health remedies." },
      { name: "Mustard Seeds", description: "Available in yellow, brown, and black varieties. Key ingredient in pickles, sauces, and tempering." },
    ],
  },
  {
    name: "Rice",
    slug: "rice",
    image: riceImg,
    desc: "High-quality rice suitable for both retail and bulk consumption across global markets.",
    longDesc: "India is one of the world's top rice exporters. We offer premium Indian rice varieties, carefully processed and graded to meet the highest international standards for purity, grain length, and aroma.",
    varieties: [
      { name: "Basmati Rice (1121)", description: "Extra-long grain with exceptional aroma. The most popular export variety, prized for biryani and pilaf." },
      { name: "Basmati Rice (1509)", description: "Long grain with a pleasant aroma at a competitive price point. Ideal for everyday premium cooking." },
      { name: "Traditional Basmati", description: "Aged for enhanced flavor and aroma. Grains elongate significantly on cooking." },
      { name: "Sona Masoori", description: "Medium-grain, lightweight rice popular in South Indian cuisine. Low in starch and easy to digest." },
      { name: "IR-64 Parboiled Rice", description: "Sturdy, non-sticky grain ideal for bulk consumption. Widely exported to African and Middle Eastern markets." },
      { name: "Broken Rice", description: "Cost-effective rice for food processing, animal feed, and brewing industries." },
    ],
  },
  {
    name: "Pulses",
    slug: "pulses",
    image: pulsesImg,
    desc: "Nutritious pulses sourced from trusted farms and cleaned using modern techniques.",
    longDesc: "Pulses are a staple protein source across the globe. We supply a wide range of premium Indian pulses, cleaned and sorted using advanced machinery to ensure uniform quality and hygiene.",
    varieties: [
      { name: "Chickpeas (Kabuli Chana)", description: "Large, cream-colored chickpeas used in hummus, salads, and curries. High in protein and fiber." },
      { name: "Chickpeas (Desi Chana)", description: "Smaller, darker variety with a nuttier flavor. Used in traditional Indian dishes and flour (besan)." },
      { name: "Red Lentils (Masoor Dal)", description: "Quick-cooking lentils with a mild, sweet flavor. Staple in Indian and Middle Eastern cuisine." },
      { name: "Yellow Lentils (Toor Dal)", description: "The most consumed dal in India. Nutty flavor, high protein content." },
      { name: "Green Moong Dal", description: "Whole and split varieties available. Light, easy to digest, and rich in nutrients." },
      { name: "Black Gram (Urad Dal)", description: "Essential for making dal makhani, idli, and dosa batter. Rich, creamy texture." },
    ],
  },
  {
    name: "Ground Nuts",
    slug: "ground-nuts",
    image: groundnutsImg,
    desc: "Carefully selected and processed ground nuts to maintain freshness and quality.",
    longDesc: "India is a leading producer of groundnuts. We export bold and java varieties, carefully handpicked, graded, and packed to preserve freshness, taste, and nutritional value.",
    varieties: [
      { name: "Bold Groundnuts", description: "Large-kernel variety with a rich, nutty flavor. Ideal for snacking and confectionery." },
      { name: "Java Groundnuts", description: "Smaller, round kernels with higher oil content. Used in oil extraction and food processing." },
      { name: "Blanched Groundnuts", description: "Skin-removed peanuts for confectionery, peanut butter, and bakery applications." },
      { name: "Roasted Groundnuts", description: "Ready-to-eat roasted and salted peanuts for snacking and retail packaging." },
      { name: "Groundnut Oil", description: "Cold-pressed and refined varieties for cooking, known for a neutral taste and high smoke point." },
    ],
  },
  {
    name: "Nuts & Oilseeds",
    slug: "nuts-oilseeds",
    image: nutsOilseedsImg,
    desc: "Premium nuts and oilseeds, processed under strict quality control measures.",
    longDesc: "We supply a curated range of premium nuts and oilseeds, sourced from the best growing regions and processed to retain their natural oils, nutrients, and flavor.",
    varieties: [
      { name: "Sesame Seeds (White)", description: "Hulled and natural varieties for tahini, bakery, and confectionery use." },
      { name: "Sesame Seeds (Black)", description: "Rich in antioxidants and used in Asian cuisine, health foods, and oil extraction." },
      { name: "Cashew Nuts", description: "Premium W180, W240, and W320 grades. Whole, split, and broken forms available." },
      { name: "Flax Seeds", description: "Rich in omega-3 fatty acids. Used in health foods, smoothies, and baking." },
      { name: "Sunflower Seeds", description: "Confectionery and oil-type varieties for snacking, bird feed, and oil production." },
      { name: "Niger Seeds", description: "High oil content seeds used for oil extraction and bird feed in international markets." },
    ],
  },
  {
    name: "Millets & Grains",
    slug: "millets-grains",
    image: milletsImg,
    desc: "Premium selection of millets and grains, processed under strict quality standards.",
    longDesc: "Millets are ancient superfoods gaining global popularity for their nutritional density and sustainability. We offer a diverse range of Indian millets, processed and packaged for export.",
    varieties: [
      { name: "Foxtail Millet (Kangni)", description: "Gluten-free grain rich in iron and calcium. Used in porridge, upma, and health foods." },
      { name: "Pearl Millet (Bajra)", description: "High-energy grain used for flatbreads, porridge, and animal feed." },
      { name: "Finger Millet (Ragi)", description: "Exceptionally high in calcium. Used in baby food, porridge, and baked goods." },
      { name: "Sorghum (Jowar)", description: "Versatile, gluten-free grain for flatbreads, snacks, and brewing." },
      { name: "Barnyard Millet", description: "Low glycemic index grain ideal for diabetic-friendly diets and fasting foods." },
      { name: "Wheat", description: "Premium Indian wheat varieties for flour, semolina, and bakery products." },
    ],
  },
  {
    name: "Plantation & Horticulture",
    slug: "plantation-horticulture",
    image: plantationImg,
    desc: "Diverse range of premium plantation and horticulture products from trusted estates.",
    longDesc: "India's tropical climate supports a rich variety of plantation and horticulture products. We source from established estates to deliver premium quality tea, coffee, coconut products, and more.",
    varieties: [
      { name: "Tea (CTC & Orthodox)", description: "Assam and Darjeeling varieties. CTC for strong brews, orthodox for delicate flavors." },
      { name: "Coffee Beans", description: "Arabica and Robusta varieties from Karnataka and Kerala. Green and roasted forms." },
      { name: "Coconut Products", description: "Desiccated coconut, coconut oil, coconut milk, and copra for food and cosmetic industries." },
      { name: "Jaggery (Gur)", description: "Unrefined natural sweetener made from sugarcane. Available in blocks, powder, and liquid forms." },
      { name: "Raw Sugar", description: "Minimally processed sugar crystals retaining natural molasses for flavor and color." },
    ],
  },
  {
    name: "Fresh Fruits",
    slug: "fresh-fruits",
    image: fruitsImg,
    desc: "Premium fresh fruits, sourced from trusted orchards and handled with care.",
    longDesc: "India produces an incredible diversity of tropical and subtropical fruits. We ensure careful handling, cold chain logistics, and quality grading to deliver farm-fresh fruits to international markets.",
    varieties: [
      { name: "Alphonso Mango", description: "The 'King of Mangoes' — rich, creamy, and intensely aromatic. Premium export variety from Maharashtra." },
      { name: "Kesar Mango", description: "Saffron-hued flesh with a sweet, fragrant taste. Popular in Gujarat and exported globally." },
      { name: "Pomegranate", description: "Ruby-red arils with a sweet-tart flavor. Rich in antioxidants and exported fresh and as juice." },
      { name: "Banana", description: "Multiple varieties including Cavendish and Red Banana. Exported fresh and as chips/powder." },
      { name: "Grapes", description: "Thompson Seedless and Sharad Seedless varieties. Exported fresh and as raisins." },
      { name: "Guava", description: "Pink and white-fleshed varieties rich in vitamin C. Exported fresh and as pulp." },
    ],
  },
  {
    name: "Vegetables",
    slug: "vegetables",
    image: vegetablesImg,
    desc: "Premium fresh vegetables, sourced from trusted farms and growers.",
    longDesc: "We supply fresh, high-quality Indian vegetables to global markets. Our produce is sourced from certified farms, carefully graded, and packed with proper cold chain management.",
    varieties: [
      { name: "Onion (Red & White)", description: "India's most exported vegetable. Available in various sizes and grades year-round." },
      { name: "Potato", description: "Multiple varieties for table use, processing, and chips. Consistent supply from major growing regions." },
      { name: "Green Chilli", description: "Fresh green chillies with varying heat levels for cooking, pickling, and processing." },
      { name: "Drumstick (Moringa)", description: "Nutrient-dense vegetable and superfood. Exported fresh, as powder, and as oil." },
      { name: "Okra (Lady Finger)", description: "Tender, fresh okra for cooking. Popular export to Middle East and Asian markets." },
      { name: "Bitter Gourd", description: "Valued for its health benefits in Asian and African cuisine. Exported fresh and dried." },
    ],
  },
  {
    name: "Oils & Extracts",
    slug: "oils-extracts",
    image: oilsImg,
    desc: "Premium range of oils and extracts from high-quality seeds and raw materials.",
    longDesc: "We offer a range of cold-pressed and refined oils, along with natural extracts, sourced from premium Indian raw materials. Our oils meet international food safety and quality certifications.",
    varieties: [
      { name: "Sesame Oil", description: "Cold-pressed and refined varieties. Nutty flavor ideal for Asian cooking and health applications." },
      { name: "Groundnut Oil", description: "Light, neutral-tasting oil with a high smoke point. Popular for frying and cooking." },
      { name: "Coconut Oil (Virgin)", description: "Cold-pressed from fresh coconut meat. Used in cooking, cosmetics, and health products." },
      { name: "Castor Oil", description: "Industrial and pharmaceutical grade. Used in cosmetics, lubricants, and pharmaceuticals." },
      { name: "Neem Oil", description: "Natural pesticide and medicinal oil extracted from neem seeds. Used in agriculture and skincare." },
      { name: "Moringa Oil", description: "Premium superfood oil rich in antioxidants. Used in cosmetics and health supplements." },
    ],
  },
  {
    name: "Agri Products",
    slug: "agri-products",
    image: agriProductsImg,
    desc: "Diverse range of premium agri products processed under strict standards.",
    longDesc: "Beyond our core categories, we supply a range of agricultural products that are in high demand globally. Each product is carefully sourced, processed, and packed for export.",
    varieties: [
      { name: "Cotton Bales", description: "Premium Indian cotton for textile mills. Available in various staple lengths and grades." },
      { name: "Animal Feed", description: "Soybean meal, rice bran, and groundnut cake for livestock and poultry nutrition." },
      { name: "Dehydrated Vegetables", description: "Onion flakes, garlic powder, and vegetable mixes for food processing industry." },
      { name: "Herbal Extracts", description: "Ashwagandha, tulsi, and other Ayurvedic herb extracts for health supplement markets." },
      { name: "Honey (Natural)", description: "Multi-flora and mono-flora raw honey. Lab-tested and export-certified for purity." },
      { name: "Dried Flowers", description: "Marigold, rose petals, and hibiscus for food, cosmetic, and decorative industries." },
    ],
  },
];
