
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3",
      alt: "Coffee shop interior"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3",
      alt: "Barista making coffee"
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3",
      alt: "Coffee beans"
    },
    {
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3",
      alt: "Cozy seating area"
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3",
      alt: "Latte art"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3",
      alt: "Coffee roasting"
    },
    {
      src: "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?ixlib=rb-4.0.3",
      alt: "Fresh pastries"
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3",
      alt: "Coffee shop atmosphere"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Step into our world of coffee craftsmanship and cozy atmosphere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item aspect-square cursor-pointer"
              data-aos="zoom-in" 
              data-aos-delay={index * 50}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 text-white text-3xl hover:text-cream-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
