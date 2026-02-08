import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface Farm {
  id: string;
  owner_id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  province: string;
  city: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  whatsapp: string | null;
  facebook: string | null;
  instagram: string | null;
  farm_size_hectares: number | null;
  year_established: number | null;
  is_organic: boolean;
  offers_tours: boolean;
  offers_delivery: boolean;
  offers_pickup: boolean;
  hero_image_url: string | null;
  logo_url: string | null;
  verification_status: "pending" | "verified" | "rejected";
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface FarmCultivar {
  id: string;
  farm_id: string;
  cultivar_name: string;
  cultivar_type: string | null;
  description: string | null;
  available_as_plant: boolean;
  available_as_fruit: boolean;
  price_per_plant: number | null;
  price_per_kg: number | null;
  created_at: string;
}

export interface FarmWithDetails extends Farm {
  cultivars?: FarmCultivar[];
  gallery?: { id: string; image_url: string; caption: string | null; display_order: number }[];
  certifications?: { id: string; certification_name: string; issuing_body: string | null; valid_until: string | null }[];
}

interface FarmFilters {
  province?: string;
  city?: string;
  isOrganic?: boolean;
  offersTours?: boolean;
  offersDelivery?: boolean;
  search?: string;
}

// Fetch all published farms with optional filters
export function usePublishedFarms(filters?: FarmFilters) {
  return useQuery({
    queryKey: ["farms", "published", filters],
    queryFn: async () => {
      let query = supabase
        .from("farms")
        .select("*")
        .eq("is_published", true)
        .order("is_featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (filters?.province) {
        query = query.eq("province", filters.province);
      }
      if (filters?.city) {
        query = query.ilike("city", `%${filters.city}%`);
      }
      if (filters?.isOrganic) {
        query = query.eq("is_organic", true);
      }
      if (filters?.offersTours) {
        query = query.eq("offers_tours", true);
      }
      if (filters?.offersDelivery) {
        query = query.eq("offers_delivery", true);
      }
      if (filters?.search) {
        query = query.or(`name.ilike.%${filters.search}%,city.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Farm[];
    },
  });
}

// Fetch a single farm by slug with all details
export function useFarmBySlug(slug: string) {
  return useQuery({
    queryKey: ["farm", slug],
    queryFn: async () => {
      const { data: farm, error: farmError } = await supabase
        .from("farms")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (farmError) throw farmError;

      // Fetch related data
      const [cultivarsResult, galleryResult, certificationsResult] = await Promise.all([
        supabase.from("farm_cultivars").select("*").eq("farm_id", farm.id),
        supabase.from("farm_gallery").select("*").eq("farm_id", farm.id).order("display_order"),
        supabase.from("farm_certifications").select("*").eq("farm_id", farm.id),
      ]);

      return {
        ...farm,
        cultivars: cultivarsResult.data || [],
        gallery: galleryResult.data || [],
        certifications: certificationsResult.data || [],
      } as FarmWithDetails;
    },
    enabled: !!slug,
  });
}

// Fetch user's own farms
export function useMyFarms() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["farms", "my", user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from("farms")
        .select("*")
        .eq("owner_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Farm[];
    },
    enabled: !!user,
  });
}

// Create a new farm
export function useCreateFarm() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (farmData: Partial<Farm>) => {
      if (!user) throw new Error("Must be logged in");

      const { data, error } = await supabase
        .from("farms")
        .insert({
          ...farmData,
          owner_id: user.id,
        } as any)
        .select()
        .single();

      if (error) throw error;
      return data as Farm;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["farms"] });
    },
  });
}

// Update a farm
export function useUpdateFarm() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...farmData }: Partial<Farm> & { id: string }) => {
      const { data, error } = await supabase
        .from("farms")
        .update(farmData as any)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data as Farm;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["farms"] });
      queryClient.invalidateQueries({ queryKey: ["farm", data.slug] });
    },
  });
}

// Get unique provinces from published farms
export function useProvinces() {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("farms")
        .select("province")
        .eq("is_published", true);

      if (error) throw error;

      const provinces = [...new Set(data.map((f) => f.province))].sort();
      return provinces;
    },
  });
}
