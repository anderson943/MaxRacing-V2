-- Migration to add catalog supports and assembly instructions tables
CREATE TABLE IF NOT EXISTS public.assembly_instructions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    brand TEXT NOT NULL,
    motorcycle_model TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_type TEXT NOT NULL,
    source_path TEXT
);

CREATE TABLE IF NOT EXISTS public.catalog_supports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    brand TEXT NOT NULL,
    sheet TEXT,
    damper_model TEXT, -- MAX10 / MAX20
    variant TEXT,      -- PR 4 / PR 5 / etc.
    motorcycle_models JSONB NOT NULL DEFAULT '[]'::jsonb,
    motorcycle_model_keys TEXT[] NOT NULL DEFAULT '{}'::text[],
    bill_of_materials JSONB NOT NULL DEFAULT '[]'::jsonb,
    images TEXT[] NOT NULL DEFAULT '{}'::text[],
    instruction_ids UUID[] NOT NULL DEFAULT '{}'::uuid[]
);

-- Enable RLS
ALTER TABLE public.assembly_instructions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.catalog_supports ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read from assembly_instructions" ON public.assembly_instructions FOR SELECT USING (true);
CREATE POLICY "Allow public read from catalog_supports" ON public.catalog_supports FOR SELECT USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_catalog_supports_brand ON public.catalog_supports(brand);
CREATE INDEX IF NOT EXISTS idx_catalog_supports_damper_model ON public.catalog_supports(damper_model);
CREATE INDEX IF NOT EXISTS idx_catalog_supports_model_keys ON public.catalog_supports USING GIN (motorcycle_model_keys);
