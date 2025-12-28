"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/config";
import { Logo } from "@/components/dazz-logo";

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="#home" className="flex items-center space-x-2">
          <Logo className="h-8 w-24" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex ml-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden sm:flex" variant="outline">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </a>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <Link href="#home" className="mb-8" onClick={() => setSheetOpen(false)}>
                <Logo className="h-8 w-24" />
              </Link>
              <nav className="flex flex-col items-start gap-6 text-lg font-medium">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild size="lg" className="mt-8 w-full" variant="secondary">
                 <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                 </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
