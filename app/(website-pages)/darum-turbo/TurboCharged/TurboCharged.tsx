import Image from "next/image";
import React from "react";

import SecondaryButton from "@/components/Button/SecondaryButton";
import CompassIcon from "@/components/Icons/CompassIcon";
import TurboInlineIcon from "@/components/Icons/TurboInlineIcon";

const TurboCharged = () => {
  return (
    <div className="grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative -z-10 h-full w-full">
        <Image
          src="/static/img/truck-left.png"
          alt="background image"
          fill
          priority
          className="object-contain object-top"
        />
      </div>

      {/* Foreground content */}
      <div className="mt-[228px] flex flex-col items-center justify-center gap-[19px] bg-ft-black pb-[72px] pt-[105px] text-white">
        {/* Section Label */}
        <div className="px-28 text-center text-6xl font-bold leading-[100px]">
          <span className="relative inline-flex font-extrabold text-primary">
            T<TurboInlineIcon className="-mx-3 -ml-5 mt-4 self-center p-0" />
            rb
            <CompassIcon className="mx-1 ml-[2px] mt-4 self-center p-0" />
            -Charged
          </span>{" "}
          to Steer <br /> your very own{" "}
          <span className="bg-fleet relative font-extrabold text-primary">
            Fleet
          </span>
        </div>

        <div className="relative max-w-[700px] pb-3 text-center text-[20px] font-normal leading-[35px]">
          Power your fleets, manage drivers and plan efficient routes with Darum
          Captain. Our lightweight solution helps Fleet Operators with
          end-to-end visibility on the last mile delivery process.
        </div>
        <SecondaryButton
          label="Learn More"
          href="https://our-beta"
          bgColor="bg-button-dark-brown"
        />
      </div>
    </div>
  );
};

export default TurboCharged;
