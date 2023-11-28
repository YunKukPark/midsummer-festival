'use client';
import { Application } from '@splinetool/runtime';
import { useEffect, useRef } from 'react';

const HeroV2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const aspectRatio = 16 / 9;

  const handleResize = () => {
    const canvas = canvasRef.current!;
    const width = window.innerWidth; // 뷰포트의 전체 너비
    const height = width / aspectRatio; // 16:9 비율로 높이 계산
    canvas.width = width;
    canvas.height = height;
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
