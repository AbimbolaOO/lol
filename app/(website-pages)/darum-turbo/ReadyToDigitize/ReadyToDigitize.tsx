import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SecondaryButton from '@/components/Button/SecondaryButton';

const ReadyToDigitize = () => {
  return (
    <div className="grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative -z-10 h-full w-full">
        <Image
          src="/static/img/bike-left-steep.png"
          alt="background image"
          fill
          priority
          className="object-contain object-top"
        />
      </div>

      {/* Foreground content */}
      <div className="mt-[181px] grid grid-rows-2">
        <div className="z-10 col-span-1 col-start-1 row-span-2 row-start-1 mx-20 flex flex-col gap-5 rounded-[50px] bg-bg-gradient px-[190px] py-[89px] text-white">
          <div className="z-10 mx-auto text-center text-[40px] font-bold leading-[70px]">
            Ready to digitize your logistics operations?
          </div>
          <div className="max-w-[850px] text-center text-xl leading-[35px]">
            Power your fleets, manage drivers and plan efficient routes with
            Darum Captain. Our lightweight solution helps Fleet Operators with
            end-to-end visibility on the last mile delivery process.{" "}
            <Link
              href="/learn-more"
              className="font-bold underline underline-offset-4"
            >
              View Pricing
            </Link>
          </div>
          <div className="flex items-center justify-center gap-3 pt-[23px]">
            <SecondaryButton
              href="http://lol"
              label="Start your 2-week Trial"
            />
            <SecondaryButton href="http://lol" label="Book Demo" />
          </div>
        </div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-2 h-full w-full bg-ft-black"></div>
        <div></div>
      </div>
    </div>
  );
};

export default ReadyToDigitize;
