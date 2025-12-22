import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroDragonfruit from "@/assets/hero-dragonfruit.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      aria-label="Hero section - Dragon Fruit South Africa"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDragonfruit}
          alt="Fresh organic dragon fruits from South Africa - DFSA Healthy Fields"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up border border-background/20">
            <Leaf className="w-4 h-4 text-background" />
            <span className="text-background/90 text-sm font-body">South Africa's First Dragon Fruit Importer Since 2008</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Premium Dragon Fruit
            <span className="block mt-2">From Healthy Fields</span>
          </h1>

          {/* Subheading */}
          <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Dragon Fruit South Africa (DFSA) brings you the finest commercial plant material 
            and fresh fruit. Over 35 varieties tested, delivering only the best for African farmers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#products">
                Explore Our Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-background/70 text-sm font-body animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              100% Organic
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Export Quality
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Commercial Support
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" aria-label="Scroll to learn more">
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-background/50 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
