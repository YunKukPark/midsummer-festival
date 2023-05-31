import React, { useEffect, useState } from 'react';

const D_DAY = new Date('2023-06-24T00:00:00+09:00');

const CountDown = () => {
  // count down hook 여기서 밖에 사용안해서 굳이 나눌 필요는 없을 듯
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { days, hours, minutes, seconds } = countdown;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = D_DAY.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* @ts-ignore */}
          <span style={{ '--value': days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* @ts-ignore */}
          <span style={{ '--value': hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* @ts-ignore */}
          <span style={{ '--value': minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* @ts-ignore */}
          <span style={{ '--value': seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDown;
