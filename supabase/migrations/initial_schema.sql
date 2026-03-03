-- Create table for contact messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    bike TEXT,
    message TEXT NOT NULL
);

-- Create table for dealer applications
CREATE TABLE IF NOT EXISTS public.dealer_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    company_name TEXT NOT NULL,
    website TEXT,
    country TEXT NOT NULL,
    city_state TEXT NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    business_type TEXT NOT NULL,
    years_in_business TEXT,
    sales_channels TEXT[], -- Stored as an array of strings
    current_brands TEXT,
    monthly_volume TEXT,
    countries_served TEXT NOT NULL,
    intents TEXT[], -- Stored as an array of strings
    message TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dealer_applications ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert (public submission)
CREATE POLICY "Allow public insert to contact_messages" 
ON public.contact_messages FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert to dealer_applications" 
ON public.dealer_applications FOR INSERT 
WITH CHECK (true);

-- Create policies to allow authenticated users to view applications (e.g. for an admin dashboard)
-- For now, we'll keep it simple, but you might want to restrict this later.
CREATE POLICY "Allow authenticated select from contact_messages" 
ON public.contact_messages FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated select from dealer_applications" 
ON public.dealer_applications FOR SELECT 
TO authenticated 
USING (true);
