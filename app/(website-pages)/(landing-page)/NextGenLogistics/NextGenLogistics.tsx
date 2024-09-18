import React from 'react';

import BlinkingText from '@/components/BlinkingText/BlinkingText';
import SecondaryButton from '@/components/Button/SecondaryButton';

const NextGenLogistics = () => {
  return (
    <div className="grid grid-rows-2">
      <div className="z-10 col-span-1 col-start-1 row-span-2 row-start-1 mx-20 rounded-[50px] bg-bg-gradient px-[190px] py-[89px]">
        <BlinkingText classes="!py-0">
          <span
            className="animate-textColorCycle"
            style={{ "--animation-delay": `${1}s` } as React.CSSProperties}
          >
            Next-Gen Logistics Software for
          </span>{" "}
          <br />
          <span
            className="animate-textColorCycle"
            style={{ "--animation-delay": `${2}s` } as React.CSSProperties}
          >
            Fleet Operators
          </span>
          ,{" "}
          <span
            className="animate-textColorCycle"
            style={{ "--animation-delay": `${3}s` } as React.CSSProperties}
          >
            Drivers
          </span>
          ,{" "}
          <span
            className="animate-textColorCycle"
            style={{ "--animation-delay": `${4}s` } as React.CSSProperties}
          >
            Your Customers
          </span>
          .
        </BlinkingText>
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
