// import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants } from "./MotionVariants";

export const MidContent = () => {
  return (
    <div className="py-20 px-10">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="large-font text-xl sm:text-2xl md:text-3xl lg:text-5xl text-left md:text-center font-bold text-[#23272A]"
      >
        Come build belonging with us
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visibleSpring"
        viewport={{ once: true }}
        className="my large-font text-[#23272A] py-10 md:w-11/12 mx-auto text-lg leading-8"
      >
        <p className="mb-5">
          Discord is working toward an inclusive world where no one feels like
          an outsider, where genuine human connection is a click, text chat, or
          voice call away. A place where everyone can find belonging.
          Challenging? Heck yes. Rewarding? Double heck yes. It&apos;s a mission
          that gives us the chance to positively impact millions of people all
          over the world.
        </p>
        <p>
          So if this strikes a chord, and you&apos;re equally comfortable
          communicating in memes and gifs as you are in code or decks, come
          build belonging with us!
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-10 md:gap-20 large-font items-center text-[#23272A] py-10 w-full md:w-11/12 mx-auto">
        <div>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-6"
          >
            Work with people who care.
          </motion.h2>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visibleSpring"
            viewport={{ once: true }}
            className="leading-8"
          >
            Our people, much like our users, can&apos;t be put in a box. The
            quirky and unique cast of characters that work together at Discord
            may be intrepid travelers from all walks of life, but there&apos;s a
            reason we&apos;ve all ended up here. We care about each other, the
            work we do, and the future we&apos;re building — like, a lot. We
            pull our own weight and treat each other with extreme empathy. No
            cogs or jerks allowed.
          </motion.p>
        </div>
        <motion.img
          variants={containerVariants}
          whileInView="imgScaleToLarge"
          viewport={{ once: true }}
          src="/images/career_content1.jpeg"
          className="rounded-xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-10 md:gap-20 large-font items-center text-[#23272A] py-10 w-full md:w-11/12 mx-auto">
        <div>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-6"
          >
            Join a culture that builds belonging.
          </motion.h2>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visibleSpring"
            viewport={{ once: true }}
            className="leading-8"
          >
            Imagine a workplace where everyone belongs. At Discord, we
            aren&apos;t just imagining this place, we&apos;re creating it.
            We&apos;re building an inclusive, diverse, and welcoming space that
            reflects the world we live, play, and work in — because we know that
            with diversity comes better ideas, a better product, a better work
            environment, and ultimately a better company.
          </motion.p>
        </div>
        <motion.img
          variants={containerVariants}
          whileInView="imgScaleToLarge"
          viewport={{ once: true }}
          src="/images/career_content2.jpeg"
          className="rounded-xl order-last md:order-first"
        />
      </div>
      <motion.div className="text-center relative py-20">
        <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12">
          <h3 className="text-[#23272A] z-10 font-bold large-font text-xl sm:text-2xl md:text-3xl mb-6">
            Want to find out more?
          </h3>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visibleSpring"
            viewport={{ once: true }}
            className="font-light text-lg z-10"
          >
            Check out our inclusion, diversity and purpose efforts, or learn
            more about the Life @ Discord experience!
          </motion.p>
        </div>
        <img
          src="/images/careers_watchout.svg"
          alt="career_watchout"
          width="0"
          height="0"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 w-full md:w-8/12"
        />
      </motion.div>
    </div>
  );
};
