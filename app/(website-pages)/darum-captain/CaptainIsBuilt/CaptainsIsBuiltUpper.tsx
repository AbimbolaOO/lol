import Image from "next/image";
import React from "react";

import { CaptainIsBuiltData } from "./CaptainIsBuiltData";

const CaptainsIsBuiltUpper = () => {
  return (
    <div className="grid h-fit w-full *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative -z-10 h-full w-full overflow-hidden">
        <Image
          src="/static/img/truck-move-left.png"
          fill
          priority
          alt="background image"
          className="object-contain object-bottom"
        />
      </div>
      {/* Foreground content */}
      <div className="mx-20 mb-[283px] mt-[103px] flex flex-col gap-[52px]">
        <div className="text-center text-6xl font-bold leading-[100px]">
          Captain is built to Digitally <br />
          <span className="bg-three-stars relative font-extrabold text-primary">
            Transform{" "}
          </span>
          Logistics Businesses
        </div>
        <div className="grid grid-cols-3 gap-8 *:w-[300px]">
          {CaptainIsBuiltData.map((data, index) => (
            <div
              className="flex flex-col items-center gap-3 px-10 text-center text-xl font-normal leading-[35px]"
              key={index}
            >
              {data.icon}
              <div>{data.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaptainsIsBuiltUpper;
