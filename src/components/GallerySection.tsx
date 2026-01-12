import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroDragonfruit from "@/assets/hero-dragonfruit.jpg";
import healthyFields from "@/assets/healthy-fields.jpg";
import whiteDragonfruit from "@/assets/white-dragonfruit.jpg";
import rubyRedDragonfruit from "@/assets/ruby-red-dragonfruit.jpg";
import plantCuttings from "@/assets/plant-cuttings.jpg";

const galleryImages = [
  {
    src: heroDragonfruit,
    alt: "Fresh dragon fruits harvested from Healthy Fields farm",
    title: "Fresh Harvest",
    category: "Fruit"
  },
  {
    src: healthyFields,
    alt: "Aerial view of dragon fruit plantation in Limpopo",
    title: "Our Farm",
    category: "Farm"
  },
  {
    src: whiteDragonfruit,
    alt: "Sweet African White Thompson dragon fruit variety",
    title: "White Dragon Fruit",
    category: "Fruit"
  },
  {
    src: rubyRedDragonfruit,
    alt: "Ruby Red purple flesh dragon fruit variety",
    title: "Ruby Red Variety",
    category: "Fruit"
  },
  {
    src: plantCuttings,
    alt: "Commercial dragon fruit plant cuttings ready for planting",
    title: "Plant Cuttings",
    category: "Plants"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex = direction === "prev"
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Dragon Fruit in Pictures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our dragon fruit farm, harvesting process, and the beautiful varieties we grow at Healthy Fields.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-primary-foreground/80 text-xs uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
            {selectedImage !== null && (
              <div className="relative">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-xl">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {filteredImages[selectedImage].alt}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
