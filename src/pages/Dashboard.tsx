import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/contexts/AuthContext";
import { useMyFarms, Farm } from "@/hooks/useFarms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Plus,
  Settings,
  Eye,
  EyeOff,
  Edit,
  LogOut,
  MapPin,
  BarChart3,
  Users,
  MessageSquare,
  ExternalLink,
  Home,
} from "lucide-react";

function FarmListItem({ farm }: { farm: Farm }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48 h-32 md:h-auto bg-muted flex-shrink-0">
          {farm.hero_image_url ? (
            <img
              src={farm.hero_image_url}
              alt={farm.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <span className="text-3xl">🐉</span>
            </div>
          )}
        </div>
        <CardContent className="flex-1 p-4 md:p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-display text-xl font-semibold">{farm.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin size={14} /> {farm.city}, {farm.province}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={farm.is_published ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                {farm.is_published ? <Eye size={12} /> : <EyeOff size={12} />}
                {farm.is_published ? "Published" : "Draft"}
              </Badge>
              <Badge
                variant={
                  farm.verification_status === "verified"
                    ? "default"
                    : farm.verification_status === "rejected"
                    ? "destructive"
                    : "outline"
                }
              >
                {farm.verification_status === "verified"
                  ? "✓ Verified"
                  : farm.verification_status === "rejected"
                  ? "Rejected"
                  : "Pending"}
              </Badge>
            </div>
          </div>

          {farm.short_description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {farm.short_description}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm">
              <Link to={`/dashboard/farms/${farm.id}`}>
                <Edit size={14} className="mr-1" /> Edit
              </Link>
            </Button>
            {farm.is_published && (
              <Button variant="outline" size="sm" asChild>
                <Link to={`/farms/${farm.slug}`} target="_blank">
                  <ExternalLink size={14} className="mr-1" /> View Live
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  const { user, profile, signOut, loading: authLoading } = useAuth();
  const { data: farms, isLoading: farmsLoading } = useMyFarms();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Skeleton className="w-40 h-10" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Dragon Fruit SA Farm Directory</title>
      </Helmet>

      <div className="min-h-screen bg-muted/30">
        {/* Top Navigation */}
        <header className="bg-background border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-lg">DF</span>
                </div>
                <span className="font-display font-semibold hidden sm:inline">
                  Dragon Fruit SA
                </span>
              </Link>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <span className="font-medium text-muted-foreground hidden sm:inline">
                Farmer Dashboard
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <Home size={16} className="mr-1" /> Home
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/directory">
                  <MapPin size={16} className="mr-1" /> Directory
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut size={16} className="mr-1" /> Sign Out
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Welcome, {profile?.full_name || "Farmer"}!
            </h1>
            <p className="text-muted-foreground">
              Manage your farm listings and connect with buyers.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{farms?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">Farm Listings</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Eye className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {farms?.filter((f) => f.is_published).length || 0}
                  </p>
                  <p className="text-sm text-muted-foreground">Published</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Inquiries</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <BarChart3 className="text-muted-foreground" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Farms Section */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-semibold">Your Farms</h2>
            <Button asChild>
              <Link to="/dashboard/farms/new">
                <Plus size={18} className="mr-2" /> Add New Farm
              </Link>
            </Button>
          </div>

          {farmsLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : farms && farms.length > 0 ? (
            <div className="space-y-4">
              {farms.map((farm) => (
                <FarmListItem key={farm.id} farm={farm} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-16 text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  No Farms Listed Yet
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Get started by creating your first farm listing. It only takes a few
                  minutes to showcase your dragon fruit operation.
                </p>
                <Button asChild>
                  <Link to="/dashboard/farms/new">
                    <Plus size={18} className="mr-2" /> Create Your First Listing
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
}
