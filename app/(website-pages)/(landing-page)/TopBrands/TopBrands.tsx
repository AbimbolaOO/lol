import React from 'react';

import AdvanclyIcon from '@/components/Icons/AdvanclyIcon';
import ChowdeckIcon from '@/components/Icons/ChowdeckIcon';
import EFTDIcon from '@/components/Icons/EFTDIcon';
import EvercareIcon from '@/components/Icons/EvercareIcon';
import FoodcourtIcon from '@/components/Icons/FoodcourtIcon';
import IleIyanIcon from '@/components/Icons/IleIyanIcon';
import TerminalAfricaIcon from '@/components/Icons/TerminalAfricaIcon';

const TopBrands = () => {
  return (
    <div className="flex w-full flex-col gap-[60px] bg-bg-gradient py-[100px]">
      <div className="text-center text-[40px] font-bold leading-[55px] text-white">
        Top brands use Darum
      </div>
      <div className="flex w-full flex-nowrap overflow-hidden py-4">
        {/* <ShipBubbleIcon /> */}
        <div className="flex animate-scroll *:ml-14">
          <EFTDIcon />
          <IleIyanIcon />
          <TerminalAfricaIcon />
          <EvercareIcon />
          <ChowdeckIcon />
          <FoodcourtIcon />
          <AdvanclyIcon />
        </div>
        <div className="flex animate-scroll *:ml-14">
          <EFTDIcon />
          <IleIyanIcon />
          <TerminalAfricaIcon />
          <EvercareIcon />
          <ChowdeckIcon />
          <FoodcourtIcon />
          <AdvanclyIcon />
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
