import Image from 'next/image';
import React from 'react';

import BlinkingText from '@/components/BlinkingText/BlinkingText';

const DarumCaptainIsBuiltFor = () => {
  return (
    <div className="grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative h-full w-full bg-primary">
        <Image
          src="/static/img/circular-icons.png"
          alt="background image"
          fill
          className="object-contain"
        />
        <Image
          src="/static/img/left-side.png"
          alt="background image"
          fill
          className="object-contain object-left-bottom"
        />
        <Image
          src="/static/img/right-side.png"
          alt="background image"
          fill
          className="object-contain object-right-bottom"
        />
      </div>
      {/* Foreground content */}
      <BlinkingText>
        <span>Darum Captain is built for Logistic Managers</span>
        , <br />
        <span>Operations Managers</span>, <span>Fleet Managers</span>,{" "}
        <span>
          Business <br /> Owners
        </span>
        , and <span>Supply Chain Managers</span>.
      </BlinkingText>
    </div>
  );
};

export default DarumCaptainIsBuiltFor;
