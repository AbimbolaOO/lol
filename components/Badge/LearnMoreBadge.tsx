import Link from 'next/link';
import React from 'react';

const LearnMoreBadge = () => {
  return (
    <section className="px-auto bg-primary-light py-2 text-center font-medium leading-[35px] text-white">
      Digitize your logistics operations, unlock insights and optimize order
      fulfillment for business growth with Darum Turbo.{" "}
      <Link href="/learn-more" className="underline underline-offset-4">
        Learn More.
      </Link>
    </section>
  );
};

export default LearnMoreBadge;
