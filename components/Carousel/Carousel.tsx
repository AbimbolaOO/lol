import React from 'react';

interface CarouselProps {
  icons: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ icons }) => {
  return (
    <div className="flex w-full flex-nowrap overflow-hidden py-4">
      <div className="flex animate-scroll items-center *:ml-14">
        {icons?.map((icon: React.ReactNode, index) => (
          <React.Fragment key={index}>{icon}</React.Fragment>
        ))}
      </div>
      <div className="flex animate-scroll items-center *:ml-14">
        {icons?.map((icon: React.ReactNode, index) => (
          <React.Fragment key={index}>{icon}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
