import React, { useEffect, useState } from 'react';

const weddingDate = new Date('2024-08-12T16:00:00+03:00');

function getTimeLeft() {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="w-full flex justify-center mt-6 animate-fade-in">
      <div className="flex space-x-4 bg-white bg-opacity-80 rounded-lg shadow px-6 py-3 text-center">
        <div>
          <div className="text-2xl font-bold text-pink-700">{timeLeft.days}</div>
          <div className="text-xs text-gray-600">дней</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-pink-700">{timeLeft.hours}</div>
          <div className="text-xs text-gray-600">часов</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-pink-700">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-600">минут</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-pink-700">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-600">секунд</div>
        </div>
      </div>
    </div>
  );
} 