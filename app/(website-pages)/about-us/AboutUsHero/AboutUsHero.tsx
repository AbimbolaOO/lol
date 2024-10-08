import Image from 'next/image';
import React from 'react';

const gridOneImg = [
  "three-darum-men.png",
  "stima-boda.png",
  "two-darum-men.png",
];
const gridTwoImg = [
  "darum-mic-lady.png",
  "darum-family.png",
  "darum-ceo-in-box.png",
];

const AboutUsHero = () => {
  return (
    <div className="h- grid grid-cols-2 gap-[75px] bg-hero-black px-20 text-white">
      {/* Left text  */}
      <div className="self-center">
        <div className="text-xl font-bold leading-[35px]">Here at Darum</div>
        <div className="flex flex-col gap-[44px]">
          <div className="max-w-[900px] text-6xl font-bold leading-[100px]">
            We are Invested in your Logistics Business{" "}
            <span className="bg-text-zig-image relative font-extrabold text-primary">
              Growth
            </span>
          </div>
          <div className="text-xl font-normal leading-[35px] text-darum-accent">
            Our goal is to empower you with the insights and expertise needed to
            make strategic decisions and drive expansion.
          </div>
        </div>
      </div>

      {/* right image grid */}
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="relative flex flex-col gap-[30px]">
          {gridOneImg.map((img, index) => (
            <Image
              key={index}
              src={`/static/img/${img}`}
              width={300}
              height={225}
              priority
              alt={`hero image a`}
              className="h-[auto] w-[300px] object-contain"
            />
          ))}
        </div>

        <div className="relative flex flex-col gap-[30px]">
          {gridTwoImg.map((img, index) => (
            <Image
              key={index}
              src={`/static/img/${img}`}
              width={300}
              height={225}
              priority
              alt={`hero image a`}
              className="h-[auto] w-[300px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
