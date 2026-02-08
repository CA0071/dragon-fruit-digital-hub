import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateFarm, useUpdateFarm, Farm } from "@/hooks/useFarms";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2, Save, Eye, Trash2 } from "lucide-react";

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

export default function FarmForm() {
  const { id } = useParams<{ id: string }>();
  const isNew = id === "new";
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const createFarm = useCreateFarm();
  const updateFarm = useUpdateFarm();

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    short_description: "",
    description: "",
    province: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
    farm_size_hectares: "",
    year_established: "",
    is_organic: false,
    offers_tours: false,
    offers_delivery: false,
    offers_pickup: false,
    is_published: false,
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
      return;
    }

    if (!isNew && id && user) {
      loadFarm(id);
    }
  }, [id, isNew, user, authLoading, navigate]);

  const loadFarm = async (farmId: string) => {
    const { data, error } = await supabase
      .from("farms")
      .select("*")
      .eq("id", farmId)
      .eq("owner_id", user!.id)
      .single();

    if (error || !data) {
      toast({
        title: "Error",
        description: "Farm not found or you don't have permission to edit it.",
        variant: "destructive",
      });
      navigate("/dashboard");
      return;
    }

    setFormData({
      name: data.name || "",
      short_description: data.short_description || "",
      description: data.description || "",
      province: data.province || "",
      city: data.city || "",
      address: data.address || "",
      phone: data.phone || "",
      email: data.email || "",
      website: data.website || "",
      whatsapp: data.whatsapp || "",
      facebook: data.facebook || "",
      instagram: data.instagram || "",
      farm_size_hectares: data.farm_size_hectares?.toString() || "",
      year_established: data.year_established?.toString() || "",
      is_organic: data.is_organic || false,
      offers_tours: data.offers_tours || false,
      offers_delivery: data.offers_delivery || false,
      offers_pickup: data.offers_pickup || false,
      is_published: data.is_published || false,
    });
    setLoading(false);
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.province || !formData.city) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in the farm name, province, and city.",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);

    try {
      const farmPayload = {
        name: formData.name,
        short_description: formData.short_description || null,
        description: formData.description || null,
        province: formData.province,
        city: formData.city,
        address: formData.address || null,
        phone: formData.phone || null,
        email: formData.email || null,
        website: formData.website || null,
        whatsapp: formData.whatsapp || null,
        facebook: formData.facebook || null,
        instagram: formData.instagram || null,
        farm_size_hectares: formData.farm_size_hectares
          ? parseFloat(formData.farm_size_hectares)
          : null,
        year_established: formData.year_established
          ? parseInt(formData.year_established)
          : null,
        is_organic: formData.is_organic,
        offers_tours: formData.offers_tours,
        offers_delivery: formData.offers_delivery,
        offers_pickup: formData.offers_pickup,
        is_published: formData.is_published,
      };

      if (isNew) {
        const newFarm = await createFarm.mutateAsync(farmPayload);
        toast({
          title: "Farm Created",
          description: "Your farm listing has been created successfully.",
        });
        navigate(`/dashboard/farms/${newFarm.id}`);
      } else {
        await updateFarm.mutateAsync({ id: id!, ...farmPayload });
        toast({
          title: "Farm Updated",
          description: "Your farm listing has been updated successfully.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save farm.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{isNew ? "Add New Farm" : "Edit Farm"} | Dragon Fruit SA</title>
      </Helmet>

      <div className="min-h-screen bg-muted/30">
        {/* Header */}
        <header className="bg-background border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">
                  <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={handleSubmit} disabled={saving}>
                {saving ? <Loader2 size={16} className="animate-spin mr-1" /> : <Save size={16} className="mr-1" />}
                Save Draft
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  handleChange("is_published", true);
                  setTimeout(() => {
                    document.querySelector("form")?.requestSubmit();
                  }, 100);
                }}
                disabled={saving}
              >
                <Eye size={16} className="mr-1" /> Publish
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">
            {isNew ? "Add New Farm" : "Edit Farm"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Essential details about your farm that appear in search results.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Farm Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g., Sunshine Dragon Fruit Farm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="short_description">Short Description</Label>
                  <Textarea
                    id="short_description"
                    value={formData.short_description}
                    onChange={(e) => handleChange("short_description", e.target.value)}
                    placeholder="A brief tagline or summary (displayed in search results)"
                    rows={2}
                    maxLength={200}
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.short_description.length}/200 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Full Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Tell visitors about your farm, your story, and what makes you unique..."
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>
                  Help customers find your farm.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="province">Province *</Label>
                    <Select
                      value={formData.province}
                      onValueChange={(value) => handleChange("province", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        {SA_PROVINCES.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City/Town *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      placeholder="e.g., Polokwane"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Street address (optional)"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  How customers can reach you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+27 82 123 4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="contact@yourfarm.co.za"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      placeholder="+27 82 123 4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleChange("website", e.target.value)}
                      placeholder="https://yourfarm.co.za"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook URL</Label>
                    <Input
                      id="facebook"
                      type="url"
                      value={formData.facebook}
                      onChange={(e) => handleChange("facebook", e.target.value)}
                      placeholder="https://facebook.com/yourfarm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram URL</Label>
                    <Input
                      id="instagram"
                      type="url"
                      value={formData.instagram}
                      onChange={(e) => handleChange("instagram", e.target.value)}
                      placeholder="https://instagram.com/yourfarm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Farm Details */}
            <Card>
              <CardHeader>
                <CardTitle>Farm Details</CardTitle>
                <CardDescription>
                  Additional information about your operation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="farm_size">Farm Size (hectares)</Label>
                    <Input
                      id="farm_size"
                      type="number"
                      step="0.01"
                      value={formData.farm_size_hectares}
                      onChange={(e) => handleChange("farm_size_hectares", e.target.value)}
                      placeholder="e.g., 5.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year_established">Year Established</Label>
                    <Input
                      id="year_established"
                      type="number"
                      value={formData.year_established}
                      onChange={(e) => handleChange("year_established", e.target.value)}
                      placeholder="e.g., 2015"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="is_organic">Organic Certified</Label>
                      <p className="text-sm text-muted-foreground">
                        Farm is certified organic
                      </p>
                    </div>
                    <Switch
                      id="is_organic"
                      checked={formData.is_organic}
                      onCheckedChange={(checked) => handleChange("is_organic", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="offers_tours">Farm Tours Available</Label>
                      <p className="text-sm text-muted-foreground">
                        Offer farm visits and tours
                      </p>
                    </div>
                    <Switch
                      id="offers_tours"
                      checked={formData.offers_tours}
                      onCheckedChange={(checked) => handleChange("offers_tours", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="offers_delivery">Delivery Available</Label>
                      <p className="text-sm text-muted-foreground">
                        Can deliver products to customers
                      </p>
                    </div>
                    <Switch
                      id="offers_delivery"
                      checked={formData.offers_delivery}
                      onCheckedChange={(checked) => handleChange("offers_delivery", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="offers_pickup">Farm Pickup Available</Label>
                      <p className="text-sm text-muted-foreground">
                        Customers can collect from farm
                      </p>
                    </div>
                    <Switch
                      id="offers_pickup"
                      checked={formData.offers_pickup}
                      onCheckedChange={(checked) => handleChange("offers_pickup", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex items-center justify-between">
              <Button type="button" variant="ghost" asChild>
                <Link to="/dashboard">Cancel</Link>
              </Button>
              <div className="flex gap-3">
                <Button type="submit" variant="outline" disabled={saving}>
                  {saving ? (
                    <Loader2 size={16} className="animate-spin mr-1" />
                  ) : (
                    <Save size={16} className="mr-1" />
                  )}
                  Save Draft
                </Button>
                <Button
                  type="button"
                  disabled={saving}
                  onClick={() => {
                    handleChange("is_published", true);
                    setTimeout(() => {
                      document.querySelector("form")?.requestSubmit();
                    }, 100);
                  }}
                >
                  <Eye size={16} className="mr-1" /> Save & Publish
                </Button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
