import { Heart, Zap, Shield, Brain, Sparkles, Apple } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Heart Health",
    description: "Rich in antioxidants that support cardiovascular health and reduce cholesterol levels naturally",
  },
  {
    icon: Zap,
    title: "Energy Boost",
    description: "Natural sugars and iron provide sustained energy throughout the day without crashes",
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "High vitamin C content strengthens your body's natural defenses against illness",
  },
  {
    icon: Brain,
    title: "Brain Function",
    description: "B vitamins and magnesium support cognitive health, memory, and mental clarity",
  },
  {
    icon: Sparkles,
    title: "Skin Health",
    description: "Antioxidants and vitamin E promote youthful, glowing skin and fight aging",
  },
  {
    icon: Apple,
    title: "Digestive Health",
    description: "High fiber and prebiotic content supports healthy digestion and gut microbiome",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-background" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-secondary font-body font-semibold text-sm uppercase tracking-wider">
            Health Benefits
          </span>
          <h2 id="benefits-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Why Choose Dragon Fruit?
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Discover why this exotic superfruit has become one of the most sought-after 
            health foods worldwide. Packed with nutrients your body craves.
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-body">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "35+", label: "Varieties Tested" },
            { value: "15+", label: "Years Experience" },
            { value: "5", label: "African Countries" },
            { value: "1000+", label: "Plants Sold" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-secondary/10">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
