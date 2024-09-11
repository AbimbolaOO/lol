import Image from "next/image";
import React from "react";

import MorphingCard from "@/components/Cards/MorphingCard";

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
      <div className="mb-[250px] mt-[295px] px-20">
        <MorphingCard />
      </div>
    </div>
  );
};

export default TopBusinessLower;
