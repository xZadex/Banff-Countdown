import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [targetDate, calculateTimeLeft]);

  return (
    <div className='countdown-container'>
      {timeLeft.days > 0 && <div className='info-cell'><p className='data'>{timeLeft.days}</p><p>DAYS</p></div>}
      <div className='info-cell'><p className='data'>{timeLeft.hours}</p><p>HOURS</p></div>
      <div className='info-cell'><p className='data'>{timeLeft.minutes}</p><p>MINUTES</p></div>
      <div className='info-cell'><p className='data'>{timeLeft.seconds}</p><p>SECONDS</p></div>
    </div>
  );
};

export default Countdown;