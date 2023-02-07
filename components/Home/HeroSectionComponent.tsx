// import Image from "next/image";
import HeroStyles from "../../styles/HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div className={`w-100 ${HeroStyles.height} bg-[#404EED] relative top-20`}>
      <div className="py-14 sm:py-16 lg:py-20 absolute top-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 w-full">
        <h1 className="x-large-font font-light text-white w-full md:w-3/4 lg:w-3/4 mx-0 px-10 lg:mx-auto lg:px-0 text-2xl sm:text-5xl md:text-6xl text-left lg:text-center">
          IMAGINE A PLACE...
        </h1>
        <p className="normal-font text-lg text-white leading-8 py-7 text-left lg:text-center w-full sm:w-7/12 mx-0 px-10 lg:mx-auto lg:px-0">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="hidden sm:block md:flex justify-center w-full lg:w-9/12 mx-0 px-10 lg:mx-auto lg:px-0">
          <button className="px-7 py-4 bg-white text-lg rounded-full flex items-center xs:text-base sm:text-sm md:text-lg">
            <img
              src="/images/download-black.png"
              alt="download-black"
              width="0"
              height="0"
              className=" w-3 h-3 mr-3"
            />
            Download for Linux
          </button>
          <button className="bg-[#36393F] rounded-full mx-0 mt-4 md:mt-0 md:ml-5 px-7 py-4 normal-font text-white xs:text-base sm:text-sm md:text-lg">
            Open Discord in your browser
          </button>
        </div>
      </div>

      <div className={`w-100 ${HeroStyles.height} relative overflow-hidden`}>
        {/* hero bg svgs */}
        <img
          src="/images/herobg_1.svg"
          alt="herobg_1"
          className={`absolute bottom-32 ${HeroStyles.hero1_bg}`}
        />
        <img
          src="/images/herobg_2.svg"
          alt="herobg_2"
          className={`absolute bottom-0 ${HeroStyles.hero2_bg}`}
        />
        <img
          src="/images/herobg_3.svg"
          alt="herobg_3"
          className={`absolute bottom-0 ${HeroStyles.hero3_bg}`}
        />
      </div>
    </div>
  );
};
