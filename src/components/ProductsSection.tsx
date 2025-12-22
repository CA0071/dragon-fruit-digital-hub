import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";
import whiteDF from "@/assets/white-dragonfruit.jpg";
import rubyRedDF from "@/assets/ruby-red-dragonfruit.jpg";
import plantCuttings from "@/assets/plant-cuttings.jpg";
import heroDF from "@/assets/hero-dragonfruit.jpg";

const products = [
  {
    name: "Sweet African White (Thompson)",
    description: "Premium white flesh variety, extremely sweet with high productivity. Perfect for commercial farming.",
    price: "From R150/plant",
    image: whiteDF,
    tag: "Best Seller",
    rating: 5,
  },
  {
    name: "Ruby Red Purple Flesh",
    description: "Extra large round fruit with vibrant purple flesh. High Brix 18-20, the best tasting variety worldwide.",
    price: "From R180/plant",
    image: rubyRedDF,
    tag: "Premium",
    rating: 5,
  },
  {
    name: "Commercial Plant Cuttings",
    description: "Quality adult plant material that flowers and fruits in 6-8 months. Hardy and fast growing.",
    price: "From R75/cutting",
    image: plantCuttings,
    tag: "Popular",
    rating: 4,
  },
  {
    name: "Fresh Dragon Fruit",
    description: "Hand-picked ripe dragon fruit, perfect for immediate consumption. Available seasonally.",
    price: "From R45/kg",
    image: heroDF,
    tag: "Seasonal",
    rating: 5,
  },
  {
    name: "Commercial Starter Package",
    description: "Complete package with plants, growing guides, and support for starting your dragon fruit farm.",
    price: "Contact for pricing",
    image: rubyRedDF,
    tag: "Business",
    rating: 5,
  },
  {
    name: "Dried Dragon Fruit Slices",
    description: "Naturally dried, preserving nutrients. Perfect for snacking, baking, or smoothies.",
    price: "From R120/250g",
    image: whiteDF,
    tag: "New",
    rating: 4,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/50" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 id="products-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Premium Dragon Fruit Varieties
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Over 35 varieties tested, narrowed down to the best commercial varieties for South African conditions. 
            Quality plant material with expert support.
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - Dragon Fruit South Africa`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-body font-medium">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2" itemProp="name">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body text-sm mb-4" itemProp="description">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-display font-bold text-lg" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="price">{product.price}</span>
                  </span>
                  <Button variant="default" size="sm" aria-label={`Order ${product.name}`}>
                    <ShoppingBag className="w-4 h-4" />
                    Order Now
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Wholesale CTA */}
        <div className="mt-16 text-center bg-secondary/10 rounded-2xl p-8 md:p-12 animate-fade-up">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Commercial & Wholesale Orders
          </h3>
          <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
            Starting a dragon fruit farm? We offer commercial plant material packages, 
            expert consultation, and ongoing support for plantations across Africa.
          </p>
          <Button variant="secondary" size="lg">
            Contact for Wholesale Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
