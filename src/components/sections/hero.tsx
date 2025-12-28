import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/config";

export function Hero() {
  const heroImageUrl = "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2Fart.jpg?alt=media&token=a956b6a0-cef4-47a9-a6de-73d445914554";

  return (
    <section 
      id="home" 
      className="relative w-full bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: `url('${heroImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container px-6 text-center">
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
