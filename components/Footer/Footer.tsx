import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import EmailIcon from '../Icons/EmailIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import LocationIcon from '../Icons/LocationIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import XIcon from '../Icons/XIcon';
import FooterForm from './FooterForm';

export default function Footer() {
  return (
    <footer className="bg-ft-black p-20 pb-8 text-white">
      {/* Upper parts */}
      <div className="grid grid-cols-[230px,1fr,238px] justify-between gap-[53px] py-8">
        {/* Darum logo part */}
        <div className="flex flex-col gap-6 py-6">
          <div>
            <Image
              src="/static/img/darum-white-logo.png"
              alt="darum logo"
              width={120}
              height={23}
            />
          </div>
          <div className="font-semibold text-dull-white">
            Smarter logistics. Stronger business
          </div>
          {/* Contact details part */}
          <div className="grid grid-cols-[20px,1fr] items-start gap-2 gap-y-6 leading-[30px]">
            <LocationIcon />
            <div className="-mt-1">23 Hughes Ave, Alagomeji, Yaba, Lagos.</div>
            <EmailIcon />
            <Link href="mailto://info@darum.com.ng" className="-mt-1">
              info@darum.com.ng
            </Link>
            <PhoneIcon />
            <Link href="tel:2348119995541" className="-mt-1">
              0700000DARUM
            </Link>
          </div>
        </div>

        {/* Center part */}
        <div className="grid w-full grid-cols-3 gap-6 pt-5 text-sm">
          {/* Center part first row */}
          <div className="flex flex-col gap-4">
            <div className="border-b-[1px] pb-3 font-bold text-primary">
              COMPANY
            </div>
            <Link href="/about-us">About Us</Link>
            <Link href="/about-us">Pricing</Link>
            <Link href="/about-us">Careers</Link>
          </div>
          {/* Center part second row */}
          <div className="flex flex-col gap-4">
            <div className="border-b-[1px] pb-3 font-bold text-primary">
              PRODUCTS
            </div>
            <Link href="/about-us">Darum Turbo</Link>
            <Link href="/about-us">Darum Captain</Link>
          </div>
          {/* Center part third row */}
          <div className="flex flex-col gap-4">
            <div className="border-b-[1px] pb-3 font-bold text-primary">
              ASK
            </div>
            <Link href="/about-us">FAQs</Link>
            <Link href="/about-us">Support</Link>
          </div>
        </div>

        {/* Contact for part */}
        <div className="flex flex-col gap-10 pt-3">
          <div className="bg-tx-ft-gradient bg-clip-text text-2xl font-bold leading-[40px] text-transparent">
            We will only ever send you cool stuff!
          </div>
          <FooterForm />
        </div>
      </div>
      {/* Lower part */}
      <div className="flex justify-between border-t-[1px] border-b-white pt-[65px]">
        {/* footer label */}
        <div className="flex h-fit text-sm font-normal leading-4">
          <div className="pr-5">&copy; 2024 Mason Atlantic.</div>
          <div className="border-l-[1px] border-r-[1px] border-b-white px-5">
            Privacy Policy
          </div>
          <div className="pl-5">Terms of Use</div>
        </div>
        {/* footer socials */}
        <div className="flex gap-6">
          <Link href="https://darum-com.facebook.ng">
            <FacebookIcon />
          </Link>
          <Link href="https://darum-com.facebook.ng">
            <XIcon />
          </Link>
          <Link href="https://darum-com.facebook.ng">
            <LinkedInIcon />
          </Link>
          <Link href="https://darum-com.facebook.ng">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
