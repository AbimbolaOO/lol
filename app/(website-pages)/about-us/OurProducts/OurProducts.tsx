import React from "react";

import MorphingCard from "@/components/Cards/MorphingCard";

const OurProducts = () => {
  return (
    <div className="flex flex-col gap-[90px] px-20 pb-[200px] pt-[70px]">
      <div className="text-center text-6xl font-bold leading-[100px]">
        Our{" "}
        <span className="bg-digital-brush-image bg-digital-star-image relative font-extrabold text-primary">
          Products
        </span>
      </div>
      <MorphingCard />
    </div>
  );
};

export default OurProducts;
