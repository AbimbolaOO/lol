// import Image from "next/image";
import React from "react";

import PrimaryButton from "@/components/Button/PrimaryButton";
import TertiaryButton from "@/components/Button/TertiaryButton";
import TurboIcon from "@/components/Icons/TurboIcon";

const LandingPageHero = () => {
  return (
    <div className="grid h-fit w-full *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="h-full w-full"></div>
      {/* <div className="relative z-20 h-full w-full overflow-hidden">
        <Image
          src="/static/img/bike-left-steep.png"
          fill
          alt="background image"
          className="object-contain object-top"
        />
      </div> */}

      {/* Foreground content */}
      <div className="z-10 flex flex-col items-center gap-[20px] py-[90px] text-center text-hero-black">
        <div className="px-28 text-6xl font-bold leading-[100px]">
          <span className="bg-text-image bg-next-gen-star relative font-extrabold text-primary">
            Next-Gen
          </span>{" "}
          Logistics <br /> Software for a{" "}
          <span className="bg-smarter-star relative font-extrabold text-primary">
            Smarter
          </span>{" "}
          <br />
          Supply Chain
        </div>
        <div className="text-xl font-normal leading-[35px]">
          Darum is powering logistics operations with smart systems, enabling{" "}
          <br />
          <span className="bg-business-star relative">businesses</span> to
          achieve more with less.
        </div>
        <div className="mb-1 mt-3 flex gap-3">
          <TertiaryButton href="/book-demo" label="Book Demo" />
          <PrimaryButton
            href="/try-turbo"
            label="Try Turbo"
            icon={<TurboIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
