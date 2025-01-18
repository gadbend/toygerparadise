import React from 'react';
import GalleryLayout from '../components/GalleryLayout';
import Navigation from '../components/Navigation';

const bengalImages = [
  {
    url: '/images/FEMALE-TOYGEY-LEFT-PROFILE-QUEEN-REFLECTION-1x1-1-scaled.jpg',
    title: 'Bengal Queen',
    description: 'A beautiful Bengal showcasing their distinctive spotted coat pattern.',
  },
  {
    url: '/images/HONEYMOON-ON-OUTSIDE-DECK-IN-SUMMER-1X1.jpg',
    title: 'Summer Relaxation',
    description: 'Our Bengal enjoying a peaceful summer day on the deck.',
  },
  // Add more images as needed
];

const BengalGalleryPage: React.FC = () => {
  return (
    <>
      <Navigation />
      {/* Hidden SEO H1 */}
      <h1 className="sr-only">Elegant White Silver Bengals | Unique Kittens for Adoption at ToygerParadise</h1>
      <GalleryLayout
        title="Bengal Gallery"
        description="Explore our stunning Bengal cats, renowned for their wild appearance and playful nature. These exotic-looking cats combine the beauty of their wild ancestors with the loving temperament of domestic cats."
        images={bengalImages}
      />
    </>
  );
};

export default BengalGalleryPage;
