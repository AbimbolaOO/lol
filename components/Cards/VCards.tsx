import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface VCardsProps {
  label: string;
  description: string;
  img: string;
  classes?: string;
  imgClasses?: string;
  imgBoxClasses?: string;
  width: number;
  height: number;
}

const VCards: React.FC<VCardsProps> = ({
  label,
  description,
  img,
  width,
  height,
  imgClasses,
  imgBoxClasses,
}) => {
  return (
    <div className="flex h-fit flex-col gap-6">
      <div className="text-[40px] font-bold leading-[55px] text-primary">
        {label}
      </div>
      <div className="flex flex-col justify-between gap-9">
        <div className="text-xl leading-[35px]">{description}</div>
        <div
          className={clsx(
            "relative flex h-[559px] w-full items-center justify-center overflow-hidden rounded-[24px]",
            imgBoxClasses,
          )}
        >
          <Image
            src={`/static/img/${img}.png`}
            alt="dashboard image"
            // fill
            width={width}
            height={height}
            className={clsx("object-contain", imgClasses)}
          />
        </div>
      </div>
    </div>
  );
};

export default VCards;
