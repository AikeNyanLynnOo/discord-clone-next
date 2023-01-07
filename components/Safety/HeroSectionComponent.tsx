import { HeroSectionCard } from "./HeroSectionCardComponent";
import { HERO_CARD_CONTENTS } from "../shared/env";

export const HeroSection = () => {
  return (
    <div
      className={`w-100 mt-20 h-auto bg-[#5865F2] flex justify-between items-center`}
    >
      <div className="flex-1 py-20 pl-10 lg:pl-24">
        <h1 className="mb-7 x-large-font font-light text-white w-11/12 lg:px-0 text-4xl sm:text-5xl md:text-6xl text-left">
          DISCORD SAFETY CENTER
        </h1>
        {HERO_CARD_CONTENTS.map((content, index) => (
          <HeroSectionCard content={content} key={index}/>
        ))}
      </div>
      <div className="hidden lg:flex h-screen flex-1 items-center">
        <img src="/images/safety_hero.svg" className="mx-auto h-4/6" />
      </div>
    </div>
  );
};
