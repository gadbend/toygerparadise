import React, { useState, useEffect } from 'react';
import { getGalleryImages } from '../lib/galleryQueries';
import type { CatGalleryImage } from '../types/gallery';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface CatGalleryProps {
  category: 'toyger' | 'bengal';
}

export function CatGallery({ category }: CatGalleryProps) {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<CatGalleryImage | null>(null);
  const [images, setImages] = useState<CatGalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getGalleryImages(category);
        console.log('Fetched images:', data);
        setImages(data);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  useEffect(() => {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || "";
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
    return () => imageObserver.disconnect();
  }, [images]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  if (!images.length) {
    return (
      <div className="text-center py-8">
        No images available for this category.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
            <img
              data-src={image.image_url}
              alt={image.title || `${category} cat`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              onLoad={(e) => {
                const img = e.target as HTMLImageElement;
                img.classList.remove('opacity-0');
              }}
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-medium drop-shadow-lg">{image.title}</h3>
                {image.description && (
                  <p className="text-gray-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.title || `${category} cat`}
                  className="w-full h-full object-contain"
                />
              </div>
              {selectedImage.title && (
                <div className="mt-4 text-white">
                  <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="mt-2 text-gray-300">{selectedImage.description}</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
