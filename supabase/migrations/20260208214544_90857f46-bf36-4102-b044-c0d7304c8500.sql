-- Fix function search path for update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

-- Fix function search path for generate_farm_slug
CREATE OR REPLACE FUNCTION public.generate_farm_slug()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
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
$$;

-- Fix permissive RLS policy for contact_inquiries - require valid farm_id
DROP POLICY IF EXISTS "Anyone can create inquiries" ON public.contact_inquiries;
CREATE POLICY "Anyone can create inquiries for published farms" ON public.contact_inquiries 
    FOR INSERT 
    WITH CHECK (
        EXISTS (SELECT 1 FROM public.farms WHERE id = farm_id AND is_published = true)
    );