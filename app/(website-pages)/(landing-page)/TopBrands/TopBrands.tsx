import Image from "next/image";
import React from "react";

import AdvanclyIcon from "@/components/Icons/AdvanclyIcon";
import ChowdeckIcon from "@/components/Icons/ChowdeckIcon";
import EFTDIcon from "@/components/Icons/EFTDIcon";
import EvercareIcon from "@/components/Icons/EvercareIcon";
import FoodcourtIcon from "@/components/Icons/FoodcourtIcon";
import IleIyanIcon from "@/components/Icons/IleIyanIcon";
import ShipBubbleIcon from "@/components/Icons/ShipBubbleIcon";
import TerminalAfricaIcon from "@/components/Icons/TerminalAfricaIcon";

const logos = [
  { imageUrl: "Advancly" },
  { imageUrl: "Chowdeck" },
  { imageUrl: "eftd" },
  { imageUrl: "Foodcourt" },
  { imageUrl: "Ileiyan" },
  { imageUrl: "evercare" },
  { imageUrl: "TERMINAL" },
];

const TopBrands = () => {
  return (
    <div className="flex w-full flex-col gap-[60px] bg-bg-gradient py-[100px]">
      <div className="text-center text-[40px] font-bold leading-[55px] text-white">
        Top brands use Darum
      </div>
      <div className="flex w-full flex-nowrap overflow-hidden py-4">
        {/* <ShipBubbleIcon /> */}
        <div className="flex animate-scroll *:ml-14">
          {/* <div className="grid grid-flow-col place-content-center">
          {logos.map((data) => (
            <div className="relative h-full w-full">
              <Image
                src={`/static/img/${data.imageUrl}.png`}
                // fill
                // layout="intrinsic"
                height={564}
                width={210}
                alt={`hero image a`}
                className="h-[auto] w-[300px] object-contain"
              />
            </div>
          ))} */}
          <ShipBubbleIcon />
          <EFTDIcon />
          <IleIyanIcon />
          <TerminalAfricaIcon />
          <EvercareIcon />
          <ChowdeckIcon />
          <FoodcourtIcon />
          <AdvanclyIcon />
        </div>
        <div className="flex animate-scroll *:ml-14">
          <ShipBubbleIcon />
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
