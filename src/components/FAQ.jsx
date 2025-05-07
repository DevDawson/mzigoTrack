import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const faqData = [
  {
    question: "Ninawezaje kufuatilia mzigo wangu?",
    answer: "Unaweza kufuatilia mzigo wako kwa kuingiza namba ya ufuatiliaji (tracking number) kwenye sehemu ya 'Track Now'.",
  },
  {
    question: "Je, huduma zenu zinapatikana nchi nzima?",
    answer: "Ndiyo, tunahudumia mikoa yote Tanzania kwa usafirishaji wa mizigo kwa haraka na uhakika.",
  },
  {
    question: "Nifanye nini kama mzigo wangu umechelewa?",
    answer: "Tafadhali wasiliana nasi kupitia sehemu ya 'Contact Us' na toa maelezo ya mzigo wako ili tukusaidie haraka iwezekanavyo.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-12 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Maswali Yanayoulizwa Mara kwa Mara
        </h2>

        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-white text-gray-800 font-medium flex justify-between items-center"
            >
              {item.question}
              <span>{activeIndex === index ? (<IoIosArrowDropdownCircle/>): '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-gray-50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
