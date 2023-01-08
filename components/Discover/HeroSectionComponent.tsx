import HeroStyles from "../../styles/HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div
      className={`relative w-100 mt-20 h-[calc(100vh_-_320px)] bg-blue-200 overflow-hidden`}
    >
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="x-large-font font-light w-full md:w-3/4 mx-0 px-10 lg:mx-auto lg:px-0 text-4xl sm:text-5xl">
          FIND YOUR COMMUNITY ON DISCORD
        </h1>
        <p className="py-5">From gaming, to music, to learning, there's a place for you.</p>
      </div>
      <img
        src="/images/servers_herobg1.svg"
        className={`absolute -mt- top-0 bottom-0 left-0 z-0 ${HeroStyles.servers_bg_1}`}
      />
      <img
        src="/images/servers_herobg2.svg"
        className={`absolute bottom-0 left-0 z-0 ${HeroStyles.servers_bg_2}`}
      />
      <img
        src="/images/servers_herobg3.svg"
        className={`absolute bottom-0 right-0 z-0 ${HeroStyles.servers_bg_3}`}
      />
    </div>
  );
};
