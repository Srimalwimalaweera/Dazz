import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/config";
import Image from "next/image";

export function Hero() {
  const heroImageUrl = "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2Fart%20without%20text.jpg?alt=media&token=a2022d04-c93b-4d75-bbda-e0a29d52fa78";
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2F1766914907361_Dazz%20Logo.png?alt=media&token=122d6de1-a8ba-4aff-bfe4-d4fcd195edab";

  return (
    <section 
      id="home" 
      className="relative w-full bg-cover bg-center py-10 md:py-16"
      style={{ backgroundImage: `url('${heroImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container px-6 text-center flex flex-col items-center">
        <Image
          src={logoUrl}
          alt="Dazz Logo"
          width={200}
          height={200}
          className="mb-4 h-24 w-auto md:h-32"
        />
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
