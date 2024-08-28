import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface TertiaryButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}
const TertiaryButton: React.FC<TertiaryButtonProps> = ({
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
        "flex items-center gap-1 rounded-[8px] bg-tertiary px-[16px] py-[12px] align-middle text-[15px] font-medium leading-[20px] text-primary",
      )}
    >
      {icon && icon} {label}
    </Link>
  );
};

export default TertiaryButton;
