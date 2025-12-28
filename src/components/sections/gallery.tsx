import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-"));

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
            Our Dazzling Creations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
            A glimpse into the custom masterpieces we've brought to life for our clients.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={500}
                height={500}
                className="h-full w-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
               <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
