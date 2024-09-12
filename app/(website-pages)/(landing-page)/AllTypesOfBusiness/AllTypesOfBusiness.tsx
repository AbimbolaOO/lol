import Image from "next/image";
import React from "react";

const AllTypesOfBusiness = () => {
  return (
    <div className="grid *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative h-[500px] w-full bg-primary">
        <Image
          src="/static/img/scatteredIcons.png"
          alt="background image"
          fill
          className="object-contain"
        />
      </div>
      {/* Foreground content */}
      <div className="z-10 mx-auto flex py-[185px] text-center text-[40px] font-bold leading-[65px] text-white">
        All types of businesses use Darum <br />
        for their Logistics Operations
      </div>
    </div>
  );
};

export default AllTypesOfBusiness;
