-- Comprehensive Schema for MaxRacing Backend

-- 1. Contact & Dealer Tables (Already established, included for completeness)
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    bike TEXT,
    message TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS dealer_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    company_name TEXT NOT NULL,
    website TEXT,
    country TEXT NOT NULL,
    city_state TEXT NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    business_type TEXT NOT NULL,
    years_in_business TEXT,
    sales_channels TEXT[],
    current_brands TEXT,
    monthly_volume TEXT,
    countries_served TEXT NOT NULL,
    intents TEXT[],
    message TEXT NOT NULL
);

-- 2. Knowledge Base (FAQ)
CREATE TABLE IF NOT EXISTS faq_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES faq_categories(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    display_order INT DEFAULT 0
);

-- 3. Fitment Data (Motorcycles)
CREATE TABLE IF NOT EXISTS brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS motorcycles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID REFERENCES brands(id) ON DELETE CASCADE,
    model TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    segment TEXT NOT NULL
);

-- 4. Technical Guides (Installation)
CREATE TABLE IF NOT EXISTS installation_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guide_id TEXT NOT NULL, -- e.g., 'universal'
    slug TEXT NOT NULL UNIQUE,
    label TEXT NOT NULL,
    content_html TEXT,
    icon TEXT, -- Lucide icon name
    display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS installation_tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guide_id TEXT NOT NULL,
    name TEXT NOT NULL,
    display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS torque_recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bolt_size TEXT NOT NULL,
    torque_nm TEXT NOT NULL,
    application TEXT NOT NULL,
    display_order INT DEFAULT 0
);

-- 5. Home Page Content
CREATE TABLE IF NOT EXISTS youtube_videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    video_id TEXT NOT NULL UNIQUE,
    title TEXT,
    display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS comparison_features (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    feature TEXT NOT NULL,
    tooltip TEXT,
    maxracing TEXT,
    ohlins TEXT,
    hyperpro TEXT,
    gpr TEXT,
    scotts TEXT,
    generic TEXT,
    display_order INT DEFAULT 0
);

-- 6. Engineering & About Content
CREATE TABLE IF NOT EXISTS engineering_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    icon TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS about_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_name TEXT NOT NULL UNIQUE,
    title TEXT,
    content TEXT NOT NULL,
    image_url TEXT
);

CREATE TABLE IF NOT EXISTS product_colors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    color_code TEXT NOT NULL,
    display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS product_internal_comparisons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    icon TEXT NOT NULL,
    max10_value TEXT NOT NULL,
    max20_value TEXT NOT NULL,
    display_order INT DEFAULT 0
);

-- RLS Policies
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE dealer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE motorcycles ENABLE ROW LEVEL SECURITY;
ALTER TABLE installation_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE installation_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE torque_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE youtube_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE comparison_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE engineering_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_colors ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_internal_comparisons ENABLE ROW LEVEL SECURITY;

-- Allow public read for catalog/guides
CREATE POLICY "Public Read" ON faq_categories FOR SELECT USING (true);
CREATE POLICY "Public Read" ON faqs FOR SELECT USING (true);
CREATE POLICY "Public Read" ON brands FOR SELECT USING (true);
CREATE POLICY "Public Read" ON motorcycles FOR SELECT USING (true);
CREATE POLICY "Public Read" ON installation_sections FOR SELECT USING (true);
CREATE POLICY "Public Read" ON installation_tools FOR SELECT USING (true);
CREATE POLICY "Public Read" ON torque_recommendations FOR SELECT USING (true);
CREATE POLICY "Public Read" ON youtube_videos FOR SELECT USING (true);
CREATE POLICY "Public Read" ON comparison_features FOR SELECT USING (true);
CREATE POLICY "Public Read" ON engineering_sections FOR SELECT USING (true);
CREATE POLICY "Public Read" ON about_content FOR SELECT USING (true);
CREATE POLICY "Public Read" ON product_colors FOR SELECT USING (true);
CREATE POLICY "Public Read" ON product_internal_comparisons FOR SELECT USING (true);

-- Allow public insert for forms
CREATE POLICY "Public Insert" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert" ON dealer_applications FOR INSERT WITH CHECK (true);
