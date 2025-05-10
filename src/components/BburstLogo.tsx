
import React from 'react';
import BubbleRing from './BubbleRing';

const BburstLogo = () => {
  return (
    <div className="text-center mb-4 relative">
      <div className="relative inline-block">
        <BubbleRing />
        <div className="text-5xl font-bold relative z-10">
          <span className="text-bburst-teal">B</span>
          <span className="text-white">burst</span>
        </div>
      </div>
      <div className="text-2xl mt-1 font-medium">
        <span className="text-bburst-teal">Unbabel</span>
        <span className="text-white"> the world</span>
      </div>
    </div>
  );
};

export default BburstLogo;
