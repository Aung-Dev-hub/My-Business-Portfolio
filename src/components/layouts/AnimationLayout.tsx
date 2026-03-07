"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AnimationLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS after the component is mounted in the browser
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true, // Animation runs only once
      anchorPlacement: "top-center", // Position of the animation anchor
    });
  }, []); // Empty dependency array ensures it's only initialized once

  return <>{children}</>;
}