"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TwistingRibbon } from "../components/TwistingRibbon";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial load animation using timeline
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    ).fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.6'
    );
  }, []);

  // Function to make the image move with the mouse (disabled on mobile for responsiveness protection)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPos = (clientX / innerWidth - 0.5) * 20; 
    const yPos = (clientY / innerHeight - 0.5) * 20;

    if (imgRef.current) {
      gsap.to(imgRef.current, {
        x: xPos,
        y: yPos,
        duration: 0.5,
        ease: 'power1.out',
      });
    }
  };

  // Return the image to its original position when the mouse leaves
  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  };

  return (
    <section 
      id="Home" 
      ref={heroRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen py-24 lg:py-0 bg-gray-950 flex flex-col lg:flex-row items-center justify-center lg:justify-around px-4 sm:px-8 overflow-hidden transition-colors"
    >
      {/* 1.(Twisting Ribbon Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <TwistingRibbon 
          waveSpeed={0.015}     
          waveAmplitude={1.2}   
          twistCycles={5}       
        />
      </div>

      {/* 2. Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-[1]"></div>

      {/* 3. Animated background neon lights to give a 3D depth effect */}
      <div className="absolute top-1/4 left-1/3 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-pink-600/20 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none z-[1]"></div>
      <div className="absolute top-1/3 right-1/4 w-60 sm:w-[350px] h-60 sm:h-[350px] bg-purple-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-[1]"></div>

      {/* Texts */}
      <div ref={textRef} className="max-w-xl z-10 text-center lg:text-left mt-8 lg:mt-0">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
          ✨ Future Of Sneakers V1.0
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Step Into <br />
          <span className="text-3xl sm:text-5xl md:text-6xl text-white">The Metaverse</span>
        </h1>
        
        <p className="mt-6 text-gray-400 text-sm sm:text-base text-center lg:text-justify leading-relaxed max-w-md mx-auto lg:mx-0">
          Embark on an extraordinary shopping experience blending future fashion with ultimate comfort. Exclusive designs inspired by virtual reality worlds for your boldest steps.
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          <a
            href="#Products"
            className="inline-flex items-center px-8 py-4 rounded-xl text-white font-bold bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg shadow-pink-600/30 hover:scale-105 hover:shadow-pink-600/50 transition transform duration-300"
          >
            SHOP NOW <i className="fa-solid fa-chevron-right ml-2"></i>
          </a>
        </div>
      </div>

      {/* Displaying the image with its kinetic interaction and GSAP */}
      <div ref={imgRef} className="w-full lg:w-[500px] mt-12 lg:mt-0 flex justify-center z-10 relative">
        {/* Lighting ring under the shoe */}
        <div className="absolute w-56 sm:w-64 h-56 sm:h-64 bg-pink-600/25 rounded-full blur-3xl bottom-0 pointer-events-none"></div>

        <img 
          src="/image/shoes.png" 
          alt="Nike Shoe" 
          className="w-4/5 sm:w-full max-w-[320px] sm:max-w-[450px] object-contain drop-shadow-[0_20px_30px_rgba(219,39,119,0.35)] filter brightness-105 relative z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;