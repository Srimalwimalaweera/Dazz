import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("font-headline text-3xl font-extrabold tracking-tight text-primary", className)} {...props}>
      DAZZ
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
