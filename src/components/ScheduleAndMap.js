import React from 'react';

export default function ScheduleAndMap() {
  return (
    <section className="w-full max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md animate-fade-in">
      <h2 className="font-cursive text-2xl md:text-3xl text-gray-800 mb-4">Место проведения</h2>
      <div className="text-gray-700 font-sans mb-2">Ресторан "Максимыч", г. Тюмень, ул. 50 лет Октября, 52</div>
        <div className="w-full h-64 rounded-lg overflow-hidden border">
          <iframe
            title="Карта свадьбы"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.6214314342724!2d65.58154867799081!3d57.14353397363054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe1362d028e63%3A0xd5c6fa56b31b4568!2z0YPQuy4gNTAg0JvQtdGCINCe0LrRgtGP0LHRgNGPLCA1Miwg0KLRjtC80LXQvdGMLCDQotGO0LzQtdC90YHQutCw0Y8g0L7QsdC7LiwgNjI1MDIz!5e0!3m2!1sru!2sru!4v1750442660994!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      
    </section>
  );
} 