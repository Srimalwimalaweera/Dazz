import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AppWithPreloader } from '@/components/layout/preloader';

export const metadata: Metadata = {
  title: 'Dazz - Premium Custom Prints',
  description: 'Premium Mugs, Custom T-Shirts, and Magic Prints. Your vision, our quality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet" />
        <link rel="preload" href="https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2Fart%20without%20text.jpg?alt=media&token=a2022d04-c93b-4d75-bbda-e0a29d52fa78" as="image" />
        <link rel="preload" href="https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2F1766914907361_Dazz%20Logo.png?alt=media&token=122d6de1-a8ba-4aff-bfe4-d4fcd195edab" as="image" />
      </head>
      <body className="font-body antialiased">
        <AppWithPreloader>
          {children}
        </AppWithPreloader>
        <Toaster />
      </body>
    </html>
  );
}
