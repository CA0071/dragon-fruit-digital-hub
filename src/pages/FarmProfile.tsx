import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useFarmBySlug } from "@/hooks/useFarms";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  MessageCircle,
  Leaf,
  Truck,
  Eye,
  Calendar,
  Ruler,
  Award,
  ArrowLeft,
  Loader2,
  ExternalLink,
} from "lucide-react";

export default function FarmProfile() {
  const { slug } = useParams<{ slug: string }>();
  const { data: farm, isLoading, error } = useFarmBySlug(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  if (error || !farm) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-6xl mb-4">🚫</div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Farm Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The farm you're looking for doesn't exist or is not published.
            </p>
            <Button asChild>
              <Link to="/directory">
                <ArrowLeft size={18} className="mr-2" /> Back to Directory
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{farm.name} | Dragon Fruit Farm | {farm.city}, {farm.province}</title>
        <meta
          name="description"
          content={farm.short_description || `${farm.name} - Dragon fruit farm in ${farm.city}, ${farm.province}. Fresh fruit and quality plants.`}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Image */}
          <section className="relative h-[40vh] md:h-[50vh] bg-muted">
            {farm.hero_image_url ? (
              <img
                src={farm.hero_image_url}
                alt={farm.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="text-8xl">🐉🍇</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

            {/* Back Button */}
            <Link
              to="/directory"
              className="absolute top-24 left-4 md:left-8 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-background transition-colors"
            >
              <ArrowLeft size={16} /> Back to Directory
            </Link>

            {/* Farm Header */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <div className="container mx-auto">
                <div className="flex items-end gap-4">
                  {farm.logo_url && (
                    <img
                      src={farm.logo_url}
                      alt=""
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-4 border-background shadow-lg"
                    />
                  )}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {farm.is_featured && (
                        <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                      )}
                      {farm.verification_status === "verified" && (
                        <Badge variant="secondary">✓ Verified Farm</Badge>
                      )}
                    </div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {farm.name}
                    </h1>
                    <p className="text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin size={16} />
                      {farm.address || `${farm.city}, ${farm.province}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Quick Facts */}
                  <div className="flex flex-wrap gap-3">
                    {farm.is_organic && (
                      <Badge variant="outline" className="py-2 px-4">
                        <Leaf size={16} className="mr-2" /> Organic Certified
                      </Badge>
                    )}
                    {farm.offers_delivery && (
                      <Badge variant="outline" className="py-2 px-4">
                        <Truck size={16} className="mr-2" /> Delivery Available
                      </Badge>
                    )}
                    {farm.offers_pickup && (
                      <Badge variant="outline" className="py-2 px-4">
                        <MapPin size={16} className="mr-2" /> Farm Pickup
                      </Badge>
                    )}
                    {farm.offers_tours && (
                      <Badge variant="outline" className="py-2 px-4">
                        <Eye size={16} className="mr-2" /> Farm Tours
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  {farm.description && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-display">About the Farm</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {farm.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Farm Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-display">Farm Details</CardTitle>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 gap-4">
                      {farm.year_established && (
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Calendar size={18} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Established</p>
                            <p className="font-medium">{farm.year_established}</p>
                          </div>
                        </div>
                      )}
                      {farm.farm_size_hectares && (
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                            <Ruler size={18} className="text-secondary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Farm Size</p>
                            <p className="font-medium">{farm.farm_size_hectares} hectares</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Cultivars */}
                  {farm.cultivars && farm.cultivars.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-display">Available Cultivars</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          {farm.cultivars.map((cultivar) => (
                            <div
                              key={cultivar.id}
                              className="p-4 rounded-lg bg-muted/50 border"
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold">{cultivar.cultivar_name}</h4>
                                  {cultivar.cultivar_type && (
                                    <p className="text-sm text-muted-foreground">
                                      {cultivar.cultivar_type}
                                    </p>
                                  )}
                                </div>
                                <div className="flex gap-2">
                                  {cultivar.available_as_plant && (
                                    <Badge variant="outline">Plants</Badge>
                                  )}
                                  {cultivar.available_as_fruit && (
                                    <Badge variant="outline">Fruit</Badge>
                                  )}
                                </div>
                              </div>
                              {cultivar.description && (
                                <p className="text-sm text-muted-foreground mt-2">
                                  {cultivar.description}
                                </p>
                              )}
                              <div className="flex gap-4 mt-3 text-sm">
                                {cultivar.price_per_plant && (
                                  <span className="text-primary font-medium">
                                    R{cultivar.price_per_plant}/plant
                                  </span>
                                )}
                                {cultivar.price_per_kg && (
                                  <span className="text-primary font-medium">
                                    R{cultivar.price_per_kg}/kg
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Gallery */}
                  {farm.gallery && farm.gallery.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-display">Gallery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {farm.gallery.map((image) => (
                            <div key={image.id} className="aspect-square rounded-lg overflow-hidden">
                              <img
                                src={image.image_url}
                                alt={image.caption || "Farm photo"}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Certifications */}
                  {farm.certifications && farm.certifications.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-display">Certifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {farm.certifications.map((cert) => (
                            <div
                              key={cert.id}
                              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20"
                            >
                              <Award size={16} className="text-secondary" />
                              <span className="font-medium">{cert.certification_name}</span>
                              {cert.issuing_body && (
                                <span className="text-sm text-muted-foreground">
                                  - {cert.issuing_body}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Right Column - Contact */}
                <div className="space-y-6">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="font-display">Contact {farm.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {farm.phone && (
                        <a
                          href={`tel:${farm.phone}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        >
                          <Phone size={20} className="text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="font-medium">{farm.phone}</p>
                          </div>
                        </a>
                      )}

                      {farm.email && (
                        <a
                          href={`mailto:${farm.email}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        >
                          <Mail size={20} className="text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium">{farm.email}</p>
                          </div>
                        </a>
                      )}

                      {farm.whatsapp && (
                        <a
                          href={`https://wa.me/${farm.whatsapp.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        >
                          <MessageCircle size={20} className="text-green-600" />
                          <div>
                            <p className="text-sm text-muted-foreground">WhatsApp</p>
                            <p className="font-medium">{farm.whatsapp}</p>
                          </div>
                        </a>
                      )}

                      <Separator />

                      {/* Social Links */}
                      <div className="flex gap-3">
                        {farm.website && (
                          <Button variant="outline" size="icon" asChild>
                            <a href={farm.website} target="_blank" rel="noopener noreferrer">
                              <Globe size={18} />
                            </a>
                          </Button>
                        )}
                        {farm.facebook && (
                          <Button variant="outline" size="icon" asChild>
                            <a href={farm.facebook} target="_blank" rel="noopener noreferrer">
                              <Facebook size={18} />
                            </a>
                          </Button>
                        )}
                        {farm.instagram && (
                          <Button variant="outline" size="icon" asChild>
                            <a href={farm.instagram} target="_blank" rel="noopener noreferrer">
                              <Instagram size={18} />
                            </a>
                          </Button>
                        )}
                      </div>

                      <Separator />

                      {/* CTA */}
                      <Button className="w-full" size="lg" asChild>
                        <a href={`mailto:${farm.email}`}>
                          <Mail size={18} className="mr-2" /> Send Inquiry
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
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
