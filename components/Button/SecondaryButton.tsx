import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface SecondaryButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}
const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  href,
  label,
  icon,
  bgColor = "bg-white-red-accent",
  textColor = "text-primary",
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        bgColor,
        textColor,
        "flex w-fit gap-1 rounded-[8px] px-[16px] py-[12px] align-middle text-[15px] font-medium leading-[20px]",
      )}
    >
      {icon && icon} {label}
    </Link>
  );
};

export default SecondaryButton;
