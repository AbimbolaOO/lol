import React from 'react';

import BusinessDayIcon from '@/components/Icons/BusinessDayIcon';
import LegitNgIcon from '@/components/Icons/LegitNgIcon';
import ProductHuntIcon from '@/components/Icons/ProductHuntIcon';
import TerminalAfricaIcon from '@/components/Icons/TerminalAfricaIcon';
import TerminalIcon from '@/components/Icons/TerminalIcon';
import VanguardIcon from '@/components/Icons/VanguardIcon';

const WhereToFindDarum = () => {
  return (
    <div className="mb-[170px] mt-[130px] flex flex-col items-center justify-center text-[20px] leading-[35px] text-hero-black">
      <div>The media recognizes our impact on logistics in Africa</div>
      {/* Section Label */}
      <div className="max-w-[1000px] px-28 text-center text-6xl font-bold leading-[100px]">
        Where to find{" "}
        <span className="bg-digital-brush-image bg-digital-star-image relative font-extrabold text-primary">
          Darum
        </span>
      </div>
      <div className="grid grid-flow-col gap-[100px] py-[60px] pt-[100px]">
        <VanguardIcon /> <BusinessDayIcon /> <ProductHuntIcon /> <LegitNgIcon />{" "}
        <TerminalAfricaIcon className="text-black" />
      </div>
    </div>
  );
};

export default WhereToFindDarum;
