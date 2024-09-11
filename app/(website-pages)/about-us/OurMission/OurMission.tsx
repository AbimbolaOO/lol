import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="grid h-fit w-full *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="w-ful relative h-full overflow-hidden">
        <Image
          src="/static/img/bike-left.png"
          fill
          priority
          alt="background image"
          className="object-contain object-top"
        />
      </div>

      {/* Foreground content */}
      <div className="mx-20 mt-[170px] grid grid-cols-2 gap-[117px]">
        {/* <div className="z-10 flex flex-col gap-[110px] pb-[150px] pt-[111px]"> */}
        {/* Left image part */}
        <div className="relative">
          <Image
            src={`/static/img/darum-world.png`}
            //   layout="responsive"
            width={600}
            height={600}
            alt={`hero image a`}
            className="ml-auto object-contain"
          />
        </div>
        {/* Right text part */}
        <div className="flex flex-col gap-[30px]">
          {/* Top text */}
          <div className="flex flex-col gap-[22px]">
            <div className="text-6xl font-bold leading-[100px]">
              Our{" "}
              <span className="bg-digital-brush-image bg-digital-star-image relative font-extrabold text-primary">
                Mission
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[30px] font-bold leading-[50px] text-primary">
                Crafting Logistics Solutions for a Connected Economy.
              </div>
              <div className="text-xl leading-[35px] text-hero-black">
                Our mission is to empower logistics businesses with affordable,
                tech-driven solutions in creating a responsive value chain
                across all sectors of the economy
              </div>
            </div>
          </div>
          {/* Bottom text */}
          <div className="flex flex-col gap-[22px]">
            <div className="text-6xl font-bold leading-[100px]">
              The <span className="font-extrabold text-primary">Vision</span>
            </div>
            <div>
              Our vision is to connect businesses at a local, regional and
              global scale with affordable, efficient and dynamic logistics
              solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
