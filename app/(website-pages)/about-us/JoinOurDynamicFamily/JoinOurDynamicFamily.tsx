import React from "react";

import TertiaryButton from "@/components/Button/TertiaryButton";

const JoinOurDynamicFamily = () => {
  return (
    <div className="flex flex-col items-center gap-[50px] bg-hero-black pb-[45px] pt-[58px] text-center text-white">
      <div className="text-6xl font-bold leading-[100px]">
        Join Our Dynamic <br /> <span className="bg-stroke relative">Team</span>{" "}
        <span className="bg-digital-brush-2-star-image relative font-extrabold text-primary">
          Family
        </span>
      </div>
      <div className="flex flex-col items-center gap-[30px]">
        <div className="max-w-[700px] text-xl leading-[35px] text-darum-accent">
          The Darum team is a family of go-getters who work hard to ensure
          quality output in whatever they put their hands towards.
        </div>
        <TertiaryButton
          href="/book-demo"
          label="Book Demo"
          className="w-fit !bg-button-dark-brown"
        />
      </div>
    </div>
  );
};

export default JoinOurDynamicFamily;
