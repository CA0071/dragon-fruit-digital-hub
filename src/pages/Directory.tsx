import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePublishedFarms, useProvinces, Farm } from "@/hooks/useFarms";
import { Search, MapPin, Leaf, Truck, Eye, Phone, Mail, Loader2 } from "lucide-react";

const SA_PROVINCES = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
];

function FarmCard({ farm }: { farm: Farm }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 bg-muted">
        {farm.hero_image_url ? (
          <img
            src={farm.hero_image_url}
            alt={farm.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
            <span className="text-4xl">🐉🍇</span>
          </div>
        )}
        {farm.is_featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        {farm.verification_status === "verified" && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            ✓ Verified
          </Badge>
        )}
      </div>

      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {farm.name}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin size={14} />
              {farm.city}, {farm.province}
            </p>
          </div>
          {farm.logo_url && (
            <img src={farm.logo_url} alt="" className="w-10 h-10 rounded-full object-cover" />
          )}
        </div>

        {farm.short_description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {farm.short_description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {farm.is_organic && (
            <Badge variant="outline" className="text-xs">
              <Leaf size={12} className="mr-1" /> Organic
            </Badge>
          )}
          {farm.offers_delivery && (
            <Badge variant="outline" className="text-xs">
              <Truck size={12} className="mr-1" /> Delivery
            </Badge>
          )}
          {farm.offers_tours && (
            <Badge variant="outline" className="text-xs">
              <Eye size={12} className="mr-1" /> Farm Tours
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link to={`/farms/${farm.slug}`}>View Farm</Link>
          </Button>
          {farm.phone && (
            <Button variant="outline" size="icon" asChild>
              <a href={`tel:${farm.phone}`}>
                <Phone size={18} />
              </a>
            </Button>
          )}
          {farm.email && (
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${farm.email}`}>
                <Mail size={18} />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Directory() {
  const [search, setSearch] = useState("");
  const [province, setProvince] = useState<string>("");
  const [showOrganic, setShowOrganic] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showTours, setShowTours] = useState(false);

  const { data: farms, isLoading } = usePublishedFarms({
    search: search || undefined,
    province: province || undefined,
    isOrganic: showOrganic || undefined,
    offersDelivery: showDelivery || undefined,
    offersTours: showTours || undefined,
  });

  const { data: provinces } = useProvinces();

  return (
    <>
      <Helmet>
        <title>Dragon Fruit Farm Directory | Find Farms in South Africa</title>
        <meta
          name="description"
          content="Discover dragon fruit farms across South Africa. Find local growers, buy fresh pitaya fruit and plants, and connect with verified dragon fruit producers."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Dragon Fruit Farm Directory
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with dragon fruit growers across South Africa. Find fresh fruit,
                  quality plants, and expert farmers in your area.
                </p>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input
                      placeholder="Search farms by name or location..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                  <Select value={province} onValueChange={setProvince}>
                    <SelectTrigger className="w-full sm:w-[200px] h-12">
                      <SelectValue placeholder="All Provinces" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Provinces</SelectItem>
                      {SA_PROVINCES.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <Button
                    variant={showOrganic ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowOrganic(!showOrganic)}
                  >
                    <Leaf size={16} className="mr-1" /> Organic
                  </Button>
                  <Button
                    variant={showDelivery ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowDelivery(!showDelivery)}
                  >
                    <Truck size={16} className="mr-1" /> Delivery
                  </Button>
                  <Button
                    variant={showTours ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowTours(!showTours)}
                  >
                    <Eye size={16} className="mr-1" /> Farm Tours
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Farm Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="animate-spin text-primary" size={40} />
                </div>
              ) : farms && farms.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-muted-foreground">
                      Showing <strong>{farms.length}</strong> farm{farms.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {farms.map((farm) => (
                      <FarmCard key={farm.id} farm={farm} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🌵</div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                    No farms found
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearch("");
                      setProvince("");
                      setShowOrganic(false);
                      setShowDelivery(false);
                      setShowTours(false);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Are You a Dragon Fruit Farmer?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join South Africa's premier dragon fruit directory. List your farm, connect
                with buyers, and grow your business.
              </p>
              <Button asChild size="lg">
                <Link to="/auth">List Your Farm</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
