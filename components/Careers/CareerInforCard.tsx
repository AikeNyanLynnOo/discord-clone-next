import { useState } from "react";
import { CAREER_INFO_CARD_DATA } from "../shared/env";

export const CareerInfoCard = () => {
  const [activeInfo, setActiveInfo] = useState(0);
  return (
    <div className="bg-[#F6F6F6] w-full">
      <div className="py-20 mx-auto px-10 w-11/12">
        <h2 className="font-bold large-font text-xl sm:text-3xl md:text-5xl mb-10">
          Inclusion, Diversity and Purpose at Discord
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="py-0">
            <h3 className="pb-4 font-bold large-font text-lg sm:text-2xl md:text-3xl">
              Belonging from the Inside Out
            </h3>
            <p className="large-font leading-8">
              Our internal programs include but are not limited to unconscious
              bias training, employee resource groups, inclusive hiring
              practices, diversity sourcing strategies, and partnerships with
              high-impact organizations that drive equity. As we build our
              external strategy, we empower our employees to be a force for good
              in the world and support causes they are passionate about.
            </p>
          </div>
          <div className="py-0">
            <h3 className="pb-4 font-bold large-font text-lg sm:text-2xl md:text-3xl">
              Our Employee Resource Groups
            </h3>
            <p className="large-font leading-8">
              Discord's Employee Resource Groups (ERGs) are employee-led
              organizations centered around belonging. Led by our Inclusion,
              Diversity & Purpose team, Discord empowers our ERGs to create an
              inclusive space where members of underrepresented groups and
              allies can come together to celebrate our diverse communities. Our
              ERG leads have 10% allocated work time to help build belonging
              through promoting education and awareness, offering learning
              opportunities, and driving advocacy for their communities in and
              outside of Discord.
            </p>
          </div>
        </div>

        <div className="relative py-20 my-14 bg-white rounded-lg">
          <button
            onClick={() => {
              if (activeInfo > 0) {
                setActiveInfo((prev) => prev--);
              }
              setActiveInfo((prev) => CAREER_INFO_CARD_DATA.length - 1);
            }}
            className="bg-[#EFEFEF] absolute rounded-full h-12 text-center w-12 text-center border border-[#ccc5c5] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/images/career_info_left_arrow.svg"
              className="w-1/2 mx-auto"
            />
          </button>
          <button
            onClick={() => {
              if (activeInfo < CAREER_INFO_CARD_DATA.length - 1) {
                setActiveInfo((prev) => prev++);
              }
              setActiveInfo((prev) => 0);
            }}
            className="bg-[#EFEFEF] absolute rounded-full h-12 text-center w-12 text-center border border-[#ccc5c5] right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/images/career_info_right_arrow.svg"
              className="w-1/2 mx-auto"
            />
          </button>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {CAREER_INFO_CARD_DATA[activeInfo].title}
          </div>
        </div>
      </div>
    </div>
  );
};
