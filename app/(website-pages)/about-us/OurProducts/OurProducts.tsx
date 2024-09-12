import React from 'react';

import MorphingCard from '@/components/Cards/MorphingCard';
import GooglePlayIcon from '@/components/Icons/GooglePlayIcon';

const OurProducts = () => {
  return (
    <div className="flex flex-col gap-[90px] px-20 pb-[200px] pt-[70px]">
      <div className="text-center text-6xl font-bold leading-[100px]">
        Our{" "}
        <span className="bg-digital-brush-image bg-digital-star-image relative font-extrabold text-primary">
          Products
        </span>
      </div>
      <MorphingCard
        rightTitle={
          <>
            Simplify delivery processes with{" "}
            <span className="italic">Darum Captain</span>
          </>
        }
        rightDescription="Track and manage orders in real-time and get the most efficient
            routes for your drivers."
        rightBtnLink="/turbo"
        rightBtnText="Get on Android"
        rightBtnIcon={<GooglePlayIcon />}
        rightImg="package-man"
        rightImgWidth={240}
        rightImgHeight={202}
      />
    </div>
  );
};

export default OurProducts;
