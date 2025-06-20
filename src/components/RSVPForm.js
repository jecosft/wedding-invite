import React from 'react';

// Замените на свой Google Forms formResponse URL и entry.XXXX для каждого поля
const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfTjdPOIcoXL8BsxlgO4IIxL2mhy6GVvxwv35lzZiJvkgDbhA/formResponse';

export default function RSVPForm() {
  return (
    <section className="w-full max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md animate-fade-in">
      <h2 className="font-cursive text-2xl md:text-3xl text-gray-800 mb-4">Подтверждение присутствия и анкета</h2>
      <form
        action={FORM_ACTION}
        method="POST"
        target="_blank"
        className="space-y-4"
      >
        <div>
          <label className="block mb-1 font-cursive text-gray-800">Имя и Фамилия *</label>
          <input name="entry.1693590417" required className="w-full border rounded px-3 py-2" placeholder="Ваше имя" />
        </div>
        <div>
          <label className="block mb-1 font-cursive text-gray-800">Подтверждение присутствия *</label>
          <div className="flex gap-4 mt-1">
            <label className="inline-flex items-center ">
              <input type="radio" name="entry.1647083699" value="Буду" required className="mr-2" /> Буду
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="entry.1647083699" value="Не смогу" className="mr-2" /> Не смогу
            </label>
          </div>
        </div>
      
        <div>
          <label className="block mb-1 font-cursive text-gray-800">Пожелания по еде</label>
          <input name="entry.1944276027" className="w-full border rounded px-3 py-2" placeholder="Есть ли пожелания по еде?" />
        </div>
        <div>
          <label className="block mb-1 font-cursive text-gray-800">Пожелания по алкоголю</label>
          <input name="entry.293800605" className="w-full border rounded px-3 py-2" placeholder="Что вы предпочитаете?" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Комментарии/пожелания</label>
          <textarea name="entry.1046252953" className="w-full border rounded px-3 py-2" rows={2} />
        </div>
        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition">Отправить</button>
      </form>
    </section>
  );
}