import { useState } from "react";
import { CAREER_INFO_CARD_DATA } from "../shared/env";
import { motion } from "framer-motion";
import { containerVariants } from "./MotionVariants";

export const CareerInfoCard = () => {
  const [activeInfo, setActiveInfo] = useState(0);
  return (
    <div className="bg-[#F6F6F6] w-full">
      <div className="py-20 mx-auto px-5 lg:px-10 w-11/12">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visibleSpring"
          className="font-bold large-font text-xl sm:text-3xl md:text-5xl mb-10"
        >
          Inclusion, Diversity and Purpose at Discord
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="py-0">
            <motion.h3
              variants={containerVariants}
              initial="hidden"
              whileInView="visibleSpring"
              className="pb-4 font-bold large-font text-lg sm:text-2xl md:text-3xl"
            >
              Belonging from the Inside Out
            </motion.h3>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="large-font leading-8"
            >
              Our internal programs include but are not limited to unconscious
              bias training, employee resource groups, inclusive hiring
              practices, diversity sourcing strategies, and partnerships with
              high-impact organizations that drive equity. As we build our
              external strategy, we empower our employees to be a force for good
              in the world and support causes they are passionate about.
            </motion.p>
          </div>
          <div className="py-0">
            <motion.h3
              variants={containerVariants}
              initial="hidden"
              whileInView="visibleSpring"
              className="pb-4 font-bold large-font text-lg sm:text-2xl md:text-3xl"
            >
              Our Employee Resource Groups
            </motion.h3>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="large-font leading-8"
            >
              Discord's Employee Resource Groups (ERGs) are employee-led
              organizations centered around belonging. Led by our Inclusion,
              Diversity & Purpose team, Discord empowers our ERGs to create an
              inclusive space where members of underrepresented groups and
              allies can come together to celebrate our diverse communities. Our
              ERG leads have 10% allocated work time to help build belonging
              through promoting education and awareness, offering learning
              opportunities, and driving advocacy for their communities in and
              outside of Discord.
            </motion.p>
          </div>
        </div>
        {activeInfo}
        <div className="relative my-14 w-full lg:w-9/12 mx-auto bg-white rounded-2xl">
          <button
            onClick={() => {
              let idx = 0;
              if (activeInfo > 0) {
                setActiveInfo((prev) => {
                  idx = prev - 1;
                  document.getElementById(`item${idx}`)?.scrollIntoView({
                    block: "nearest",
                    inline: "start",
                  });
                  return idx;
                });
                return;
              }
              setActiveInfo((prev) => CAREER_INFO_CARD_DATA.length - 1);
              document
                .getElementById(`item${CAREER_INFO_CARD_DATA.length - 1}`)
                ?.scrollIntoView({
                  block: "nearest",
                  inline: "start",
                });
            }}
            className="bg-[#EFEFEF] absolute rounded-full h-12 w-12 text-center border border-[#ccc5c5] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/images/career_info_left_arrow.svg"
              className="w-1/2 mx-auto"
            />
          </button>
          <button
            onClick={() => {
              let idx = 0;
              if (activeInfo < CAREER_INFO_CARD_DATA.length - 1) {
                setActiveInfo((prev) => {
                  idx = prev + 1;
                  document.getElementById(`item${idx}`)?.scrollIntoView({
                    block: "nearest",
                    inline: "start",
                  });
                  return idx;
                });
                return;
              }
              setActiveInfo((prev) => 0);
              document.getElementById(`item${0}`)?.scrollIntoView({
                block: "nearest",
                inline: "start",
              });
            }}
            className="bg-[#EFEFEF] absolute rounded-full h-12 w-12 text-center border border-[#ccc5c5] right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/images/career_info_right_arrow.svg"
              className="w-1/2 mx-auto"
            />
          </button>
          <div className="py-20 w-full flex overflow-x-hidden scroll-smooth">
            {CAREER_INFO_CARD_DATA.map((data, index) => (
              <div
                key={index}
                id={`item${index}`}
                className="min-w-full px-8 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-3 items-start place-items-center"
              >
                <img
                  src={`/images/${data.image}`}
                  className="col-span-1 w-3/4 sm:w-2/4 lg:w-3/4"
                />
                <div className="py-2 col-span-2">
                  <h4 className="font-semibold large-font">{data.title}</h4>
                  <p className="mt-4 large-font text-sm text-justify leading-7">
                    {data.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
