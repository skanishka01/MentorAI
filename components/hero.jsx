"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {

    const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="z-50 w-full pt-36 md:pt-48 pb-8" >
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto text-white my">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">Welcome to MentorAI</h1>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl gradient-title animate-gradient">
            Your AI Career Coach for Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4 ">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0 ">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/k-banner.jpg"  
              width={1100}
              height={500}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl  mx-auto border-2"
              priority
            />
          </div>
        </div>
       </div>
    </section>
  )
}

export default HeroSection
