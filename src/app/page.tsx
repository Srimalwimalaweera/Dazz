import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Gallery } from "@/components/sections/gallery";
import { Footer } from "@/components/layout/footer";
import { FadeInSection } from "@/components/fade-in";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-4 mb-4">
        <Header />
      </div>
      <main className="flex-1">
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <Experience />
        </FadeInSection>
        <FadeInSection>
          <Gallery />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
