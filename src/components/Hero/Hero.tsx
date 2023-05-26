'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import css from './Hero.module.css';

const Hero = () => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    console.log(ref.current);
    gsap.registerPlugin(ScrollTrigger);
    ref.current.pause();
    ref.current.currentTime = 0;
    // 📍 pin point
    // ScrollTrigger.create({
    //   trigger: '.video-wrapper',
    //   start: 'top top',
    //   scrub: 0,
    //   pin: true,
    //   onUpdate: self => {
    //     if (!ref.current) return;
    //     ref.current.currentTime =
    //       ref.current!.duration * parseInt(self.progress.toFixed(2));
    //   },
    // });
  }, []);

  return (
    <section className={`${css.wrapper} w-screen`}>
      <div className="video-wrapper">
        <video
          ref={ref}
          className="landing_vid"
          playsInline
          autoPlay
          muted
          loop
          preload="preload"
        >
          <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Hero;
