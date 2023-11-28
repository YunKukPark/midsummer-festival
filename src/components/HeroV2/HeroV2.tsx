'use client';
import { Application } from '@splinetool/runtime';
import { useEffect, useRef } from 'react';

const HeroV2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const aspectRatio = 16 / 9;

  const handleResize = () => {
    const canvas = canvasRef.current!;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < height) {
      // 모바일 환경(세로 모드)일 때 9:16 비율 적용
      const mobileHeight = height * 0.8;
      canvas.width = (mobileHeight * 9) / 16;
      canvas.height = mobileHeight - 150;
    } else {
      // 데스크탑 환경일 때 16:9 비율 적용
      canvas.width = width;
      canvas.height = width / (16 / 9);
    }
  };

  useEffect(() => {
    const app = new Application(canvasRef.current!);
    app.load('https://prod.spline.design/7CA7FOr430dks3mR/scene.splinecode');

    handleResize();
    window.addEventListener('resize', handleResize); // 창 크기 변경 시 리사이즈

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-screen">
      <div
        style={{
          position: 'relative',
          top: 0,
          width: '100%',
          maxHeight: '80vh',
        }}
      >
        <canvas
          className="hero w-screen"
          ref={canvasRef}
          id="canvas3d"
        ></canvas>
      </div>
    </section>
  );
};

export default HeroV2;
