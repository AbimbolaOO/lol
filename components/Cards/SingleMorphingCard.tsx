import TertiaryButton from '../Button/TertiaryButton';
import CircularBigTurboIcon from '../Icons/CircularBigTurboIcon';
import TurboIcon from '../Icons/TurboIcon';
import TurboInlineIcon from '../Icons/TurboInlineIcon';

interface SingleMorphingCardProps {}

const SingleMorphingCard: React.FC<SingleMorphingCardProps> = ({}) => {
  return (
    <div className="bg-silk-white group flex h-[600px] flex-col justify-between overflow-hidden rounded-[24px] p-10 py-[50px] transition-all duration-1000">
      {/* Header and Icon*/}
      <div className="flex items-center gap-[23px]">
        <div className="h-fit w-fit transition-all duration-1000 group-hover:rotate-45">
          <CircularBigTurboIcon />
        </div>
        <div className="text-xl leading-[35px] text-primary">
          Supercharge your Logistics
        </div>
      </div>
      {/* Content */}
      <div className="relative flex h-[284px] flex-col">
        <div className="flex translate-y-[120px] text-6xl font-extrabold leading-[100px] text-primary transition-all duration-1000 group-hover:translate-y-[0px]">
          {/* <div className="flex"> */}
          Darum T
          <TurboInlineIcon className="-mx-3 -ml-5 mt-4 self-center p-0" />
          rbo
        </div>
        <div className="mb-[30px] translate-y-[200px] text-[20px] leading-[35px] text-ft-black opacity-0 transition-all duration-1000 group-hover:translate-y-[0px] group-hover:opacity-100">
          Streamline your workflows with digital process optimization. Automate
          manual processes with digital solutions, unlocking real-time
          visibility and control.
        </div>
        <TertiaryButton
          label="Try Turbo"
          href="/turbo"
          className="absolute bottom-0 w-fit self-start !bg-primary text-white"
          icon={<TurboIcon />}
        />
      </div>
    </div>
  );
};

export default SingleMorphingCard;
