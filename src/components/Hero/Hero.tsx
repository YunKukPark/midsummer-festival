'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import css from './Hero.module.css';
import { dohyeon } from '@/app/fonts';

gsap.registerPlugin(ScrollTrigger);

const FRAME = {
  rate: 30,
  total: 70,
  scrollPerFrame: 40,
};

const SCENE_INCLUSIVE_RANGE = [1, 2071];

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  const scrollHeight = FRAME.total * FRAME.scrollPerFrame;

  const setCurrentImage = () => {
    if (!imageRef.current) return;

    const t = gsap.to(imageRef.current, {
      attr: {
        src: `/assets/images/scene${FRAME.total
          .toString()
          .padStart(5, '0')}.jpeg`,
      },

      scrollTrigger: {
        trigger: '.video-wrapper',
        start: 'top top',
        end: () => `+=${scrollHeight}`,
        scrub: true, // 스크롤 위치에 따라 애니메이션 진행률이 실시간으로 업데이트됨
        onUpdate: self => {
          const [min, max] = SCENE_INCLUSIVE_RANGE;
          const progress = Math.round(self.progress * FRAME.total);
          const currentSequence = Math.floor(progress * FRAME.rate + 1);

          if (currentSequence <= min || currentSequence >= max) return;

          imageRef.current!.src = `/assets/images/scene${currentSequence
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

  const onErrorImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const [, max] = SCENE_INCLUSIVE_RANGE;
    e.currentTarget.onerror = null;
    e.currentTarget.src = `/assets/images/scene${max
      .toString()
      .padStart(5, '0')}.jpeg`;
  };

  useEffect(setCurrentImage, [scrollHeight]);
  useEffect(() => {
    stepRefs.current.forEach((step, i) => {
      gsap.fromTo(
        step,
        { autoAlpha: 0 },
        {
          scrollTrigger: {
            trigger: step,
            start: '-=100 center',
            end: '+=500',
            scrub: true,
            toggleActions: 'play none none reverse', // This line controls the fade in and out
          },
          autoAlpha: 1,
          duration: 0.5,
        }
      );
    });
  }, []);

  return (
    <section className="w-screen relative">
      <div className={`${css.wrapper} video-wrapper sticky top-[88px]`}>
        {/* <canvas id="video-canvas" width={1920} height={1080} ref={canvasRef} /> */}
        {/* TODO: 이미지 최적화 */}
        <img
          ref={imageRef}
          width={1920}
          height={1080}
          src="/assets/images/scene00001.jpeg"
          alt="hero"
          className="landing_vid object-cover w-full h-full"
          onError={onErrorImage}
        />
      </div>
      {/* TODO: component 분리 */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-16">
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
      <div style={{ height: scrollHeight }} />
    </section>
  );
};

export default Hero;
