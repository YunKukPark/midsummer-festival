'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import css from './Hero.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
const NUM_OF_FRAMES = 70;
const STEPS = ['Hello', 'My', 'Name', 'Is', 'Rahul', 'jangid', 'Thanks :)'];

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const scrollHeight = NUM_OF_FRAMES * 1000;

  const onLoadedVideoMetadata = () => {
    if (!imageRef.current) return;

    const t = gsap.to(imageRef.current, {
      attr: {
        src: `/assets/images/scene${NUM_OF_FRAMES.toString().padStart(
          5,
          '0'
        )}.jpeg`,
      },

      scrollTrigger: {
        trigger: '.video-wrapper',
        start: 'top top',
        end: () => `+=${scrollHeight}`,
        scrub: true,
        pin: true,
        onUpdate: self => {
          const frame = Math.round(self.progress * NUM_OF_FRAMES);
          imageRef.current!.src = `/assets/images/scene${frame
            .toString()
            .padStart(5, '0')}.jpeg`;
        },
      },
    });

    // Clean up before unmounting the component/page
    return () => {
      t.kill();
      ScrollTrigger.getAll().forEach(e => e.kill());
    };
  };

  useEffect(onLoadedVideoMetadata, [scrollHeight]);

  return (
    <section className="w-screen relative">
      <div className={`${css.wrapper} video-wrapper sticky top-[88px]`}>
        <Image
          src="/assets/images/scene00001.jpeg"
          alt="hero"
          width={1920}
          height={1080}
          data-speed="0.2"
          className="landing_vid object-cover w-full h-full"
          ref={imageRef}
        />
      </div>
      <div style={{ height: scrollHeight }} />
    </section>
  );
};

export default Hero;
