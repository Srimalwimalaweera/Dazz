"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getImageById } from "@/lib/placeholder-images";
import { Coffee, Shirt, Sparkles } from "lucide-react";

const services = [
  {
    id: "service-mug",
    title: "Premium Mugs",
    description: "Sip in style with our high-quality, custom-printed mugs. Perfect for gifts or personal use.",
    icon: Coffee,
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2FDazz%20Mug.mp4?alt=media&token=86b96aa2-596d-4046-9cd5-48c9c21f9c4a"
  },
  {
    id: "service-tshirt",
    title: "Custom T-Shirts",
    description: "Wear your story. We print vibrant designs on comfortable, durable t-shirts.",
    icon: Shirt,
    imageUrls: [
        "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2Fgallery%2FGemini_Generated_Image_av1fwkav1fwkav1f.png?alt=media&token=48efa808-28c3-451d-8de4-0f939b132eaf",
        "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2Fgallery%2FGemini_Generated_Image_qby3ogqby3ogqby3.png?alt=media&token=935d4aab-8def-411b-b730-841ef3636a49"
    ]
  },
  {
    id: "service-magic-print",
    title: "Magic Prints",
    description: "Experience the extraordinary with prints that reveal hidden designs and colors.",
    icon: Sparkles,
  },
];

export function Services() {
    const [tshirtImageIndex, setTshirtImageIndex] = useState(0);
    const tShirtService = services.find(s => s.id === 'service-tshirt');
    const tShirtImageUrls = tShirtService?.imageUrls || [];

    useEffect(() => {
        if (tShirtImageUrls.length > 1) {
            const intervalId = setInterval(() => {
                setTshirtImageIndex(prevIndex => (prevIndex + 1) % tShirtImageUrls.length);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [tShirtImageUrls.length]);

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
            We offer a range of premium printing services to make your ideas tangible.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => {
            const image = service.id !== 'service-tshirt' ? getImageById(service.id) : null;
            const Icon = service.icon;
            
            return (
              <Card
                key={service.id}
                className="group transform overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    {service.videoUrl ? (
                      <video
                        src={service.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-300"
                      />
                    ) : service.id === 'service-tshirt' && service.imageUrls ? (
                        <Image
                            src={service.imageUrls[tshirtImageIndex]}
                            alt={service.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            data-ai-hint="custom t-shirt"
                        />
                    ) : image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8 text-accent"/>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-2 text-base text-foreground/80">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
