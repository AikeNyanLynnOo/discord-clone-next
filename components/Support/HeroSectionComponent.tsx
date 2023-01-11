export const HeroSection = () => {
  return (
    <div className="support-hero-bg h-[calc(100vh_-_320px)] relative z-0">
      <img
        src="/images/herobg_2.svg"
        className="absolute left-0 bottom-0 md:h-52 lg:h-3/6 2xl:h-2/3"
      />
      <img
        src="/images/herobg_3.svg"
        className="hidden md:block absolute z-0 right-0 bottom-0 md:h-52 lg:h-3/6 2xl:h-2/3"
      />
      <div className="absolute w-11/12 lg:w-7/12 xl:w-5/12 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="large-font pb-9 text-4xl lg:text-5xl font-bold text-white">Help Center</h1>
        <div className="rounded-full flex w-full items-center bg-white px-7 py-2 border border-[#72767D]">
          <img src="/images/search_gray.png" className="h-4 w-4 mr-3" />
          <input placeholder="Search" className="h-full w-full large-font" />
        </div>
      </div>
    </div>
  );
};
