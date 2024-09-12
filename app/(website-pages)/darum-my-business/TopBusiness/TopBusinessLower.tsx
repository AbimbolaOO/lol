import Image from "next/image";
import React from "react";

import MorphingCard from "@/components/Cards/MorphingCard";
import GooglePlayIcon from "@/components/Icons/GooglePlayIcon";

const TopBusinessLower = () => {
  return (
    <div className="grid h-fit w-full *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative z-20 h-full w-full overflow-hidden">
        <Image
          src="/static/img/bike-left-steep.png"
          fill
          alt="background image"
          className="object-contain object-top"
        />
      </div>
      {/* Foreground content */}
      <div className="z-40 mb-[250px] mt-[295px] flex px-20">
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
    </div>
  );
};

export default TopBusinessLower;
