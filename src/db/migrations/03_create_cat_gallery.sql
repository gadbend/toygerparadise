-- Create the cat_gallery table
CREATE TABLE IF NOT EXISTS public.cat_gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    image_url TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('toyger', 'bengal')),
    title TEXT,
    description TEXT
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.cat_gallery ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON public.cat_gallery
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.cat_gallery
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON public.cat_gallery
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON public.cat_gallery
    FOR DELETE USING (auth.role() = 'authenticated');
