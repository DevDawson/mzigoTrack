import React from 'react';
import Navbar from '../Navbar';
import CardGrid from './CardGrid';
import ContactUs from '../ContactUs';
import FAQ from '../FAQ';
import WhatWeValue from '../WhatWeValue';

const HomeWrapper = ({ children }) => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="bg-blue-950">
        <Navbar />
      </div>

      <main className="space-y-16">
        <CardGrid />
        <WhatWeValue />
        <FAQ />
        <ContactUs />
        {children}
      </main>
    </div>
  );
};

export default HomeWrapper;
