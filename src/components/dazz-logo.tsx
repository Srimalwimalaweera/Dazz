import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const logoUrl = "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2F1766914907361_Dazz%20Logo.png?alt=media&token=122d6de1-a8ba-4aff-bfe4-d4fcd195edab";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative h-8 w-auto", className)} {...props}>
      <Image
        src={logoUrl}
        alt="Dazz Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

export function SquareLogo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg bg-primary", className)} {...props}>
        <span className="font-headline text-3xl font-extrabold text-background">D</span>
    </div>
  );
}
