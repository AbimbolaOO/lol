import Image from "next/image";
import React from "react";

const WhatWeValue = () => {
  return (
    <div className="grid h-fit w-full *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative -z-10 h-full w-full">
        <Image
          src="/static/img/bike-left-steep.png"
          fill
          priority
          alt="background image"
          className="object-contain object-top"
        />

        <Image
          src="/static/img/truck-left-less-steep.png"
          fill
          priority
          alt="background image"
          className="object-contain object-bottom"
        />
      </div>
      {/* Foreground content */}
      <div className="mx-20 mb-[228px] mt-[228px] flex flex-col gap-12">
        <div className="flex flex-col">
          <div className="text-xl font-bold leading-[35px]">
            You're in great company
          </div>
          <div className="text-6xl font-bold leading-[100px]">
            What we{" "}
            <span className="bg-digital-brush-image bg-digital-star-image relative font-extrabold text-primary">
              Value
            </span>
          </div>
        </div>
        <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-2 gap-[40px] text-center text-[40px] font-extrabold leading-[55px] text-white *:flex *:h-[400px] *:flex-col *:items-center *:justify-between *:rounded-[20px] *:pt-[60px]">
          <div className="bg-grid-teal">
            <div>Creativity</div>
            <div className="relative w-fit self-end">
              <Image
                src="/static/img/bulb.png"
                // fill
                width={300}
                height={300}
                alt="background image"
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-grid-powder">
            <div className="text-[#5B91F5]">Innovation</div>
            <div className="relative w-fit">
              <Image
                src="/static/img/fresh-guy.png"
                // fill
                width={136}
                height={250}
                alt="background image"
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
          <div className="row-span-2 !h-full bg-primary">
            <div>
              <div className="text-hero-black">Team work</div>
              <div className="pt-[14px] text-[20px] font-semibold leading-[35px]">
                We're here because of You
              </div>
            </div>
            <div className="relative w-fit">
              <Image
                src="/static/img/man-woman.png"
                // fill
                width={378}
                height={600}
                alt="background image"
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
          <div className="bg-hero-black">
            <div>Respect</div>
            <div className="relative w-fit">
              <Image
                src="/static/img/man-woman-hand-hold.png"
                // fill
                width={378}
                height={600}
                alt="background image"
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
          <div className="align-center flex flex-col bg-grid-yellow !pt-0 pb-[50px]">
            <div className="relative w-fit">
              <Image
                src="/static/img/medal.png"
                // fill
                width={300}
                height={300}
                alt="background image"
                className="object-contain object-right-bottom"
              />
            </div>
            <div className="text-[#C76C49]">Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeValue;

// *:pt-[60px]
