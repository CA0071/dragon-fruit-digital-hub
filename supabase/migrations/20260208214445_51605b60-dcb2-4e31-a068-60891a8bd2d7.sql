-- Create enum types
CREATE TYPE public.user_role AS ENUM ('farmer', 'agent', 'admin');
CREATE TYPE public.subscription_status AS ENUM ('trial', 'active', 'expired', 'cancelled');
CREATE TYPE public.verification_status AS ENUM ('pending', 'verified', 'rejected');

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create user_roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role user_role NOT NULL DEFAULT 'farmer',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    UNIQUE (user_id, role)
);

-- Create farms table
CREATE TABLE public.farms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    short_description TEXT,
    province TEXT NOT NULL,
    city TEXT NOT NULL,
    address TEXT,
    coordinates POINT,
    phone TEXT,
    email TEXT,
    website TEXT,
    whatsapp TEXT,
    facebook TEXT,
    instagram TEXT,
    farm_size_hectares DECIMAL(10,2),
    year_established INTEGER,
    is_organic BOOLEAN DEFAULT false,
    offers_tours BOOLEAN DEFAULT false,
    offers_delivery BOOLEAN DEFAULT false,
    offers_pickup BOOLEAN DEFAULT false,
    hero_image_url TEXT,
    logo_url TEXT,
    verification_status verification_status DEFAULT 'pending',
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create farm_cultivars table
CREATE TABLE public.farm_cultivars (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE NOT NULL,
    cultivar_name TEXT NOT NULL,
    cultivar_type TEXT,
    description TEXT,
    available_as_plant BOOLEAN DEFAULT false,
    available_as_fruit BOOLEAN DEFAULT false,
    price_per_plant DECIMAL(10,2),
    price_per_kg DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create farm_gallery table
CREATE TABLE public.farm_gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE NOT NULL,
    image_url TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create farm_certifications table
CREATE TABLE public.farm_certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE NOT NULL,
    certification_name TEXT NOT NULL,
    issuing_body TEXT,
    valid_until DATE,
    certificate_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create subscriptions table
CREATE TABLE public.subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE NOT NULL UNIQUE,
    status subscription_status DEFAULT 'trial' NOT NULL,
    plan_name TEXT DEFAULT 'Basic' NOT NULL,
    price_monthly DECIMAL(10,2) DEFAULT 0,
    trial_ends_at TIMESTAMP WITH TIME ZONE,
    current_period_start TIMESTAMP WITH TIME ZONE,
    current_period_end TIMESTAMP WITH TIME ZONE,
    yoco_subscription_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create contact_inquiries table
CREATE TABLE public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE NOT NULL,
    sender_name TEXT NOT NULL,
    sender_email TEXT NOT NULL,
    sender_phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farm_cultivars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farm_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farm_certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role user_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = _user_id AND role = _role
    )
$$;

-- Function to check farm ownership
CREATE OR REPLACE FUNCTION public.owns_farm(_user_id UUID, _farm_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.farms
        WHERE id = _farm_id AND owner_id = _user_id
    )
$$;

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO public.profiles (user_id, full_name)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
    
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'farmer');
    
    RETURN NEW;
END;
$$;

-- Trigger for new user
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_farms_updated_at BEFORE UPDATE ON public.farms
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON public.subscriptions
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Slug generation function
CREATE OR REPLACE FUNCTION public.generate_farm_slug()
RETURNS TRIGGER AS $$
DECLARE
    base_slug TEXT;
    new_slug TEXT;
    counter INTEGER := 0;
BEGIN
    base_slug := lower(regexp_replace(NEW.name, '[^a-zA-Z0-9]+', '-', 'g'));
    base_slug := trim(both '-' from base_slug);
    new_slug := base_slug;
    
    WHILE EXISTS (SELECT 1 FROM public.farms WHERE slug = new_slug AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)) LOOP
        counter := counter + 1;
        new_slug := base_slug || '-' || counter;
    END LOOP;
    
    NEW.slug := new_slug;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_farm_slug_trigger
    BEFORE INSERT OR UPDATE OF name ON public.farms
    FOR EACH ROW EXECUTE FUNCTION public.generate_farm_slug();

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for user_roles
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for farms
CREATE POLICY "Anyone can view published farms" ON public.farms FOR SELECT USING (is_published = true);
CREATE POLICY "Owners can view own farms" ON public.farms FOR SELECT TO authenticated USING (auth.uid() = owner_id);
CREATE POLICY "Owners can insert farms" ON public.farms FOR INSERT TO authenticated WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Owners can update own farms" ON public.farms FOR UPDATE TO authenticated USING (auth.uid() = owner_id);
CREATE POLICY "Owners can delete own farms" ON public.farms FOR DELETE TO authenticated USING (auth.uid() = owner_id);

-- RLS Policies for farm_cultivars
CREATE POLICY "Anyone can view cultivars of published farms" ON public.farm_cultivars FOR SELECT 
    USING (EXISTS (SELECT 1 FROM public.farms WHERE id = farm_id AND is_published = true));
CREATE POLICY "Owners can manage cultivars" ON public.farm_cultivars FOR ALL TO authenticated 
    USING (public.owns_farm(auth.uid(), farm_id));

-- RLS Policies for farm_gallery
CREATE POLICY "Anyone can view gallery of published farms" ON public.farm_gallery FOR SELECT 
    USING (EXISTS (SELECT 1 FROM public.farms WHERE id = farm_id AND is_published = true));
CREATE POLICY "Owners can manage gallery" ON public.farm_gallery FOR ALL TO authenticated 
    USING (public.owns_farm(auth.uid(), farm_id));

-- RLS Policies for farm_certifications
CREATE POLICY "Anyone can view certifications of published farms" ON public.farm_certifications FOR SELECT 
    USING (EXISTS (SELECT 1 FROM public.farms WHERE id = farm_id AND is_published = true));
CREATE POLICY "Owners can manage certifications" ON public.farm_certifications FOR ALL TO authenticated 
    USING (public.owns_farm(auth.uid(), farm_id));

-- RLS Policies for subscriptions
CREATE POLICY "Owners can view own subscription" ON public.subscriptions FOR SELECT TO authenticated 
    USING (public.owns_farm(auth.uid(), farm_id));
CREATE POLICY "Owners can update own subscription" ON public.subscriptions FOR UPDATE TO authenticated 
    USING (public.owns_farm(auth.uid(), farm_id));

-- RLS Policies for contact_inquiries
CREATE POLICY "Anyone can create inquiries" ON public.contact_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Owners can view inquiries" ON public.contact_inquiries FOR SELECT TO authenticated 
    USING (public.owns_farm(auth.uid(), farm_id));
CREATE POLICY "Owners can update inquiries" ON public.contact_inquiries FOR UPDATE TO authenticated 
    USING (public.owns_farm(auth.uid(), farm_id));

-- Create storage bucket for farm images
INSERT INTO storage.buckets (id, name, public) VALUES ('farm-images', 'farm-images', true);

-- Storage policies
CREATE POLICY "Anyone can view farm images" ON storage.objects FOR SELECT USING (bucket_id = 'farm-images');
CREATE POLICY "Authenticated users can upload farm images" ON storage.objects FOR INSERT TO authenticated 
    WITH CHECK (bucket_id = 'farm-images');
CREATE POLICY "Users can update own images" ON storage.objects FOR UPDATE TO authenticated 
    USING (bucket_id = 'farm-images' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete own images" ON storage.objects FOR DELETE TO authenticated 
    USING (bucket_id = 'farm-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create indexes for performance
CREATE INDEX idx_farms_province ON public.farms(province);
CREATE INDEX idx_farms_is_published ON public.farms(is_published);
CREATE INDEX idx_farms_owner_id ON public.farms(owner_id);
CREATE INDEX idx_farm_cultivars_farm_id ON public.farm_cultivars(farm_id);
CREATE INDEX idx_contact_inquiries_farm_id ON public.contact_inquiries(farm_id);