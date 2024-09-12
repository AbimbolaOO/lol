import Image from 'next/image';
import React from 'react';

import PrimaryButton from '@/components/Button/PrimaryButton';
import TertiaryButton from '@/components/Button/TertiaryButton';
import GooglePlayIcon from '@/components/Icons/GooglePlayIcon';
import TurboIcon from '@/components/Icons/TurboIcon';

const DarumMyBusinessHero = () => {
  return (
    <div className="grid h-fit w-full px-20 *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative -z-10 flex h-full w-full justify-between overflow-hidden">
        <Image
          src="/static/img/left-person-in-black.png"
          width={300}
          height={346}
          priority
          alt="background image"
          className="object-contain object-left-bottom"
        />

        <Image
          src="/static/img/right-person-in-black.png"
          width={562}
          height={388}
          priority
          alt="background image"
          className="object-contain object-right-bottom"
        />
      </div>
      {/* Foreground content */}
      <div className="mx-20 mb-[131px] mt-[170px] flex flex-col items-center gap-12">
        <div className="px-28 text-center text-6xl font-bold leading-[100px]">
          The Ultimate <br /> App for{" "}
          <span className="bg-elements relative font-extrabold text-primary">
            Captains
          </span>
        </div>
        <div className="flex flex-col items-center gap-[50px]">
          <div className="text-center text-xl leading-[35px]">
            Over 300 turbo users rely on Darum Captain in maximizing driver{" "}
            <br />
            potential and building stronger fleets at reduced costs.
          </div>
          <div className="mb-1 mt-3 flex gap-3">
            <PrimaryButton
              href="/try-turbo"
              label="Try Turbo"
              icon={<TurboIcon />}
            />
            <TertiaryButton
              href="/book-demo"
              label="Get on Android"
              icon={<GooglePlayIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarumMyBusinessHero;
