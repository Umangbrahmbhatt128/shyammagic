
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/lovable-uploads/c805365a-c90e-46d8-a819-4b4886b0d115.png",
    alt: "Shyam Joshi with cards",
  },
  {
    src: "/lovable-uploads/9430bb12-e3ec-486b-b456-df8b7c06e14c.png",
    alt: "Shyam Joshi with fire",
  },
  {
    src: "/lovable-uploads/eb93de90-1f18-44e7-bc91-bad19da284fe.png",
    alt: "Shyam Joshi performing",
  },
  {
    src: "/lovable-uploads/1fe77223-60cb-44ff-aea7-8dd3ba048528.png",
    alt: "Shyam performing close-up magic",
  },
  {
    src: "/lovable-uploads/17138352-1d31-4640-bbfc-b7f0b74eb310.png",
    alt: "Card magic performance",
  },
  {
    src: "/lovable-uploads/8c699403-7215-4cc9-993c-12686a2c42d4.png",
    alt: "Card trick with audience",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-magic-dark/95 to-magic-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          Magical <span className="gold-gradient">Moments</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="absolute inset-0 bg-magic-gold/0 group-hover:bg-magic-gold/20 transition-colors duration-300 z-10 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  View
                </span>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center">
            <div className="h-[1px] w-12 bg-magic-gold/40"></div>
            <p className="text-magic-light/60 px-4 text-sm">
              Experience the magic in person
            </p>
            <div className="h-[1px] w-12 bg-magic-gold/40"></div>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-magic-gold"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image large view"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
