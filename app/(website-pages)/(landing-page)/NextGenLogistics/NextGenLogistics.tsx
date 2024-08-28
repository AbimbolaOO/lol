import React from 'react';

import SecondaryButton from '@/components/Button/SecondaryButton';

const NextGenLogistics = () => {
  return (
    <div className="grid grid-rows-2">
      <div className="z-10 col-span-1 col-start-1 row-span-2 row-start-1 mx-20 rounded-[50px] bg-bg-gradient px-[190px] py-[89px] text-center text-[40px] font-bold leading-[70px] text-white">
        <div>Next-Gen Logistics Software for</div>
        <div className="text-milky-white">
          Fleet Operators, Drivers, Your Customers.
        </div>
        <div className="flex items-center justify-center gap-3 pt-[39px]">
          <SecondaryButton href="http://lol" label="Get Started" />
          <SecondaryButton href="http://lol" label="Book Demo" />
        </div>
      </div>
      <div className="col-span-1 col-start-1 row-span-1 row-start-2 h-full w-full bg-ft-black"></div>
      <div></div>
    </div>
  );
};

export default NextGenLogistics;
