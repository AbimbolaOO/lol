import Image from "next/image";
import React from "react";

import PrimaryButton from "@/components/Button/PrimaryButton";
import TertiaryButton from "@/components/Button/TertiaryButton";

const BePartOfTheAdvantage = () => {
  return (
    <div className="-mx-20 grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative mt-[120px] h-full w-full">
        <Image
          src="/static/img/truck-move-right.png"
          fill
          priority
          alt="background image"
          className="object-contain"
        />
      </div>

      {/* Foreground content */}
      <div className="z-10 flex w-full flex-col gap-5 px-20 py-20 pb-[240px]">
        <div className="text-[20px] leading-[35px]">
          Be part of the Darum Advantage
        </div>
        <div className="flex gap-[63px]">
          <div className="text-[40px] font-bold leading-[65px] text-[#1F0E07]">
            Power-up your logistics operations with Darum and enjoy transparent,
            business-friendly pricing.
          </div>
          <div className="flex gap-10 text-center text-[80px] font-medium *:flex *:flex-col *:items-center *:justify-center *:gap-2 *:rounded-[20px] *:px-[65px] *:py-[56px] *:leading-[110px]">
            <div className="border bg-bg-gradient text-white">
              <div>380+</div>
              <div className="text-[20px] leading-[27px]">
                Logistic Companies
              </div>
            </div>
            <div className="bg-light-gradient h-fit">
              <div>100%</div>
              <div className="text-[20px] leading-[27px]">
                Logistic Companies
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <PrimaryButton
            label="Get Started"
            href="http://getstated"
            className="w-fit"
          />
          <TertiaryButton
            label="View Pricing"
            href="http://getstated"
            className="w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default BePartOfTheAdvantage;
