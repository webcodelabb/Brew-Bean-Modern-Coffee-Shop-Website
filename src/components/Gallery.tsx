import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://cdn.shopify.com/s/files/1/0491/2165/6981/files/Eco-Friendly_and_Sustainable_480x480.webp?v=1733402305",
      alt: "Coffee shop interior"
    },
    {
      
      src: "https://images.stockcake.com/public/1/0/3/103f12d4-962f-454f-8e7a-3337442069ff_large/barista-making-coffee-stockcake.jpg",
      alt: "Barista making coffee"
    },
    {
      src: "https://www.nescafe.com/au/sites/default/files/2024-04/Untitled-5%20copy_6_0.jpg",
      alt: "Coffee beans"
    },
    {
      src: "https://www.marthastewart.com/thmb/OEeMUozadwnFNdVjcDNHthLUlMs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ms-cozy-living-room-ideas-michael-hunter-1-c7e9c09909954856a92206adf3b2dfbf.JPG",
      alt: "Cozy seating area"
    },
    {
      src: "https://cdn.greenplantation.com/2020/07/latte-art-ruze.jpg",
      alt: "Latte art"
    },
    {
      src: "https://mtpak.coffee/wp-content/uploads/2021/02/image2.jpg",
      alt: "Coffee roasting"
    },
    {
      src: "https://www.bhg.com/thmb/7dROILyl6Q6ZtiKBbe8B_CgC_II=/2250x0/filters:no_upscale():strip_icc()/Lady-Locks-Recipe-6750995-fece434185e547f985ecb87ef4444e48.jpg",
      alt: "Fresh pastries"
    },
    {
      src: "https://jukeboxy-media.s3.amazonaws.com/blog/wp-content/uploads/2022/02/19102049/coffee-shops-music-provider.jpg",
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

