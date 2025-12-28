import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/config";

export function Hero() {
  return (
    <section id="home" className="w-full bg-background py-10 md:py-16">
      <div className="container px-6 text-center">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary md:text-7xl">
          DAZZLE WITH PERSONAL TOUCH
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
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
