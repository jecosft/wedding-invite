import React from 'react';
const bgUrl = process.env.PUBLIC_URL +'/fon1.jpg';
export default function InviteText() {
  return (
    <section className="w-full max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md animate-fade-in flex flex-col items-center">
      <h2 className="font-cursive text-2xl md:text-3xl text-gray-800 mb-2">Дорогой гость!</h2>
      <p className="text-center text-gray-700 mb-4 font-sans">
        Мы рады сообщить Вам, что <b>20.08.2025 в 18:00</b> состоится самое главное торжество в нашей жизни — день нашей свадьбы!<br />
        Приглашаем Вас разделить с нами радость этого незабываемого дня.<br />
      </p>
      <div className="flex flex-col items-center">
        <img
          src={bgUrl}
          alt="Жених и невеста"
          className="w-43 h-43  object-cover border-4 border-white shadow"
        />
        <span className="font-cursive text-lg mt-2">Жених и невеста</span>
      </div>
      <p className="text-center italic text-gray-600 font-sans mb-2">Там, где посеяна любовь, растёт радость!</p>
    </section>
  );
} 