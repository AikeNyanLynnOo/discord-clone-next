import HeroStyles from "../../styles/HeroSection.module.css";
import { Card } from "./CardComponent";
import { CardContents } from "./CardComponent";

const basicCardContents = [
  {
    imgSrc: "up.svg",
    textContent: "50MB uploads",
  },
  {
    imgSrc: "smile.svg",
    textContent: "Custom emoji anywhere",
  },
  {
    imgSrc: "nitro_vector.svg",
    textContent: "Special Nitro badge on your profile",
  },
];
const specialCardContents = [
  {
    imgSrc: "up.svg",
    textContent: "500MB uploads",
  },
  {
    imgSrc: "smile.svg",
    textContent: "Custom emoji anywhere",
  },
  {
    imgSrc: "stream.svg",
    textContent: "HD video streaming",
  },
  {
    imgSrc: "rocket.svg",
    textContent: "Access to Activities",
  },
  {
    imgSrc: "server.svg",
    textContent: "2 Server Boosts",
  },
  {
    imgSrc: "profile_card.svg",
    textContent: "Custom profiles and more!",
  },
];

export const HeroSection = () => {
  return (
    <div
      className={`w-100 mb-24 relative top-20 h-screen overflow-x-hidden scrollbar-hide`}
    >
      <div className="absolute px-0 left-1/2 top-10 -translate-x-1/2 md:translate-x-0 md:left-10 md:top-1/3 md:-translate-y-1/2 z-10">
        <h1 className="x-large-font font-light text-white w-100 md:w-1/2 lg:px-0 text-2xl sm:text-5xl">
          Unleash more fun with Nitro
        </h1>
        <p className="text-white w-full md:w-1/2 mt-5 text-lg text-justify">
          Subscribe to Nitro to upgrade your emoji, personalize your profile,
          share bigger files, and so much more.
        </p>
      </div>
      <video
        autoPlay
        loop
        muted
        width="500%"
        className={`${HeroStyles.hero4_bg}`}
      >
        <source src="/videos/nitrobg.mp4" type="video/mp4" />
        <source src="/videos/nitrobg.webm" type="video/webm" />
      </video>
      <div className="absolute overflow-y-visible z-10 bottom-0 block md:flex justify-between w-10/12 left-1/2 -translate-x-1/2 translate-y-1/2">
        <Card
          headerImg="nitro_basic_text.svg"
          cardContents={basicCardContents}
          bgColor={"#077AC6"}
        />
        <Card
          headerImg="nitro_special_text.svg"
          cardContents={specialCardContents}
          bgColor={"#AC45C2"}
        />
      </div>
    </div>
  );
};
