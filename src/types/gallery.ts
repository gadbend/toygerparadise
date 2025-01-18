export type CatGalleryImage = {
  id: string;
  created_at: string;
  image_url: string;
  category: 'toyger' | 'bengal';
  title?: string;
  description?: string;
};

export type GalleryImageInsert = Omit<CatGalleryImage, 'id' | 'created_at'>;
