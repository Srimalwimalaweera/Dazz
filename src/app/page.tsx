import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
