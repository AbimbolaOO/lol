import Image from "next/image";
import React from "react";

const Fleets = () => {
  return (
    <div className="flex flex-col gap-[85px] bg-tertiary px-20 pb-8 pt-[120px]">
      <div className="text-center text-[40px] font-bold">
        Power a vast majority of{" "}
        <span className="bg-two-star relative text-primary">Fleets</span>{" "}
        seamlessly.
      </div>
      <div className="relative z-10 h-[312px] w-full overflow-hidden">
        <Image
          src="/static/img/fleets.png"
          fill
          priority
          alt="background image"
          className="object-contain object-top"
        />
      </div>
    </div>
  );
};

export default Fleets;
