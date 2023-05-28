'use client';
import React from 'react';
import { Button, Hero } from 'react-daisyui';
import CountDown from './CountDown';

const LinkTree = () => {
  return (
    <Hero
      className="w-screen px-6 py-8"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1200/500')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full flex flex-col gap-4 items-center text-center">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <CountDown />
        <Button color="primary">🎫 티켓 구매하기</Button>
      </div>
    </Hero>
  );
};

export default LinkTree;
