import Link from "next/link";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/dazz-logo";
import { SOCIAL_LINKS, WHATSAPP_LINK, CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/config";
import { Button } from "../ui/button";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.93-2.32-4.42-1.93-6.81.53-3.45 3.11-6.2 6.32-6.76.32-.06.64-.09.96-.09 1.6 0 3.19-.01 4.78-.01s3.19.01 4.78.01c.04 1.38.6 2.73 1.63 3.69 1.02 1.08 2.52 1.57 4 1.68v-4.04c-.45-.02-.9-.1-1.34-.23-.74-.21-1.45-.53-2.09-1.01-.73-.55-1.31-1.25-1.72-2.05-.18-.34-.35-.7-.49-1.07-.01-2.91.01-5.83-.02-8.74Z" />
    </svg>
  );

const socialIcons: { [key: string]: React.ElementType } = {
  Instagram,
  Facebook,
  TikTok: TikTokIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/">
              <Logo className="h-10 w-28" />
            </Link>
            <p className="mt-4 text-sm text-foreground/60">Your Imagination. Printed in Luxury.</p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-primary">Quick Links</h3>
              <nav className="mt-4 flex flex-col space-y-2">
                <Link href="/#services" className="text-foreground/60 hover:text-primary">Services</Link>
                <Link href="/#gallery" className="text-foreground/60 hover:text-primary">Gallery</Link>
                <Link href="/contact" className="text-foreground/60 hover:text-primary">Contact</Link>
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
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-primary">
                      {Icon && <Icon className="h-5 w-5" />}
                      <span className="text-xs font-medium">{social.name}</span>
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
