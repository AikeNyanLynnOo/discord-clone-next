// import Image from "next/image";

import { useEffect, useState } from "react";
import { CAREER_FOOTER_IMAGES } from "../shared/env";
import { motion } from "framer-motion";
import { containerVariants } from "./MotionVariants";

export const FooterCarousel = () => {
  const [activeFooterImg, setActiveFooterImg] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   setActiveFooterImg((prev) => {
    //     let idx = 0;
    //     if (prev < CAREER_FOOTER_IMAGES.length) {
    //       idx = prev + 1;
    //       document.getElementById(`footer_img${idx}`)?.scrollIntoView({
    //         behavior: "smooth",
    //         block: "nearest",
    //         inline: "start",
    //       });
    //       return idx;
    //     }
    //     document.getElementById(`footer_img${idx}`)?.scrollIntoView({
    //       behavior: "smooth",
    //       block: "nearest",
    //       inline: "start",
    //     });
    //     return idx;
    //   });
    // }, 5000);
  }, []);

  return (
    <div className="bg-[#2C2F33] py-20">
      <p className="text-center w-10/12 mx-auto py-4 large-font text-white">
        If you&apos;re wanting to work with a motivated team on something that
        gives millions of users a space to find belonging, check out the four
        values of working at Discord on our blog. For all roles, we&apos;re
        hiring people to join us in our beautiful San Francisco office (when it
        reopens), and for select, indicated positions, we&apos;re currently open
        to having people join our team remotely in these states:
      </p>
      <p className="text-center w-10/12 mx-auto py-4 large-font text-white">
        Alabama - Arizona - California - Colorado - District of Columbia -
        Florida - Georgia - Illinois - Iowa - Massachusetts - Maryland -
        Michigan - Minnesota - Montana - Kansas - Nevada - New Hampshire - New
        Jersey - New Mexico - New York - North Carolina - Oklahoma - Oregon -
        Pennsylvania - Texas - Utah - Vermont - Virginia - Washington
      </p>
      <div className="relative w-full mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex w-full overflow-x-hidden scroll-smooth"
        >
          {CAREER_FOOTER_IMAGES.map((img, index) => (
            <img
              id={`footer_img${index}`}
              key={index}
              src={`/images/${img}`}
              alt={`${img}`}
              className="w-full md:min-w-1/2 sm:h-64 md:h-80 rounded-3xl mr-5"
            />
          ))}
        </motion.div>
        <button
          onClick={() => {
            let idx = 0;
            if (activeFooterImg > 0) {
              setActiveFooterImg((prev) => {
                idx = prev - 1;
                document.getElementById(`footer_img${idx}`)?.scrollIntoView({
                  block: "nearest",
                  inline: "start",
                });
                return idx;
              });
              return;
            }
            setActiveFooterImg((prev) => CAREER_FOOTER_IMAGES.length - 1);
            document
              .getElementById(`footer_img${CAREER_FOOTER_IMAGES.length - 1}`)
              ?.scrollIntoView({
                block: "nearest",
                inline: "start",
              });
          }}
          className="bg-[#EFEFEF] absolute rounded-full h-12 w-12 text-center border border-[#ccc5c5] left-10 top-1/2 -translate-y-1/2"
        >
          <img
            src="/images/caret-l.png"
            alt="caret-l"
            className="w-1/3 mx-auto"
          />
        </button>
        <button
          onClick={() => {
            let idx = 0;
            if (activeFooterImg < CAREER_FOOTER_IMAGES.length - 1) {
              setActiveFooterImg((prev) => {
                idx = prev + 1;
                document.getElementById(`footer_img${idx}`)?.scrollIntoView({
                  block: "nearest",
                  inline: "start",
                });
                return idx;
              });
              return;
            }
            setActiveFooterImg((prev) => 0);
            document.getElementById(`footer_img${0}`)?.scrollIntoView({
              block: "nearest",
              inline: "start",
            });
          }}
          className="bg-[#EFEFEF] absolute rounded-full h-12 w-12 text-center border border-[#ccc5c5] right-10 top-1/2 -translate-y-1/2"
        >
          <img
            src="/images/caret-r.png"
            alt="caret-r"
            className="w-1/3 mx-auto"
          />
        </button>
      </div>
    </div>
  );
};
