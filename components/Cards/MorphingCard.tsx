import Image from 'next/image';

import SecondaryButton from '../Button/SecondaryButton';
import CircularBigTurboIcon from '../Icons/CircularBigTurboIcon';
import CircularLocationIcon from '../Icons/CircularLocationIcon';
import TurboIcon from '../Icons/TurboIcon';
import TurboInlineIcon from '../Icons/TurboInlineIcon';

const MorphingCard = () => {
  return (
    <div className="flex gap-20">
      {/* First Card */}
      <div className="flex flex-col justify-between rounded-[24px] bg-primary p-10 py-[50px]">
        {/* Header and Icon*/}
        <div className="flex items-center gap-[23px]">
          <CircularBigTurboIcon />
          <div className="text-xl leading-[35px] text-white">
            Supercharge your Logistics
          </div>
        </div>
        {/* Content */}
        <div>
          <div className="flex text-6xl font-extrabold leading-[100px] text-white">
            Darum T
            <TurboInlineIcon className="-mx-3 -ml-5 mt-4 self-center p-0" />
            rbo
          </div>
          <div className="mb-[30px] text-[20px] leading-[35px] text-white">
            Streamline your workflows with digital process optimization.
            Automate manual processes with digital solutions, unlocking
            real-time visibility and control.
          </div>
          <SecondaryButton
            label="Try Turbo"
            href="/turbo"
            icon={<TurboIcon />}
          />
        </div>
      </div>
      {/* Second Card */}
      <div className="relative flex flex-col gap-5 rounded-[24px] bg-tx-blue p-10 py-[50px]">
        {/* Header Image*/}
        <div className="">
          <Image
            src="/static/img/darum-captain-big-logo.png"
            width={420}
            height={236}
            alt="dispatcher image"
          />
        </div>
        {/* Content */}
        <div className="flex items-center gap-[21px]">
          <div className="text-[40px] font-bold leading-[56px] text-white">
            Simplify delivery processes with Darum Captain
          </div>
          <div className="text-[20px] leading-[35px] text-white">
            Track and manage orders in real-time and get the most efficient
            routes for your drivers.
          </div>
        </div>
        <SecondaryButton
          label="Start 2-week Trial"
          href="/turbo"
          bgColor="bg-white-blue-accent"
          textColor="text-tx-blue"
        />
        <CircularLocationIcon className="absolute bottom-[50px] right-10" />
      </div>
    </div>
  );
};

export default MorphingCard;
