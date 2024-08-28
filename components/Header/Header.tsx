"use client";

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import PrimaryButton from '../Button/PrimaryButton';
import TertiaryButton from '../Button/TertiaryButton';
import TurboIcon from '../Icons/TurboIcon';
import HeaderDropDown from './HeaderDropDown';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    // { href: "/products", label: "Products" },
    { href: "/about-us", label: "About Us" },
    { href: "/darum-my-business", label: "Darum My Business" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="sticky top-0 z-30 flex flex-col bg-white">
      <div className="flex w-full shrink-0 justify-between px-[80px] py-[20px]">
        <Link href="/" className="flex items-center">
          <Image
            src={"/static/img/darum-logo.png"}
            alt="darum logo"
            width={120}
            height={22}
            className="my-auto cursor-pointer"
            priority
          />
        </Link>
        {/* <HeaderDropDown label="Products" /> */}
        <nav className="flex items-center leading-[20px]">
          <HeaderDropDown label="Products" />
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={clsx(
                pathname.includes(link.href) &&
                  "bg-button-gradient font-medium",
                "flex items-center rounded-[8px] px-[16px] py-[12px] text-[12px]",
              )}
            >
              <div
                className={clsx(
                  pathname.includes(link.href)
                    ? "bg-tx-gradient bg-clip-text text-transparent"
                    : "text-tx-black",
                )}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </nav>

        <div className="flex gap-[12px]">
          <TertiaryButton href="/book-demo" label="Book Demo" />
          <PrimaryButton
            href="/try-turbo"
            label="Try Turbo"
            icon={<TurboIcon />}
          />
        </div>
      </div>
      <div className="h-[1px] w-full bg-border-gradient"></div>
    </div>
  );
}
