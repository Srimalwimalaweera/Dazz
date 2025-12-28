import Image from "next/image";
import { getImageById } from "@/lib/placeholder-images";
import { Award, Package, Smile } from "lucide-react";

export function Experience() {
  const experienceImage = getImageById("experience-packaging");

  return (
    <section id="experience" className="bg-card py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
              The DAZZ Vibe
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              It's more than just a product; it's an experience. We are obsessed with quality, from the materials we source to the final packaging that arrives at your door.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary/90">Unmatched Quality</h3>
                  <p className="mt-1 text-foreground/60">We use only the finest materials and printing techniques to ensure your designs are vibrant and long-lasting.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary/90">Premium Packaging</h3>
                  <p className="mt-1 text-foreground/60">Every order is carefully packed in our signature boxes, making it perfect for gifting or a special treat for yourself.</p>
                </div>
              </li>
               <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Smile className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary/90">The Unboxing Joy</h3>
                  <p className="mt-1 text-foreground/60">We believe the excitement begins the moment you receive your package. Get ready for a delightful unboxing experience.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            {experienceImage && (
              <Image
                src={experienceImage.imageUrl}
                alt={experienceImage.description}
                width={800}
                height={600}
                className="w-full rounded-lg shadow-2xl shadow-accent/10"
                data-ai-hint={experienceImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
