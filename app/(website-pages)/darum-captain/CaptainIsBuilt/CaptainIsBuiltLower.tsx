import Image from "next/image";
import React from "react";

import PrimaryButton from "@/components/Button/PrimaryButton";
import TurboInlineIcon from "@/components/Icons/TurboInlineIcon";

const CaptainIsBuiltLower = () => {
  return (
    <div className="m-auto mb-[144px] mt-[40px] flex w-fit flex-col items-center gap-[51px]">
      <div className="relative -ml-[12px] self-start">
        <Image
          src="/static/img/rider-and-trail.png"
          width={500}
          height={402}
          alt="background image"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-[30px]">
        <div className="text-center text-[40px] font-bold leading-[55px]">
          Stay powered up with{" "}
          <span className="text-primary">
            T
            <TurboInlineIcon className="-ml-3 -mr-2 inline-block w-[32px] self-center p-0" />
            rbo
          </span>{" "}
          and <br />
          <span className="text-primary">Captain</span>.
        </div>
        <PrimaryButton
          href="/try-turbo"
          label="View Pricing Plans"
          className="w-fit"
        />
      </div>
    </div>
  );
};

export default CaptainIsBuiltLower;
