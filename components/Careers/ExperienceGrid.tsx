import Image from "next/image";
import { CAREER_EXP_DATA } from "../shared/env";
import { motion } from "framer-motion";
import { containerVariants } from "./MotionVariants";

export const ExperienceGrid = () => {
  return (
    <div className="bg-[#5865F2] py-20 px-5 sm:px-10 lg:px-20">
      <motion.h3
        variants={containerVariants}
        initial="hidden"
        whileInView="visibleSpring"
        className="font-bold mb-10 text-white large-font text-xl sm:text-3xl md:text-5xl"
      >
        Experience Life @ Discord
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14">
        {CAREER_EXP_DATA.map((data, index) => (
          <div className="my-5" key={index}>
            <Image src={`/images/${data.image}`} alt={`${data.image}`} className="h-9 w-9" />
            <h4 className="large-font py-4 text-white text-lg">{data.title}</h4>
            <p className="large-font text-white leading-7">{data.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
