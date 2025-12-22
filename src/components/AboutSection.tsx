import { Sprout, Sun, Droplets, Award, Users, Globe } from "lucide-react";
import healthyFields from "@/assets/healthy-fields.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Sprout,
      title: "35+ Varieties Tested",
      description: "Narrowed to the best commercial varieties for African conditions",
    },
    {
      icon: Sun,
      title: "South African Climate",
      description: "Perfect conditions for growing the sweetest dragon fruit",
    },
    {
      icon: Globe,
      title: "Pan-African Reach",
      description: "Established plantations in Zambia, Malawi, Mozambique & Morocco",
    },
    {
      icon: Award,
      title: "Since 2008",
      description: "South Africa's first importer of dragon fruit plants",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-field-gradient" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <figure className="relative animate-fade-up">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={healthyFields}
                alt="Dragon fruit plantation in Limpopo, South Africa - Healthy Fields commercial farm"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" aria-hidden="true" />
          </figure>

          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-secondary font-body font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 id="about-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Pioneering Dragon Fruit{" "}
              <span className="text-gradient-primary">in Africa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4 font-body">
              <strong>Dragon Fruit South Africa (DFSA)</strong> and <strong>Healthy Fields</strong>, 
              led by Max van Heerden, have been at the forefront of dragon fruit cultivation in Africa since 2008.
            </p>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              As South Africa's first importer of dragon fruit plants, we've tested over 35 varieties 
              to identify the best performers for our climate. Our commercial nursery provides 
              quality plant material that flowers and fruits within 6-8 months.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
