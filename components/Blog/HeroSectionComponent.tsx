import HeroStyles from "../../styles/HeroSection.module.css";
// import Image from "next/image";

export const HeroSection = () => {
  return (
    <div
      className={`bg-[#404EED] sm:bg-transparent ${HeroStyles.blog_hero} relative`}
    >
      <div className={`bg-[#404EED] h-2/3 hidden sm:block`}></div>
      <img
        src="/images/blog_hero.png"
        alt="blog_hero"
        className="hidden sm:block rounded-lg w-11/12 h-2/12 absolute top-24 left-1/2 -translate-x-1/2"
      />
      <div
        className={`absolute bottom-1/2 sm:bottom-0 x-large-font left-1/2 w-11/12 -translate-x-1/2 translate-y-1/2`}
      >
        <h2 className="text-white sm:text-[#6874F3] my-3">COMMUNITY</h2>
        <p className="text-xl sm:text-3xl md:text-5xl hover:text-[#6874F3]">
          WHAT WE DID DURING SNOWSGIVING 2022
        </p>
      </div>
    </div>
  );
};
