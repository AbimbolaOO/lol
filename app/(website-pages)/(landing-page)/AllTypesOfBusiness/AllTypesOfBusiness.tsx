import Image from 'next/image';
import React from 'react';

const AllTypesOfBusiness = () => {
  return (
    <div className="grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative h-full w-full bg-primary">
        <Image
          src="/static/img/scatteredIcons.png"
          alt="background image"
          fill
        />
      </div>
      {/* Foreground content */}
      <div className="z-10 mx-auto flex max-w-[700px] py-[185px] text-center text-[40px] font-bold leading-[65px] text-white">
        All types of businesses use Darum for their Logistics Operations
      </div>
    </div>
  );
};

export default AllTypesOfBusiness;
