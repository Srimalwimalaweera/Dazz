import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getImageById } from "@/lib/placeholder-images";
import { WHATSAPP_LINK } from "@/lib/config";

export function Hero() {
  const heroImage = getImageById("hero-image");

  return (
    <section id="home" className="relative h-screen w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary md:text-7xl">
          DAZZLE WITH PERSONAL TOUCH
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
          From premium mugs to custom t-shirts and magic prints, we bring your vision to life with unparalleled quality.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Start Creating
          </a>
        </Button>
      </div>
    </section>
  );
}
