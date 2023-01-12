export const HeroSection = () => {
  return (
    <div className="h-screen mb-36">
      <div className="h-2/3 bg-[#404EED] mt-20 pt-10">
        <img
          src="/images/blog_hero.png"
          className="rounded-lg w-11/12 mx-auto"
        />
      </div>
      <div className="h-12/ x-large-font mt-40 mb-36 px-14">
        <h2 className="text-[#6874F3] font-bold my-3">COMMUNITY</h2>
        <p className="font-bold text-5xl">
          WHAT WE DID DURING SNOWSGIVING 2022
        </p>
      </div>
    </div>
  );
};
