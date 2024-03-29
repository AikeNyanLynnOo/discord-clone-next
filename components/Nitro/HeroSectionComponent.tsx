// import Image from "next/image";

import HeroStyles from "../../styles/HeroSection.module.css";
import { Card } from "./CardComponent";

import { BASIC_CARD_CONTENTS, SPECIAL_CARD_CONTENTS } from "../shared/env";

export const HeroSection = () => {
  return (
    <div className={`w-100 relative top-20 max-h-auto h-screen nitro-mobile`}>
      <div className="w-11/12 text-center md:text-left md:w-auto absolute px-0 left-1/2 top-10 -translate-x-1/2 md:translate-x-0 md:left-24 md:top-1/3 md:-translate-y-1/2 z-10">
        <h1 className="x-large-font font-light text-white w-100 md:w-1/2 lg:px-0 text-2xl sm:text-5xl">
          Unleash more fun with Nitro
        </h1>
        <p className="text-white w-full md:w-1/2 mt-9 md:mt-5 text-lg text-center md:text-justify">
          Subscribe to Nitro to upgrade your emoji, personalize your profile,
          share bigger files, and so much more.
        </p>
      </div>
      <div className="h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className={`hidden md:block ${HeroStyles.hero4_bg}`}
        >
          <source src="/videos/nitrobg.mp4" type="video/mp4" />
          <source src="/videos/nitrobg.webm" type="video/webm" />
        </video>
        <img
          src="/images/stable_robot.png"
          alt="stable_robot"
          className="block md:hidden w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="absolute z-10 bottom-0 block md:flex justify-between w-11/12 md:w-10/12 left-1/2 -translate-x-1/2 translate-y-3/4 md:translate-y-1/2">
        <Card
          headerImg="nitro_basic_text.svg"
          cardContents={BASIC_CARD_CONTENTS}
          cardType={"basic"}
        />
        <Card
          headerImg="nitro_special_text.svg"
          cardContents={SPECIAL_CARD_CONTENTS}
          cardType={"special"}
        />
      </div>
    </div>
  );
};
