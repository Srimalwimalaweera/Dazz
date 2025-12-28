"use client";

import { useRef, useEffect, useState } from 'react';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeInSection({ children, className }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // No need to unobserve, animation should only happen once
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
}
