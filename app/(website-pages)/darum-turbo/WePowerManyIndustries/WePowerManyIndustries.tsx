import Image from 'next/image';
import React from 'react';

const WePowerManyIndustries = () => {
  return (
    <div className="my-[150px] flex w-full items-center pl-20">
      <div className="basis-2/5 text-[60px] font-bold leading-[100px]">
        We power many{" "}
        <span className="font-extrabold text-primary">Industries</span>
      </div>
      <div className="relative -ml-[100px] h-[382px] basis-3/5">
        {/* scatter-icons.png */}
        <Image
          src="/static/img/scatter-icons.png"
          alt="background image"
          fill
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default WePowerManyIndustries;
