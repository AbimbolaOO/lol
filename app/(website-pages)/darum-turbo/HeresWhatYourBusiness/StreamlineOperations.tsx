import Image from "next/image";
import React from "react";

import TertiaryButton from "@/components/Button/TertiaryButton";
import TurboInlineIcon from "@/components/Icons/TurboInlineIcon";

const StreamlineOperations = () => {
  return (
    <div className="flex flex-col gap-[140px]">
      <div className="text-center text-[60px] font-bold leading-[100px]">
        Here's what your Business
        <br /> can do with{" "}
        <span className="inline-flex text-primary">
          Darum T
          <TurboInlineIcon className="-mx-3 -ml-5 mt-4 self-center p-0" />
          rbo
        </span>{" "}
      </div>
      <div className="flex flex-col gap-[58px]">
        <div className="mx-[220px] flex gap-[77px]">
          <div className="basis-2/5 text-[40px] font-bold leading-[55px] text-primary">
            Streamline <br />
            Fleet Operations
          </div>
          <div className="flex basis-3/5 flex-col gap-6">
            <div className="text-xl font-normal leading-[35px]">
              Gain real-time fleet performance insights with our user-friendly
              dashboards, designed to keep operators informed and in control.
            </div>
            <TertiaryButton href="ds" label="Learn More" className="w-fit" />
          </div>
        </div>
        <div className="relative h-[521px] w-full">
          <Image
            src="/static/img/dashboard.png"
            alt="dashboard image"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default StreamlineOperations;
