import React from 'react';

function generateICS() {
  const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Свадьба Анны и Михаила\nDTSTART:20240812T130000Z\nDTEND:20240812T180000Z\nLOCATION:Ресторан Свадебный, г. Москва, ул. Примерная, 1\nDESCRIPTION:Свадьба Анны и Михаила\nEND:VEVENT\nEND:VCALENDAR`;
  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wedding-invite.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function AddToCalendar() {
  return (
    <div className="w-full flex justify-center my-6 animate-fade-in">
      <button
        onClick={generateICS}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded shadow transition"
      >
        Добавить в календарь
      </button>
    </div>
  );
} 