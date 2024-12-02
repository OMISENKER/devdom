"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Projects from "./components/projects";
import SkillsTools from "./components/skills-tools";
import Certificates from "./components/certificates";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0.6,
        rootMargin: "-100px 0px"
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Ensure the page starts at the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      <div className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out will-change-transform pointer-events-none ${scrolled ? 'top-[2.5rem] transform -translate-x-1/2 scale-[0.4] md:scale-[0.25]' : ''}`}>
        <Image
          src="/logos/Logo v6 white.svg"
          alt="DevDom"
          width={800}
          height={200}
          className="aspect-6/1 scale-150 md:scale-100"
          priority
        />
      </div>

      <div ref={heroRef} className="h-screen w-full snap-start flex items-center justify-center">
        <Hero />
      </div>
      
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <AboutMe />
      </section>
      
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <Experience />
      </section>
      
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <Projects />
      </section>
      
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <SkillsTools />
      </section>
      
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <Certificates />
      </section>
    </main>
  );
}
