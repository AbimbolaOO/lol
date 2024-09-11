import Image from "next/image";
import React from "react";

const DarumCaptainIsBuiltFor = () => {
  return (
    <div className="grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="relative h-full w-full bg-primary">
        <Image
          src="/static/img/scatteredIcons.png"
          alt="background image"
          fill
          priority
        />
      </div>
      {/* Foreground content */}
      <div className="z-10 mx-auto max-w-[1000px] py-[185px] text-center text-[40px] font-bold leading-[85px] text-milky-white">
        <span
          className="animate-textColorCycle"
          style={{ "--animation-delay": `${1}s` } as React.CSSProperties}
        >
          Darum Captain is built for Logistic Managers
        </span>
        ,{" "}
        <span
          className="animate-textColorCycle"
          style={{ "--animation-delay": `${2}s` } as React.CSSProperties}
        >
          Operations Managers
        </span>
        ,{" "}
        <span
          className="animate-textColorCycle"
          style={{ "--animation-delay": `${3}s` } as React.CSSProperties}
        >
          Fleet Managers
        </span>
        ,{" "}
        <span
          className="animate-textColorCycle"
          style={{ "--animation-delay": `${4}s` } as React.CSSProperties}
        >
          Business Owners
        </span>
        , and{" "}
        <span
          className="animate-textColorCycle"
          style={{ "--animation-delay": `${5}s` } as React.CSSProperties}
        >
          Supply Chain Managers
        </span>
        .
      </div>
    </div>
  );
};

export default DarumCaptainIsBuiltFor;
