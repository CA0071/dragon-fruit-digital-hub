import { Sprout, Sun, Droplets, Award } from "lucide-react";
import healthyFields from "@/assets/healthy-fields.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Sprout,
      title: "Organic Farming",
      description: "100% organic growing practices without harmful pesticides",
    },
    {
      icon: Sun,
      title: "South African Sun",
      description: "Perfect climate for growing the sweetest dragon fruit",
    },
    {
      icon: Droplets,
      title: "Sustainable Water",
      description: "Efficient irrigation systems that conserve water",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-picked at peak ripeness for the best taste",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-field-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={healthyFields}
                alt="Our dragon fruit fields in South Africa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-secondary font-body font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Growing Excellence in{" "}
              <span className="text-gradient-primary">South Africa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              Dragon Fruit South Africa (DFSA) and Healthy Fields are committed to bringing you 
              the finest dragon fruit cultivated with care in the heart of South Africa. Our farms 
              combine traditional agricultural wisdom with modern sustainable practices.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
