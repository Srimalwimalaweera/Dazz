"use client";

import { useState, useEffect } from 'react';

const imagesToPreload = [
    "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2Fart%20without%20text.jpg?alt=media&token=a2022d04-c93b-4d75-bbda-e0a29d52fa78",
    "https://firebasestorage.googleapis.com/v0/b/dsw-first.firebasestorage.app/o/images%2F3bxpT69eRnb4NsZR0Al5ZZSV3Ti1%2F1766914907361_Dazz%20Logo.png?alt=media&token=122d6de1-a8ba-4aff-bfe4-d4fcd195edab"
];

function Preloader() {
  return (
    <div className="fixed inset-0 z-[200] flex h-screen w-screen items-center justify-center bg-background">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
}

export function AppWithPreloader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let loadedCount = 0;
        
        const imageLoad = () => {
            loadedCount++;
            if (loadedCount >= imagesToPreload.length) {
                // Add a small delay for a smoother transition
                setTimeout(() => setLoading(false), 500);
            }
        };

        if (imagesToPreload.length === 0) {
            setLoading(false);
            return;
        }

        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = imageLoad;
            img.onerror = imageLoad; // Count error as "loaded" to not block the app
        });

    }, []);

    return (
        <>
            {loading && <Preloader />}
            <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
                {children}
            </div>
        </>
    );
}
