import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    name: "Fresh Dragon Fruit",
    description: "Hand-picked ripe dragon fruit, perfect for immediate consumption",
    price: "From R45/kg",
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888?w=400&h=400&fit=crop",
    tag: "Best Seller",
  },
  {
    name: "Dragon Fruit Plants",
    description: "Healthy seedlings ready to grow in your garden or farm",
    price: "From R150/plant",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    tag: "Popular",
  },
  {
    name: "Dried Dragon Fruit",
    description: "Naturally dried slices, perfect for snacking or baking",
    price: "From R120/250g",
    image: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=400&h=400&fit=crop",
    tag: "New",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Farm Fresh Goodness
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            From fresh fruit to plants and processed products, we offer a complete range 
            of dragon fruit products to suit your needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-body font-medium">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-display font-bold text-lg">
                    {product.price}
                  </span>
                  <Button variant="default" size="sm">
                    <ShoppingBag className="w-4 h-4" />
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
