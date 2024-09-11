import Image from 'next/image';
import React from 'react';

const TopBusinessUpper = () => {
  return (
    <div className="mx-20 mb-[109px] mt-[224px] flex gap-20">
      <div className="text-left text-6xl font-bold leading-[100px]">
        Top Businesses are{" "}
        <span className="font-extrabold text-primary">Powered</span> with{" "}
        <span className="font-extrabold text-primary">Darum Captain</span>{" "}
        <br />
      </div>
      <div className="flex gap-10 *:grid *:h-[300px] *:w-[300px] *:place-content-center *:rounded-[10px] *:bg-white">
        <div className="relative">
          <Image
            src="/static/img/the-good-beach.png"
            width={200}
            height={152}
            alt="background image"
            className="object-contain"
          />
        </div>

        <div className="relative">
          <Image
            src="/static/img/beauty-hut.png"
            width={250}
            height={137}
            alt="background image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBusinessUpper;
