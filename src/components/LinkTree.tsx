'use client';
import React from 'react';
import { Button, Hero } from 'react-daisyui';

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
      <Hero.Content className="text-center">
        <div className="w-full">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Button color="primary">🎫 티켓 구매하기</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default LinkTree;
