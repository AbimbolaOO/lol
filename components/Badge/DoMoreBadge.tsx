import Link from "next/link";
import React from "react";

const DoMoreBadge = () => {
  return (
    <section className="px-auto bg-primary-light py-2 text-center font-medium leading-[35px] text-white">
      Do more on every delivery with Darum Captain. A choice app for Fleet
      Operators. Click{" "}
      <Link href="/learn-more" className="underline underline-offset-4">
        here
      </Link>{" "}
      to learn more
    </section>
  );
};

export default DoMoreBadge;
