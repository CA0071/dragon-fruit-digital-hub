export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      contact_inquiries: {
        Row: {
          created_at: string
          farm_id: string
          id: string
          is_read: boolean | null
          message: string
          sender_email: string
          sender_name: string
          sender_phone: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          farm_id: string
          id?: string
          is_read?: boolean | null
          message: string
          sender_email: string
          sender_name: string
          sender_phone?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          farm_id?: string
          id?: string
          is_read?: boolean | null
          message?: string
          sender_email?: string
          sender_name?: string
          sender_phone?: string | null
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_inquiries_farm_id_fkey"
            columns: ["farm_id"]
            isOneToOne: false
            referencedRelation: "farms"
            referencedColumns: ["id"]
          },
        ]
      }
      farm_certifications: {
        Row: {
          certificate_url: string | null
          certification_name: string
          created_at: string
          farm_id: string
          id: string
          issuing_body: string | null
          valid_until: string | null
        }
        Insert: {
          certificate_url?: string | null
          certification_name: string
          created_at?: string
          farm_id: string
          id?: string
          issuing_body?: string | null
          valid_until?: string | null
        }
        Update: {
          certificate_url?: string | null
          certification_name?: string
          created_at?: string
          farm_id?: string
          id?: string
          issuing_body?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "farm_certifications_farm_id_fkey"
            columns: ["farm_id"]
            isOneToOne: false
            referencedRelation: "farms"
            referencedColumns: ["id"]
          },
        ]
      }
      farm_cultivars: {
        Row: {
          available_as_fruit: boolean | null
          available_as_plant: boolean | null
          created_at: string
          cultivar_name: string
          cultivar_type: string | null
          description: string | null
          farm_id: string
          id: string
          price_per_kg: number | null
          price_per_plant: number | null
        }
        Insert: {
          available_as_fruit?: boolean | null
          available_as_plant?: boolean | null
          created_at?: string
          cultivar_name: string
          cultivar_type?: string | null
          description?: string | null
          farm_id: string
          id?: string
          price_per_kg?: number | null
          price_per_plant?: number | null
        }
        Update: {
          available_as_fruit?: boolean | null
          available_as_plant?: boolean | null
          created_at?: string
          cultivar_name?: string
          cultivar_type?: string | null
          description?: string | null
          farm_id?: string
          id?: string
          price_per_kg?: number | null
          price_per_plant?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "farm_cultivars_farm_id_fkey"
            columns: ["farm_id"]
            isOneToOne: false
            referencedRelation: "farms"
            referencedColumns: ["id"]
          },
        ]
      }
      farm_gallery: {
        Row: {
          caption: string | null
          created_at: string
          display_order: number | null
          farm_id: string
          id: string
          image_url: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          display_order?: number | null
          farm_id: string
          id?: string
          image_url: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          display_order?: number | null
          farm_id?: string
          id?: string
          image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "farm_gallery_farm_id_fkey"
            columns: ["farm_id"]
            isOneToOne: false
            referencedRelation: "farms"
            referencedColumns: ["id"]
          },
        ]
      }
      farms: {
        Row: {
          address: string | null
          city: string
          coordinates: unknown
          created_at: string
          description: string | null
          email: string | null
          facebook: string | null
          farm_size_hectares: number | null
          hero_image_url: string | null
          id: string
          instagram: string | null
          is_featured: boolean | null
          is_organic: boolean | null
          is_published: boolean | null
          logo_url: string | null
          name: string
          offers_delivery: boolean | null
          offers_pickup: boolean | null
          offers_tours: boolean | null
          owner_id: string
          phone: string | null
          province: string
          short_description: string | null
          slug: string
          updated_at: string
          verification_status:
            | Database["public"]["Enums"]["verification_status"]
            | null
          website: string | null
          whatsapp: string | null
          year_established: number | null
        }
        Insert: {
          address?: string | null
          city: string
          coordinates?: unknown
          created_at?: string
          description?: string | null
          email?: string | null
          facebook?: string | null
          farm_size_hectares?: number | null
          hero_image_url?: string | null
          id?: string
          instagram?: string | null
          is_featured?: boolean | null
          is_organic?: boolean | null
          is_published?: boolean | null
          logo_url?: string | null
          name: string
          offers_delivery?: boolean | null
          offers_pickup?: boolean | null
          offers_tours?: boolean | null
          owner_id: string
          phone?: string | null
          province: string
          short_description?: string | null
          slug: string
          updated_at?: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          website?: string | null
          whatsapp?: string | null
          year_established?: number | null
        }
        Update: {
          address?: string | null
          city?: string
          coordinates?: unknown
          created_at?: string
          description?: string | null
          email?: string | null
          facebook?: string | null
          farm_size_hectares?: number | null
          hero_image_url?: string | null
          id?: string
          instagram?: string | null
          is_featured?: boolean | null
          is_organic?: boolean | null
          is_published?: boolean | null
          logo_url?: string | null
          name?: string
          offers_delivery?: boolean | null
          offers_pickup?: boolean | null
          offers_tours?: boolean | null
          owner_id?: string
          phone?: string | null
          province?: string
          short_description?: string | null
          slug?: string
          updated_at?: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          website?: string | null
          whatsapp?: string | null
          year_established?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          farm_id: string
          id: string
          plan_name: string
          price_monthly: number | null
          status: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at: string | null
          updated_at: string
          yoco_subscription_id: string | null
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          farm_id: string
          id?: string
          plan_name?: string
          price_monthly?: number | null
          status?: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          updated_at?: string
          yoco_subscription_id?: string | null
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          farm_id?: string
          id?: string
          plan_name?: string
          price_monthly?: number | null
          status?: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          updated_at?: string
          yoco_subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_farm_id_fkey"
            columns: ["farm_id"]
            isOneToOne: true
            referencedRelation: "farms"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["user_role"]
          _user_id: string
        }
        Returns: boolean
      }
      owns_farm: {
        Args: { _farm_id: string; _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      subscription_status: "trial" | "active" | "expired" | "cancelled"
      user_role: "farmer" | "agent" | "admin"
      verification_status: "pending" | "verified" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      subscription_status: ["trial", "active", "expired", "cancelled"],
      user_role: ["farmer", "agent", "admin"],
      verification_status: ["pending", "verified", "rejected"],
    },
  },
} as const
