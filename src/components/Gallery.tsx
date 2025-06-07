import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/assets/Coffee-shop-interior.png",
      alt: "Coffee shop interior"
    },
    {
      src: "/assets/Barista-making-coffee.png",
      alt: "Barista making coffee"
    },
    {
      src: "/assets/Coffee-beans.png",
      alt: "Coffee beans"
    },
    {
      src: "/assets/Cozy-seating-area.png",
      alt: "Cozy seating area"
    },
    {
      src: "/assets/Latte-art.png",
      alt: "Latte art"
    },
    {
      src: "/assets/Coffee-roasting.png",
      alt: "Coffee roasting"
    },
    {
      src: "/assets/Fresh-pastries.png",
      alt: "Fresh pastries"
    },
    {
      src: "/assets/Coffee-shop-atmosphere.png",
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
