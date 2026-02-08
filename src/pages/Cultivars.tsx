import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CULTIVARS = [
  {
    name: "Sweet African White",
    aka: "Thompson / Vietnamese White",
    type: "White Flesh",
    sweetness: "Very High (Brix 16-20)",
    size: "Large (400-600g)",
    description: "The most popular commercial variety in South Africa. Extremely sweet with a subtle honey flavour. Self-fertile but benefits from cross-pollination. Heavy producer with excellent shelf life.",
    pros: ["Extremely sweet", "High yields", "Good shelf life", "Self-fertile"],
    cons: ["White flesh less visually striking", "Can split in heavy rain"],
    origin: "Vietnam / South Africa",
    image: null,
  },
  {
    name: "Ruby Red / Purple Flesh",
    aka: "American Beauty / Hylocereus polyrhizus",
    type: "Purple/Red Flesh",
    sweetness: "High (Brix 14-18)",
    size: "Medium-Large (350-500g)",
    description: "Stunning deep magenta flesh with excellent flavour. Popular in fresh markets for its vibrant colour. Requires cross-pollination with white varieties for best fruit set.",
    pros: ["Beautiful colour", "Great flavour", "High antioxidants", "Premium pricing"],
    cons: ["Needs cross-pollination", "Stains easily", "Slightly lower yield"],
    origin: "Central America",
    image: null,
  },
  {
    name: "Yellow Dragon Fruit",
    aka: "Selenicereus megalanthus",
    type: "White Flesh / Yellow Skin",
    sweetness: "Very High (Brix 18-22)",
    size: "Small-Medium (150-300g)",
    description: "Often considered the sweetest dragon fruit. Distinctive yellow thorny skin with white translucent flesh. Smaller fruit but commands premium prices. Best suited to warmer, humid areas.",
    pros: ["Sweetest variety", "Premium market prices", "Unique appearance"],
    cons: ["Smaller fruit", "Lower yields", "Thorny skin", "More disease susceptible"],
    origin: "Colombia / Ecuador",
    image: null,
  },
  {
    name: "Dark Star",
    aka: "Black Dragon",
    type: "Deep Red Flesh",
    sweetness: "Medium-High (Brix 14-17)",
    size: "Medium (300-450g)",
    description: "Deep burgundy to almost black flesh with a unique grape-like flavour. Self-fertile hybrid developed in the USA. Becoming popular with gourmet markets.",
    pros: ["Unique colour", "Self-fertile", "Distinctive flavour"],
    cons: ["Newer variety", "Limited availability", "Moderate sweetness"],
    origin: "USA (Hybrid)",
    image: null,
  },
  {
    name: "Physical Graffiti",
    aka: "Hylocereus hybrid",
    type: "Pink/Magenta Flesh",
    sweetness: "High (Brix 16-19)",
    size: "Large (400-700g)",
    description: "Large, beautiful pink-fleshed variety with excellent sweetness. Self-fertile with consistent production. Developed in the USA but adapts well to South African conditions.",
    pros: ["Large fruit", "Self-fertile", "High sweetness", "Good producer"],
    cons: ["Newer variety", "Limited local cuttings"],
    origin: "USA (Hybrid)",
    image: null,
  },
  {
    name: "Delight",
    aka: "Sugar Dragon",
    type: "White Flesh",
    sweetness: "Very High (Brix 17-21)",
    size: "Medium (300-450g)",
    description: "Exceptionally sweet white-fleshed variety known for consistent quality. Self-fertile and reliable producer even in variable conditions. Good choice for beginners.",
    pros: ["Very sweet", "Self-fertile", "Reliable", "Beginner-friendly"],
    cons: ["Average size", "White flesh"],
    origin: "Asia",
    image: null,
  },
];

export default function Cultivars() {
  return (
    <>
      <Helmet>
        <title>Dragon Fruit Cultivars South Africa | Varieties & Comparison</title>
        <meta
          name="description"
          content="Compare dragon fruit cultivars available in South Africa. Learn about white, red, and yellow varieties including Sweet African White, Ruby Red, Yellow Dragon, and more."
        />
        <meta
          name="keywords"
          content="dragon fruit varieties South Africa, pitaya cultivars, white dragon fruit, red dragon fruit, yellow dragon fruit, Hylocereus varieties"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  Reference Guide
                </Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Dragon Fruit Cultivars
                </h1>
                <p className="text-lg text-muted-foreground">
                  A comprehensive guide to dragon fruit varieties grown in South Africa, 
                  their characteristics, and which might be right for your farm.
                </p>
              </div>
            </div>
          </section>

          {/* Classification */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl font-bold text-center mb-8">
                  Dragon Fruit Classification
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">⚪</div>
                      <h3 className="font-display font-semibold text-lg mb-2">White Flesh</h3>
                      <p className="text-sm text-muted-foreground">
                        <em>Hylocereus undatus</em><br />
                        Pink/red skin with white flesh. Generally sweetest and most productive.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">🔴</div>
                      <h3 className="font-display font-semibold text-lg mb-2">Red/Purple Flesh</h3>
                      <p className="text-sm text-muted-foreground">
                        <em>Hylocereus polyrhizus/costaricensis</em><br />
                        Pink skin with vibrant magenta flesh. High in antioxidants.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">🟡</div>
                      <h3 className="font-display font-semibold text-lg mb-2">Yellow Skin</h3>
                      <p className="text-sm text-muted-foreground">
                        <em>Selenicereus megalanthus</em><br />
                        Thorny yellow skin with white flesh. Smallest but often sweetest.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Cultivar Cards */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="font-display text-2xl font-bold text-center mb-8">
                  Popular Varieties in South Africa
                </h2>
                <div className="space-y-6">
                  {CULTIVARS.map((cultivar) => (
                    <Card key={cultivar.name} className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-4">
                              {cultivar.type.includes("White") && !cultivar.type.includes("Yellow") ? "⚪" : 
                               cultivar.type.includes("Yellow") ? "🟡" : "🔴"}
                            </div>
                            <Badge variant="outline">{cultivar.type}</Badge>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <CardHeader>
                            <CardTitle className="font-display text-xl">
                              {cultivar.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              Also known as: {cultivar.aka}
                            </p>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                              {cultivar.description}
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="font-medium">Sweetness</p>
                                <p className="text-muted-foreground">{cultivar.sweetness}</p>
                              </div>
                              <div>
                                <p className="font-medium">Fruit Size</p>
                                <p className="text-muted-foreground">{cultivar.size}</p>
                              </div>
                              <div>
                                <p className="font-medium">Origin</p>
                                <p className="text-muted-foreground">{cultivar.origin}</p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {cultivar.pros.map((pro) => (
                                <Badge key={pro} variant="secondary" className="bg-secondary/10">
                                  ✓ {pro}
                                </Badge>
                              ))}
                              {cultivar.cons.map((con) => (
                                <Badge key={con} variant="outline" className="text-muted-foreground">
                                  ✕ {con}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pollination Note */}
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-2xl font-bold mb-4">
                  Important: Pollination Requirements
                </h2>
                <p className="text-muted-foreground mb-6">
                  Many dragon fruit varieties are self-sterile and require cross-pollination 
                  with a different variety for fruit set. For best results, plant at least 
                  2-3 different varieties. White-fleshed and red-fleshed varieties typically 
                  cross-pollinate well with each other.
                </p>
                <div className="p-4 rounded-lg bg-card border inline-block">
                  <p className="font-medium">Pro Tip</p>
                  <p className="text-sm text-muted-foreground">
                    Even self-fertile varieties produce larger fruit with cross-pollination!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
