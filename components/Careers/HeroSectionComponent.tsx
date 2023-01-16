import HeroStyles from "../../styles/HeroSection.module.css";
import { motion } from "framer-motion";
import { containerVariants } from "./MotionVariants";

export const HeroSection = () => {
  return (
    <div className="bg-[#5865F2] h-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visibleSpring"
        viewport={{ once: true }}
        className="text-center pt-36 text-white w-full md:w-8/12 mx-auto"
      >
        <h1 className="x-large-font text-2xl md:text-3xl lg:text-5xl">
          WORK AT DISCORD
        </h1>
        <p className="large-font font-light py-5 md:w-8/12 mx-auto text-lg">
          Discord is home to (com)passionate people who believe in our mission
          of creating space for everyone to find belonging.
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visibleSpring"
        viewport={{ once: true }}
        className={`py-24 ${HeroStyles.careers_hero_relative}`}
      >
        <motion.img
          variants={containerVariants}
          drag
          dragConstraints={containerVariants.draggable}
          dragElastic={0.5}
          src="/images/careers_hero1.jpeg"
          className={`rounded-3xl ${HeroStyles.careers_hero_1}`}
        />
        <motion.img
          variants={containerVariants}
          drag
          dragConstraints={containerVariants.draggable}
          dragElastic={0.5}
          src="/images/careers_hero2.jpeg"
          className={`rounded-3xl ${HeroStyles.careers_hero_2}`}
        />
        <motion.img
          variants={containerVariants}
          drag
          dragConstraints={containerVariants.draggable}
          dragElastic={0.5}
          src="/images/careers_hero3.jpeg"
          className={`rounded-3xl ${HeroStyles.careers_hero_3}`}
        />
        <motion.img
          variants={containerVariants}
          drag
          dragConstraints={containerVariants.draggable}
          dragElastic={0.5}
          src="/images/careers_hero4.jpeg"
          className={`rounded-3xl ${HeroStyles.careers_hero_4}`}
          />
        <motion.img
          variants={containerVariants}
          drag
          dragConstraints={containerVariants.draggable}
          dragElastic={0.5}
          src="/images/careers_hero5.jpeg"
          className={`rounded-3xl ${HeroStyles.careers_hero_5}`}
        />
      </motion.div>
    </div>
  );
};
