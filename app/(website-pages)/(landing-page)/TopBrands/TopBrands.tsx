import Image from 'next/image';
import React from 'react';

import Carousel from '@/components/Carousel/Carousel';
import AdvanclyIcon from '@/components/Icons/AdvanclyIcon';
import ChowdeckIcon from '@/components/Icons/ChowdeckIcon';
import EFTDIcon from '@/components/Icons/EFTDIcon';
import EvercareIcon from '@/components/Icons/EvercareIcon';
import FarmasiIcon from '@/components/Icons/FarmasiIcon';
import FoodcourtIcon from '@/components/Icons/FoodcourtIcon';
import IleIyanIcon from '@/components/Icons/IleIyanIcon';
import MyFoodByHildaIcon from '@/components/Icons/MyFoodByHildaIcon';
import PharmaSolutionsIcon from '@/components/Icons/PharmaSolutionsIcon';
import ShipBubbleIcon from '@/components/Icons/ShipBubbleIcon';
import TerminalAfricaIcon from '@/components/Icons/TerminalAfricaIcon';

const topBrandIcons = [
  <ShipBubbleIcon />,
  <EFTDIcon />,
  <IleIyanIcon />,
  <TerminalAfricaIcon />,
  <EvercareIcon />,
  <ChowdeckIcon />,
  <FoodcourtIcon />,
  <AdvanclyIcon />,
  <PharmaSolutionsIcon />,
  <MyFoodByHildaIcon />,
  <FarmasiIcon />,
];

const TopBrands = () => {
  return (
    <div className="flex w-full flex-col gap-[60px] bg-bg-gradient py-[100px]">
      <div className="text-center text-[40px] font-bold leading-[55px] text-white">
        Top brands use Darum
      </div>
      <Carousel icons={topBrandIcons} />
    </div>
  );
};

export default TopBrands;
