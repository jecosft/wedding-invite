import React from 'react';

export default function Details() {
  return (
    <section className="w-full max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md animate-fade-in">
      <h2 className="font-cursive text-2xl md:text-3xl text-gray-800 mb-4">Пожелания по подаркам</h2>
      <p className="text-gray-700 font-sans mb-4">Ваше присутствие в день нашей свадьбы — самый значимый подарок для нас!</p>
      <p className="text-gray-700 font-sans mb-4">Мы понимаем, что дарить цветы на свадьбу — это традиция, но мы не сможем насладиться их красотой в полной мере...<br />
        Будем рады любой другой альтернативе (вино или денежный эквивалент).</p>
      <p className="text-gray-700 font-sans mb-4">Будем благодарны, если вы воздержитесь от криков "Горько" на празднике, ведь поцелуй — это знак выражения чувств, он не может быть по заказу.</p>
      <p className="text-gray-700 font-sans mb-4">Мы очень старались сделать праздник незабываемым, поэтому будем рады, если вы подтвердите своё присутствие до <b>10.08.2025</b></p>
      <h3 className="font-cursive text-2xl text-pink-700 mt-8 mb-2">Ждём Вас!</h3>
      <p className="text-gray-700 font-sans mb-2">Для нас важно, чтобы вы были рядом, а не в каком вы наряде, поэтому дресс-код: свободный</p>
    </section>
  );
}
