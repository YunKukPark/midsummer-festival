'use client';
import React from 'react';
import { Button, Hero } from 'react-daisyui';
import CountDown from './CountDown';

const LinkTree = () => {
  const handleClickBuyTicket = () => {
    window.open('https://forms.gle/e7nsj2fst4uwTHRC9', '_blank');
  };

  return (
    <Hero
      className="w-screen px-6 py-8"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/winter-linktree-bg.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full flex flex-col gap-4 items-center text-center">
        <h1 className="text-2xl font-bold md:text-5xl">👋 Hi, There</h1>
        <CountDown />
        <Button color="primary" onClick={handleClickBuyTicket}>
          🎫 티켓 구매하기
        </Button>
      </div>
    </Hero>
  );
};

export default LinkTree;
