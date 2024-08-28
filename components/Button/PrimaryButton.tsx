import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface PrimaryButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  label,
  icon,
  className,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "flex gap-1 rounded-[8px] bg-primary px-[16px] py-[12px] align-middle text-[15px] font-medium leading-[20px] text-white",
      )}
    >
      {icon && icon} {label}
    </Link>
  );
};

export default PrimaryButton;
