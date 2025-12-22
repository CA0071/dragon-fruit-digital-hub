import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroDragonfruit from "@/assets/hero-dragonfruit.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDragonfruit}
          alt="Fresh dragon fruits from South Africa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up border border-background/20">
            <Leaf className="w-4 h-4 text-background" />
            <span className="text-background/90 text-sm font-body">Premium Dragon Fruit from South Africa</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fresh From Our
            <span className="block mt-2">Healthy Fields</span>
          </h1>

          {/* Subheading */}
          <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Dragon Fruit South Africa brings you the finest, sustainably-grown dragon fruit, 
            straight from our farms to your table. Experience nature's exotic superfruit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Explore Our Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
