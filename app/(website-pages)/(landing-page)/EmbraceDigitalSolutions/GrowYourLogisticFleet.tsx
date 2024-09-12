import Image from "next/image";
import React from "react";

const GrowYourLogisticFleet = () => {
  return (
    <div className="grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative h-full w-full">
        <Image
          src="/static/img/bike-left.png"
          alt="background image"
          fill
          priority
          className="object-contain object-top"
        />
        <Image
          src="/static/img/truck-right.png"
          alt="background image"
          fill
          priority
          className="object-contain object-bottom"
        />
      </div>

      {/* Foreground content */}
      <div className="z-10 flex flex-col gap-10 px-20 py-[180px]">
        <div className="flex items-center gap-[33px] text-[45px] font-extrabold leading-[100px]">
          <div className="rounded-full bg-bg-gradient px-[50px] py-[30px] text-white">
            Grow your Logistic Fleet reach
          </div>
          <div className="font-bold text-primary">With darum turbo</div>
        </div>
        <div className="max-w-[700px] self-center text-center font-normal leading-[35px] text-[20xp] text-hero-black">
          Revolutionize last-mile delivery and courier operations through
          process automation and optimization. 
        </div>
      </div>
    </div>
  );
};

export default GrowYourLogisticFleet;
