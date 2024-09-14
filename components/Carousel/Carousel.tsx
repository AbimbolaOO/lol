import React from 'react';

interface CarouselIconData {
  icon: React.ReactNode;
  key: string;
}
interface CarouselProps {
  iconData: CarouselIconData[];
}

const Carousel: React.FC<CarouselProps> = ({ iconData }) => {
  return (
    <div className="flex w-full flex-nowrap overflow-hidden py-4">
      <div className="flex animate-scroll items-center *:ml-14">
        {iconData?.map(({ icon, key }: CarouselIconData, index) => (
          <div key={key}>{icon}</div>
        ))}
      </div>
      <div className="flex animate-scroll items-center *:ml-14">
        {iconData?.map(({ icon, key }: CarouselIconData, index) => (
          <div key={key}>{icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
