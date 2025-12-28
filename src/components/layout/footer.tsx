import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Twitter, MessageCircle } from "lucide-react";
import { Logo } from "@/components/dazz-logo";
import { SOCIAL_LINKS, WHATSAPP_LINK, CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/config";
import { Button } from "../ui/button";

const socialIcons: { [key: string]: React.ElementType } = {
  Instagram,
  Facebook,
  Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="#home">
              <Logo className="h-10 w-28" />
            </Link>
            <p className="mt-4 text-sm text-foreground/60">Your Imagination. Printed in Luxury.</p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-primary">Quick Links</h3>
              <nav className="mt-4 flex flex-col space-y-2">
                <Link href="#services" className="text-foreground/60 hover:text-primary">Services</Link>
                <Link href="#gallery" className="text-foreground/60 hover:text-primary">Gallery</Link>
                <Link href="#contact" className="text-foreground/60 hover:text-primary">Contact</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Contact Us</h3>
              <div className="mt-4 space-y-2 text-foreground/60">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="h-4 w-4" />
                  <span>+{WHATSAPP_NUMBER}</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                {SOCIAL_LINKS.map(social => {
                  const Icon = socialIcons[social.name];
                  return (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-foreground/60 hover:text-primary">
                      {Icon && <Icon className="h-6 w-6" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2025 DAZZ. Crafted in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
