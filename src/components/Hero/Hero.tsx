'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const FRAME = {
  rate: 30,
  total: 70,
  scrollPerFrame: 40,
};

const STEPS = [
  '☀️',
  '여름',
  '🎹',
  '하지',
  '☀️여름 🎹하지',
  '🏖️ MIDNIGHT',
  '🎏 SUMMER FESTIVAL',
  '✨ 지은진',
  '🌊🐦 물수제비',
  '👘🤯 버르장머리',
  '🎉 2023.06.24',
];

const Hero = () => {
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    stepRefs.current.forEach((step, i) => {
      gsap.fromTo(
        step,
        { autoAlpha: 0 },
        {
          scrollTrigger: {
            trigger: step,
            start: '-=100 center',
            end: '+=200 center',
            scrub: true,
            toggleActions: 'play none none reverse', // This line controls the fade in and out
          },
          autoAlpha: 1,
          duration: 2,
        }
      );
    });
  }, []);

  return <section className="w-screen"></section>;
};

export default Hero;
