'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { dohyeon } from '@/app/fonts';
import css from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  '☀️여름 🎹하지',
  '🏖️ MIDNIGHT',
  '🎏 SUMMER',
  '',
  '',
  '✨ 지은진',
  '🌊🐦 물수제비',
  '👘🤯 버르장머리',
  '',
  '',
  '🎉 2023.06.24',
];

const Hero = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const isClient = typeof window !== 'undefined';
  const stepWrapperRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    stepRefs.current.forEach((step, i) => {
      gsap.fromTo(
        step,
        { autoAlpha: 0 },
        {
          scrollTrigger: {
            trigger: step,
            scrub: true,
            toggleActions: 'play none none reverse', // This line controls the fade in and out
          },
          autoAlpha: 1,
          duration: 2,
        }
      );
    });
  }, []);

  const handleResize = () =>
    setScrollHeight(
      (stepWrapperRef.current?.clientHeight ?? 3000) + window.innerHeight
    );

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    // Clean up function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="w-screen">
      <div className={css.videoContainer}>
        <div
          className={css.videoWrapper}
          style={isClient ? { height: scrollHeight } : undefined}
        >
          <video
            className={css.summerFestivalVideo}
            src="./assets/midsummer.mp4"
            autoPlay
            loop
            muted
            controls={false}
            playsInline
          />
          <div className={`${css.stepWrapper} gap-16`} ref={stepWrapperRef}>
            {STEPS.map((step, i) => (
              <h2
                key={step}
                ref={el => (stepRefs.current[i] = el!)}
                className={`${dohyeon.className} ${css.heroText}`}
              >
                {step}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
