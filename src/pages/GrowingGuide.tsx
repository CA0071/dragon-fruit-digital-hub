import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sun,
  Droplets,
  Thermometer,
  Bug,
  Scissors,
  Calendar,
  Sprout,
  MapPin,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export default function GrowingGuide() {
  return (
    <>
      <Helmet>
        <title>Dragon Fruit Growing Guide South Africa | Climate, Soil & Care Tips</title>
        <meta
          name="description"
          content="Complete guide to growing dragon fruit (pitaya) in South Africa. Learn about climate requirements, soil preparation, watering, pruning, pest control, and harvesting tips for successful cultivation."
        />
        <meta
          name="keywords"
          content="dragon fruit growing guide, pitaya cultivation South Africa, how to grow dragon fruit, dragon fruit care, pitaya farming, subtropical fruit growing"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  Expert Guide
                </Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Dragon Fruit Growing Guide
                </h1>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know about cultivating dragon fruit (pitaya) 
                  successfully in South African conditions.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Facts */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Sun className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sunlight</p>
                      <p className="font-semibold">Full Sun (6-8 hrs)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Droplets className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Water Needs</p>
                      <p className="font-semibold">Moderate</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Thermometer className="text-red-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Temperature</p>
                      <p className="font-semibold">20-30°C Optimal</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Calendar className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">First Fruit</p>
                      <p className="font-semibold">18-24 Months</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                
                {/* Climate Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-3">
                      <Thermometer className="text-primary" size={28} />
                      Climate Requirements in South Africa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground">
                      Dragon fruit thrives in subtropical and tropical climates, making many South African 
                      regions ideal for cultivation. The plant originates from Central America and has 
                      adapted well to conditions found in Limpopo, Mpumalanga, KwaZulu-Natal, and 
                      frost-free areas of the Eastern Cape.
                    </p>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Ideal Growing Zones</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle size={18} className="text-secondary" />
                          <span className="font-medium">Excellent Zones</span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Limpopo (Lowveld & Bushveld)</li>
                          <li>• Mpumalanga (Lowveld)</li>
                          <li>• KwaZulu-Natal (Coast & Midlands)</li>
                          <li>• Eastern Cape (Subtropical areas)</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle size={18} className="text-accent" />
                          <span className="font-medium">Possible with Protection</span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Gauteng (frost protection needed)</li>
                          <li>• Western Cape (coastal areas)</li>
                          <li>• Free State (greenhouse only)</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Temperature Tolerance</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>Optimal:</strong> 20-30°C for best growth and fruiting</li>
                      <li><strong>Minimum:</strong> Can survive brief exposure to 0°C, but frost damages stems</li>
                      <li><strong>Maximum:</strong> Tolerates up to 40°C with adequate watering</li>
                      <li><strong>Night temperatures:</strong> 15-25°C ideal for flower initiation</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Soil Preparation */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-3">
                      <Sprout className="text-primary" size={28} />
                      Soil Preparation & Planting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground">
                      Dragon fruit prefers well-draining, slightly acidic to neutral soil. Poor drainage 
                      is the primary cause of root rot and plant failure in South Africa.
                    </p>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Soil Requirements</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>pH Level:</strong> 6.0-7.0 (slightly acidic to neutral)</li>
                      <li><strong>Texture:</strong> Sandy loam is ideal; avoid heavy clay</li>
                      <li><strong>Drainage:</strong> Essential – create raised beds in areas with poor drainage</li>
                      <li><strong>Organic Matter:</strong> Enrich with well-rotted compost (20-30% by volume)</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Planting Steps</h4>
                    <ol className="text-muted-foreground space-y-2">
                      <li><strong>1. Prepare posts:</strong> Use concrete or treated wooden poles (2.5-3m tall) set 50cm deep</li>
                      <li><strong>2. Install support:</strong> Attach a circular support ring or old car tyre at the top</li>
                      <li><strong>3. Prepare soil:</strong> Mix existing soil with compost and river sand for drainage</li>
                      <li><strong>4. Plant cuttings:</strong> Place 3-4 cuttings around each pole, 15cm from the base</li>
                      <li><strong>5. Secure to pole:</strong> Tie loosely with soft material as the plant grows</li>
                      <li><strong>6. Mulch:</strong> Apply 5-10cm of organic mulch around the base</li>
                    </ol>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Spacing Recommendations</h4>
                    <p className="text-muted-foreground">
                      Space poles 3m apart within rows and 3-4m between rows. This allows 800-1,100 
                      posts per hectare, with 3-4 plants per post.
                    </p>
                  </CardContent>
                </Card>

                {/* Watering & Nutrition */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-3">
                      <Droplets className="text-primary" size={28} />
                      Watering & Nutrition
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <h4 className="font-semibold text-foreground mb-3">Irrigation Guidelines</h4>
                    <p className="text-muted-foreground">
                      Dragon fruit is a succulent cactus and doesn't require excessive water. 
                      Overwatering is more dangerous than underwatering.
                    </p>

                    <ul className="text-muted-foreground space-y-2 mt-4">
                      <li><strong>Summer (Oct-Mar):</strong> Water 2-3 times per week if no rain</li>
                      <li><strong>Winter (Apr-Sep):</strong> Reduce to weekly or less</li>
                      <li><strong>Method:</strong> Drip irrigation is most efficient (2-4 litres per plant per day in summer)</li>
                      <li><strong>Signs of overwatering:</strong> Yellowing stems, soft rot at base</li>
                      <li><strong>Signs of underwatering:</strong> Shriveled, thin stems</li>
                    </ul>

                    <Separator className="my-6" />

                    <h4 className="font-semibold text-foreground mb-3">Fertilization Schedule</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium mb-2">Growth Phase (Year 1-2)</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• NPK 3:1:5 or 2:3:2 monthly</li>
                          <li>• Compost top-dressing quarterly</li>
                          <li>• Foliar feed with micronutrients</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium mb-2">Fruiting Phase (Year 2+)</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Increase potassium before flowering</li>
                          <li>• Apply bone meal for phosphorus</li>
                          <li>• Reduce nitrogen during fruiting</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pruning & Training */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-3">
                      <Scissors className="text-primary" size={28} />
                      Pruning & Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground">
                      Proper pruning is essential for maintaining plant health, encouraging fruiting, 
                      and making harvesting easier. Dragon fruit produces fruit on stems that are 
                      at least one year old.
                    </p>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Training Young Plants</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>Year 1:</strong> Allow single stem to climb to top of post, remove side shoots</li>
                      <li><strong>At post top:</strong> Allow 3-5 main branches to develop and hang over support</li>
                      <li><strong>Year 2+:</strong> Maintain umbrella shape with cascading branches</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Annual Maintenance Pruning</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Remove dead, diseased, or damaged stems immediately</li>
                      <li>Thin overcrowded branches after harvest season (April-May)</li>
                      <li>Cut branches touching the ground</li>
                      <li>Remove weak, thin stems that won't produce fruit</li>
                      <li>Limit each plant to 20-30 productive branches</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Pests & Diseases */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-3">
                      <Bug className="text-primary" size={28} />
                      Pests & Diseases in South Africa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <h4 className="font-semibold text-foreground mb-3">Common Pests</h4>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium">Mealybugs</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          White cottony masses on stems. Treat with horticultural oil or neem oil. 
                          Encourage natural predators like ladybirds.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium">Fruit Flies</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Can damage ripening fruit. Use fruit fly traps and harvest fruit promptly when ripe.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium">Snails & Slugs</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Damage young stems and flowers. Use copper barriers around posts or organic baits.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium">Birds & Bats</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Love ripe fruit. Netting or reflective tape can help protect crops.
                        </p>
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Common Diseases</h4>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                        <p className="font-medium">Stem Rot (Most Serious)</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Caused by fungal pathogens in wet conditions. Prevention: ensure good drainage, 
                          avoid overhead watering, remove infected stems immediately.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium">Anthracnose</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Brown spots on fruit and stems. Apply copper fungicide preventatively during wet seasons.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="font-medium">Sunburn</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yellow/white patches on stems. Provide 30-40% shade cloth for young plants in very hot areas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Harvesting */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-3">
                      <Calendar className="text-primary" size={28} />
                      Flowering & Harvesting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none">
                    <h4 className="font-semibold text-foreground mb-3">Flowering Season</h4>
                    <p className="text-muted-foreground">
                      In South Africa, dragon fruit flowers from November to March, with peak flowering 
                      December-February. Flowers open at night and are pollinated by moths, bats, and bees.
                    </p>

                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mt-4">
                      <p className="font-medium text-primary">Hand Pollination Tip</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        For better fruit set, especially with self-sterile varieties, hand pollinate 
                        between 8-11pm when flowers are fully open. Use a small brush to transfer 
                        pollen between flowers.
                      </p>
                    </div>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Harvest Guidelines</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>Time to harvest:</strong> 30-45 days after flowering</li>
                      <li><strong>Ready signs:</strong> Colour fully developed, fins/wings starting to wither slightly</li>
                      <li><strong>Method:</strong> Cut stem 2cm above fruit with clean, sharp secateurs</li>
                      <li><strong>Handling:</strong> Handle gently – fruit bruises easily</li>
                      <li><strong>Storage:</strong> 7-14 days at room temperature, up to 3 weeks refrigerated</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-6 mb-3">Expected Yields</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>Year 2:</strong> 5-10 kg per plant</li>
                      <li><strong>Year 3:</strong> 15-20 kg per plant</li>
                      <li><strong>Mature plants (Year 4+):</strong> 25-35 kg per plant</li>
                      <li><strong>Commercial yields:</strong> 20-30 tonnes per hectare with good management</li>
                    </ul>
                  </CardContent>
                </Card>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
