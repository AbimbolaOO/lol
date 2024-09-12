import Image from 'next/image';

import SecondaryButton from '../Button/SecondaryButton';
import TertiaryButton from '../Button/TertiaryButton';
import CircularBigTurboIcon from '../Icons/CircularBigTurboIcon';
import CircularLocationIcon from '../Icons/CircularLocationIcon';
import TurboIcon from '../Icons/TurboIcon';
import TurboInlineIcon from '../Icons/TurboInlineIcon';

interface MorphingCardProps {
  rightTitle: React.ReactNode;
  rightDescription: string;
  rightBtnIcon: React.ReactNode;
  rightBtnText: string;
  rightBtnLink: string;
  rightImg: string;
  rightImgWidth: number;
  rightImgHeight: number;
}

const MorphingCard: React.FC<MorphingCardProps> = ({
  rightTitle,
  rightDescription,
  rightBtnIcon,
  rightBtnLink,
  rightBtnText,
  rightImg,
  rightImgWidth,
  rightImgHeight,
}) => {
  return (
    <div className="flex gap-20">
      {/* First Card */}
      <div className="group flex basis-1/2 flex-col justify-between overflow-hidden rounded-[24px] bg-primary p-10 py-[50px] transition-all duration-1000 hover:basis-3/4">
        {/* Header and Icon*/}
        <div className="flex items-center gap-[23px]">
          <div className="h-fit w-fit transition-all duration-1000 group-hover:rotate-45">
            <CircularBigTurboIcon />
          </div>
          <div className="text-xl leading-[35px] text-white">
            Supercharge your Logistics
          </div>
        </div>
        {/* Content */}
        <div className="relative flex h-[284px] flex-col">
          <div className="flex translate-y-[120px] text-6xl font-extrabold leading-[100px] text-white transition-all duration-1000 group-hover:translate-y-[0px]">
            {/* <div className="flex"> */}
            Darum T
            <TurboInlineIcon className="-mx-3 -ml-5 mt-4 self-center p-0" />
            rbo
          </div>
          <div className="mb-[30px] translate-y-[200px] text-[20px] leading-[35px] text-white opacity-0 transition-all duration-1000 group-hover:translate-y-[0px] group-hover:opacity-100">
            Streamline your workflows with digital process optimization.
            Automate manual processes with digital solutions, unlocking
            real-time visibility and control.
          </div>
          <TertiaryButton
            label="Try Turbo"
            href="/turbo"
            className="absolute bottom-0 w-fit self-start bg-darum-accent"
            icon={<TurboIcon />}
          />
        </div>
      </div>
      {/* Second Card */}
      <div className="group relative flex basis-1/2 flex-col gap-5 overflow-hidden rounded-[24px] bg-tx-blue p-10 py-[50px] transition-all duration-1000 hover:basis-3/4">
        {/* Header Image*/}
        <div className="relative flex justify-center rounded-2xl bg-[#EFF4FE] pt-[34px]">
          <Image
            src={`/static/img/${rightImg}.png`}
            // fill
            // layout="responsive"
            width={rightImgWidth}
            height={rightImgHeight}
            className="object-contain object-bottom"
            alt="dispatcher image "
          />
        </div>
        {/* Content */}
        <div className="grid grid-cols-[340px,260px] items-center gap-[21px]">
          <div className="text-[40px] font-bold leading-[56px] text-white">
            {rightTitle}
          </div>
          <div className="translate-x-[300px] text-[20px] leading-[35px] text-white opacity-0 duration-1000 group-hover:translate-x-0 group-hover:opacity-100">
            {rightDescription}
          </div>
        </div>
        <SecondaryButton
          label={rightBtnText}
          href={rightBtnLink}
          bgColor="bg-white-blue-accent"
          textColor="text-tx-blue"
          icon={rightBtnIcon}
        />
        {/* <div className="relative h-fit w-fit bg-red-500 group-hover:rotate-45"> */}
        <CircularLocationIcon className="absolute bottom-[50px] right-10 duration-1000 group-hover:-rotate-[60deg]" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default MorphingCard;
