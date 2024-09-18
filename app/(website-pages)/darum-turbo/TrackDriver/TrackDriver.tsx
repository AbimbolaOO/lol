import Image from "next/image";
import React from "react";

import TertiaryButton from "@/components/Button/TertiaryButton";
import GooglePlayIcon from "@/components/Icons/GooglePlayIcon";
import LocationTickerIcon from "@/components/Icons/LocationTickerIcon";

const TrackDriver = () => {
  return (
    <div className="grid h-fit bg-white *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative z-10 flex h-full w-full justify-between">
        <Image
          src="/static/img/s-line.png"
          alt="background image"
          // fill
          width={300}
          height={300}
          className="object-contain object-left-top"
        />
        <Image
          src="/static/img/s-l-line.png"
          alt="background image"
          width={300}
          height={300}
          className="object-contain object-right-bottom"
        />
      </div>

      {/* Foreground content */}
      <div className="z-20 flex flex-col items-center justify-center pb-[29px] pt-[120px] text-center">
        <div className="text-[60px] font-bold leading-[100px] text-ft-black">
          <span className="inline-flex">
            Tr
            <LocationTickerIcon className="mx-1 ml-[2px] mt-4 self-center" />
            ck
          </span>{" "}
          Driver Activities in <br />
          Real-Time with{" "}
          <span className="font-extrabold text-primary">Darum Captain</span>
        </div>
        {/* section 2 */}
        <div className="flex flex-col items-center justify-center gap-9 text-ft-black">
          <div className="max-w-[700px] text-xl font-normal leading-[35px]">
            Darum Captain offers real-time insights into driver performance,
            facilitating data-driven decision-making and efficient fleet
            optimization.
          </div>
          <div className="flex gap-3">
            <TertiaryButton
              href="dd"
              label="Get on Android"
              className="w-fit !bg-primary text-white"
              icon={<GooglePlayIcon />}
            />
            <TertiaryButton
              href="dd"
              label="Learn More"
              className="w-fit text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDriver;
