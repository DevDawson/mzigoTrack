import React, { useState } from 'react';
import { MdVerified, MdVisibility, MdSupportAgent } from 'react-icons/md';

const valuesEN = [
  {
    title: 'Reliability',
    description: 'We ensure your parcels are delivered safely and on time, every time.',
    icon: <MdVerified className="text-4xl text-blue-600 mb-2" />,
  },
  {
    title: 'Transparency',
    description: 'We keep you updated every step of the way with real-time tracking.',
    icon: <MdVisibility className="text-4xl text-green-600 mb-2" />,
  },
  {
    title: 'Customer Care',
    description: 'Your satisfaction is our priority. We’re here whenever you need us.',
    icon: <MdSupportAgent className="text-4xl text-purple-600 mb-2" />,
  },
];

const valuesSW = [
  {
    title: 'Uaminifu',
    description: 'Tunahakikisha mizigo yako inafika salama na kwa wakati kila mara.',
    icon: <MdVerified className="text-4xl text-blue-600 mb-2" />,
  },
  {
    title: 'Uwazi',
    description: 'Tunakuarifu kila hatua kwa ufuatiliaji wa moja kwa moja.',
    icon: <MdVisibility className="text-4xl text-green-600 mb-2" />,
  },
  {
    title: 'Huduma kwa Mteja',
    description: 'Kuridhika kwako ni kipaumbele chetu. Tupo kwa ajili yako kila wakati.',
    icon: <MdSupportAgent className="text-4xl text-purple-600 mb-2" />,
  },
];

const WhatWeValue = () => {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => setLang(lang === 'en' ? 'sw' : 'en');

  const values = lang === 'en' ? valuesEN : valuesSW;

  return (
    <div className="py-12 px-4" id="values">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {lang === 'en' ? 'What We Value Most' : 'Tunachothamini Zaidi'}
        </h2>

        <button
          onClick={toggleLanguage}
          className="mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {lang === 'en' ? 'Tafsiri kwa Kiswahili' : 'Translate to English'}
        </button>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                {value.icon}
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeValue;
