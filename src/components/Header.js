import React from 'react';

export default function Header() {
  return (
    <header className="relative w-full min-h-[420px] flex flex-col items-center justify-center pt-8 pb-4 overflow-hidden" >
      {/* Цветочный фон */}
      <div className="z-10 flex flex-col items-center">
        <h1 className="font-cursive text-4xl md:text-5xl text-gray-800 mb-2">Евгений & Евгения</h1>
        <div className="bg-[#f1e9e0] bg-opacity-80 rounded-full px-6 py-2 shadow-md border-2 border-white my-2">
            <p className="font-cursive text-xl md:text-2xl text-[#8d6e63]">
                20 августа 2025
            </p>
        </div>
        <p className="text-base text-gray-700 mb-4 text-center">ПРИГЛАШАЕМ ВАС РАЗДЕЛИТЬ С НАМИ САМЫЙ СЧАСТЛИВЫЙ ДЕНЬ</p>
      </div>
      {/* Декоративные элементы можно добавить позже */}
    </header>
  );
} 