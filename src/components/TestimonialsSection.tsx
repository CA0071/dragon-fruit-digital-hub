import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Johan van der Berg",
    location: "Nelspruit, Mpumalanga",
    role: "Commercial Farmer",
    content: "Started with 500 cuttings from DFSA in 2019. Now I have over 3,000 plants producing 15 tons per season. Max and the team provided excellent guidance throughout. Best investment I've made in my farming career.",
    rating: 5,
    plants: "3,000+ plants"
  },
  {
    name: "Sarah Mokoena",
    location: "Tzaneen, Limpopo",
    role: "Emerging Farmer",
    content: "As a first-time dragon fruit farmer, I was nervous about the investment. DFSA's support made all the difference. They answered every question on WhatsApp and even visited my farm. My first harvest exceeded expectations!",
    rating: 5,
    plants: "200 plants"
  },
  {
    name: "David Chikwanda",
    location: "Lusaka, Zambia",
    role: "Export Farmer",
    content: "Imported 1,000 plants from DFSA to Zambia. The phytosanitary process was smooth and plants arrived in perfect condition. Now supplying dragon fruit to local supermarkets and exploring export opportunities.",
    rating: 5,
    plants: "1,000 plants"
  },
  {
    name: "Pieter Botha",
    location: "White River, Mpumalanga",
    role: "Boutique Farmer",
    content: "The Ruby Red variety from Healthy Fields produces the most beautiful fruit I've ever seen. Brix levels consistently above 18. My farm-gate sales are booming - customers drive hours for our dragon fruit!",
    rating: 5,
    plants: "800 plants"
  },
  {
    name: "Thandiwe Nkosi",
    location: "Durban, KZN",
    role: "Urban Farmer",
    content: "Started small with 50 plants in my backyard. DFSA's advice on trellising and care was invaluable. Now expanding to a larger plot. The Sweet African White variety is perfect for our coastal climate.",
    rating: 5,
    plants: "150 plants"
  },
  {
    name: "Ahmed Hassan",
    location: "Casablanca, Morocco",
    role: "Agricultural Investor",
    content: "We researched dragon fruit suppliers across Africa. DFSA stood out for their expertise and quality. Our 5-hectare project in Morocco is thriving thanks to their premium plant material and ongoing support.",
    rating: 5,
    plants: "8,000 plants"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary/5 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Farmers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful dragon fruit farmers across Africa who started their journey with DFSA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              
              <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border/50 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium mt-1">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {testimonial.plants}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-primary/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Farmers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Plants Sold</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
