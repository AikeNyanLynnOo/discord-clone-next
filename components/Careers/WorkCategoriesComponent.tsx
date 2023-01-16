import { CAREER_CATEGORIES, OPPORTUNITY_SAMPLE_DATA } from "../shared/env";
import { CareerCard } from "./CareerCard";
import { CategoryButton } from "./CategoryButton";
import { motion } from "framer-motion";
import { containerVariants } from "./MotionVariants";

export const WorkCategories = () => {
  return (
    <div className="bg-[#F6F6F6] w-full">
      <div className="w-full mx-auto md:w-11/12 py-20 px-10">
        <h2 className="text-[#23272A] font-bold large-font text-xl sm:text-2xl md:text-4xl mb-5">
          We'd love to work with someone like you.
        </h2>
        <motion.h3
          variants={containerVariants}
          initial="hidden"
          whileInView="visibleSpring"
          viewport={{ once: true }}
          className="text-[#23272A] font-bold large-font text-lg sm:text-xl md:text-3xl"
        >
          Filters
        </motion.h3>
        <div className="py-14 hidden md:flex flex-wrap">
          {CAREER_CATEGORIES.map((cat, index) => (
            <CategoryButton
              key={index}
              text={cat}
              isActive={index === 1 ? true : false}
            />
          ))}
        </div>
        <div className="my-10 flex md:hidden w-full overflow-x-scroll overflow-y-hidden sm-scrollbar">
          {CAREER_CATEGORIES.map((cat, index) => (
            <CategoryButton
              key={index}
              text={cat}
              isActive={index === 1 ? true : false}
            />
          ))}
        </div>
        <div>
          <h2 className="mb-7 font-semibold large-font text-[#23272A] text-lg sm:text-2xl lg:text-3xl">
            Accounting
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {OPPORTUNITY_SAMPLE_DATA.map((data, index) => (
              <CareerCard
                key={index}
                title={data.title}
                workLocation={data.workLocation}
                icon={data.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
