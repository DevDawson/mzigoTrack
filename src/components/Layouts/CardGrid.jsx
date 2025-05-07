import React from 'react';
import Card from '../Card';

import img11 from '../../assets/imgs/2.jpg'
import img12 from '../../assets/imgs/3.jpg'
import img13 from '../../assets/imgs/4.jpg'

const CardGrid = () => {
  const cardData = [
    {
      image: img12,
      title: 'Fast Delivery',
      description: 'Get your parcels delivered in record time with our express service.',
    },
    {
      image: img11,
      title: 'Track Anytime',
      description: 'Stay updated 24/7 with real-time tracking of your shipments.',
    },
    {
      image: img13,
      title: 'Secure Handling',
      description: 'Your packages are in safe hands from start to finish.',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
