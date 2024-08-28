import React from 'react';

import AdvantageCard from '@/components/Cards/AdvantageCard';

import BePartOfTheAdvantage from './BePartOfTheAdvantage';
import { DarumAdvantages } from './TheDarumAdvantageData';

const TheDarumAdvantage = () => {
  return (
    <div className="flex flex-col items-center gap-[58px] px-20">
      {/* Section Label */}
      <div className="max-w-[1000px] px-28 text-center text-6xl font-bold leading-[100px]">
        The{" "}
        <span className="bg-digital-brush-image bg-digital-star-image relative font-extrabold text-primary">
          Darum
        </span>{" "}
        Advantage
      </div>
      {/* Advantages */}
      <div className="grid grid-cols-3 gap-10 gap-y-[100px] py-20">
        {DarumAdvantages.map((data, index) => (
          <AdvantageCard
            key={index}
            label={data.label}
            icon={data.icon}
            description={data.description}
          />
        ))}
      </div>
      {/* Be part of the advantage */}
      <BePartOfTheAdvantage />
    </div>
  );
};

export default TheDarumAdvantage;
