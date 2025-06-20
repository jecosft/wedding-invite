import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-700 mt-8 animate-fade-in">
      <div className="font-cursive text-lg mb-1">Контакты организаторов</div>
      <div className="mb-1">Женя: <a href="tel:+79991234567" className="text-pink-700 underline">+7 (982) 905 5979</a></div>
      <div>Женя: <a href="tel:+79997654321" className="text-pink-700 underline">+7 (912) 990 6055</a></div>
      <div className="mt-2 text-xs text-gray-400">&copy; 2025 Женя & Женя | С любовью к гостям</div>
    </footer>
  );
} 