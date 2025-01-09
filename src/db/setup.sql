-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create kittens table
CREATE TABLE IF NOT EXISTS public.kittens (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  breed TEXT NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT,
  price TEXT,
  age TEXT,
  gender TEXT,
  CONSTRAINT valid_breed CHECK (breed IN ('Toyger', 'Bengal')),
  CONSTRAINT valid_gender CHECK (gender IN ('Male', 'Female'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.kittens ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view kittens"
  ON public.kittens
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage kittens"
  ON public.kittens
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true);

-- Create storage policy to allow public viewing of images
CREATE POLICY "Public Access"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'images');

-- Create storage policy to allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'images' 
    AND auth.role() = 'authenticated'
  );

-- Insert sample data
INSERT INTO public.kittens (name, breed, image_url, description, price, age, gender)
VALUES
  ('Luna', 'Toyger', '/images/FEMALE-TOYGEY-LEFT-PROFILE-QUEEN-REFLECTION-1x1-1-scaled.jpg', 'Playful and energetic female Toyger with stunning markings', '$3,500', '12 weeks', 'Female'),
  ('Tiger', 'Toyger', '/images/SILVER-TOYGER-WINTER-IN-SUMMER-WINDOW-1x1-1.jpg', 'Gentle and affectionate male with beautiful silver coat', '$3,800', '10 weeks', 'Male'),
  ('Shadow', 'Bengal', '/images/HONEYMOON-ON-OUTSIDE-DECK-IN-SUMMER-1X1.jpg', 'Energetic Bengal with stunning rosette patterns', '$4,000', '14 weeks', 'Male');
