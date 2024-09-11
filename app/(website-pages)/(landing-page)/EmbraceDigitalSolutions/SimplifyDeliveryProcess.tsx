import Image from "next/image";
import React from "react";

import SecondaryButton from "@/components/Button/SecondaryButton";
import GooglePlayIcon from "@/components/Icons/GooglePlayIcon";

const SimplifyDeliveryProcess = () => {
  return (
    <div className="grid w-full grid-cols-[365px,auto] justify-between rounded-[50px] bg-ft-black px-20 pt-[83px] text-white">
      {/* Left content */}
      <div className="flex flex-col gap-[25px]">
        <div className="text-[40px] font-bold">
          Simplify delivery processes with{" "}
          <span className="italic text-primary">Darum Captain</span>
        </div>
        <p className="text-[20px] font-normal leading-[35px]">
          Track and manage orders in real-time and get the most efficient routes
          for your drivers, reducing fuel costs and increasing productivity.
        </p>
        <div className="flex gap-[30px]">
          <SecondaryButton
            label="Get on Android"
            icon={<GooglePlayIcon />}
            href="android://app-we-come"
            bgColor="bg-button-dark-brown"
          />
          <SecondaryButton
            label="Learn More"
            href="android://app-we-come"
            bgColor="bg-button-dark-brown"
          />
        </div>
      </div>
      {/* Right content */}
      <div className="relative flex h-full">
        <Image
          src="/static/img/darum-captain-large.png"
          alt="captain darum"
          width={667}
          height={550}
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default SimplifyDeliveryProcess;
