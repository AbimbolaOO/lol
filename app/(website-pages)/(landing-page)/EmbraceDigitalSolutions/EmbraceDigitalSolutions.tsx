import MorphingCard from '@/components/Cards/MorphingCard';

import GrowYourLogisticFleet from './GrowYourLogisticFleet';
import SimplifyDeliveryProcess from './SimplifyDeliveryProcess';

const EmbraceDigitalSolutions = () => {
  return (
    <div>
      {/* Section with px */}
      <div className="flex w-full flex-col items-center justify-center gap-20 px-20 pt-[120px]">
        {/* Section Label */}
        <div className="max-w-[1000px] px-28 text-center text-6xl font-bold leading-[100px]">
          Embrace{" "}
          <span className="bg-digital-brush-image bg-digital-star-image relative font-extrabold text-primary">
            Digital
          </span>{" "}
          Solutions for Business Growth
        </div>
        <MorphingCard
          rightTitle={<>Boost efficiency by leveraging data insights</>}
          rightDescription="Be empowered with data tools that improve logistics workflows and reduce waste."
          rightBtnLink="/turbo"
          rightBtnText="Start 2-week Trial"
          rightBtnIcon={<></>}
          rightImg="wave-dispatcher"
          rightImgWidth={282}
          rightImgHeight={202}
        />
        <SimplifyDeliveryProcess />
      </div>
      <GrowYourLogisticFleet />
    </div>
  );
};

export default EmbraceDigitalSolutions;
