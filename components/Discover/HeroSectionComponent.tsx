import Image from "next/image";
import HeroStyles from "../../styles/HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div
      className={`${HeroStyles.servers_bg_1} relative w-100 mt-20 h-[calc(100vh_-_320px)]`}
    >
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="x-large-font font-light w-full md:w-11/12 mx-0 px-10 lg:mx-auto lg:px-0 text-4xl sm:text-5xl">
          FIND YOUR COMMUNITY ON DISCORD
        </h1>
        <p className="py-5">
          From gaming, to music, to learning, there&apos;s a place for you.
        </p>
      </div>
      <Image
        src="/images/servers_herobg2.svg"
        alt="servers_herobg2"
        className={`hidden md:block absolute bottom-0 left-0 z-0 ${HeroStyles.servers_bg_2}`}
      />
      <Image
        src="/images/servers_herobg3.svg"
        alt="servers_herobg3"
        className={`hidden md:block absolute bottom-0 right-0 z-0 ${HeroStyles.servers_bg_3}`}
      />
    </div>
  );
};
