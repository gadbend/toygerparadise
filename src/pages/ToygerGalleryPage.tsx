import React from 'react';
import GalleryLayout from '../components/GalleryLayout';
import Navigation from '../components/Navigation';

const toygerImages = [
  {
    url: '/images/TOYGER-MALE-PRINCE-16x9-04.jpg',
    title: 'Majestic Toyger',
    description: 'A stunning example of the Toyger breed, showcasing their distinctive tiger-like stripes.',
  },
  {
    url: '/images/SILVER-TOYGER-WINTER-IN-SUMMER-WINDOW-1x1-1.jpg',
    title: 'Silver Beauty',
    description: 'Our silver Toyger enjoying a peaceful moment by the window.',
  },
  // Add more images as needed
];

const ToygerGalleryPage: React.FC = () => {
  return (
    <>
      <Navigation />
      {/* Hidden SEO H1 */}
      <h1 className="sr-only">Toyger Cat Gallery | See Our Stunning Toyger Cats</h1>
      <GalleryLayout
        title="Toyger Gallery"
        description="Discover our beautiful Toyger cats, known for their stunning tiger-like appearance and friendly personalities. These unique cats combine the wild look of a tiger with the loving nature of a domestic cat."
        images={toygerImages}
      />
    </>
  );
};

export default ToygerGalleryPage;
