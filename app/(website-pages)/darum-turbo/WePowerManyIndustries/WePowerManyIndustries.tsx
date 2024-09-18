import Image from 'next/image';
import React from 'react';

const WePowerManyIndustries = () => {
  return (
    <div className="my-[150px] ml-20 flex w-full items-center">
      <div className="basis-2/6 text-[60px] font-bold leading-[100px]">
        We power many{" "}
        <span className="font-extrabold text-primary">Industries</span>
      </div>
      <div className="relative -ml-[100px] h-[382px] basis-4/6">
        {/* scatter-icons.png */}
        <Image
          src="/static/img/scatter-icons.png"
          alt="background image"
          fill
          priority
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default WePowerManyIndustries;
