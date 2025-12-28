import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/config";
import { Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-card py-20 md:py-32">
      <div className="container mx-auto max-w-3xl px-6">
        <Card className="border-accent/50 shadow-lg shadow-accent/10">
          <CardHeader className="text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
              Have a Project in Mind?
            </h2>
            <CardDescription className="mt-3 text-lg text-foreground/60">
              Let's create something amazing together. Reach out to us!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 pt-2">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <div className="text-center text-foreground/60">
              <p>or email us at</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 font-semibold text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
