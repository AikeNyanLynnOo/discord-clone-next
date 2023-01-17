// import Image from "next/image";

import { HOME_FLEX_CONTENTS } from "../shared/env";
export const FlexContent = () => {
  return (
    <ul className="h-auto w-100 py-10 md:py-20">
      {HOME_FLEX_CONTENTS.map((content, index) => (
        <li
          key={index}
          className={`block lg:flex justify-center w-full px-10 py-16 md:p-16 lg:p-20 ${
            index % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"
          }`}
        >
          <img
            className={`w-96 sm:w-3/4 mx-auto ${
              index % 2 === 0 ? "" : "order-last"
            }`}
            src={content.img}
            alt={`${content.img}`}
          />
          <div
            className={`ml-0 mt-20 ${index % 2 === 0 ? "lg:ml-32" : "lg:ml-0"}`}
          >
            <h2 className="large-font font-bold text-3xl md:text-4xl lg:text-5xl mb-5">
              {content.title}
            </h2>
            <p>{content.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const HomeContentWrapper = () => {
  return (
    <div>
      <FlexContent />
      <div className="bg-[#f6f6f6] py-20 px-10 md:px-16 lg:px-20">
        <h2 className="x-large-font font-light text-[#23272A] text-3xl md:text-4xl mb-3 text-center">
          RELIABLE TECH FOR STAYING CLOSE
        </h2>
        <p className="text-center text-md lg:text-xl font-light py-4 lg:px-20">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <img
          src="/images/home_content4.svg"
          alt="home_content4"
          className="w-full mx-auto"
        />
      </div>
      <div className="text-center relative py-10 pb-20 bg-[#f6f6f6]">
        <h2 className="large-font font-bold text-xl md:text-2xl lg:text-3xl mb-10">
          Ready to start your journey?
        </h2>
        <img
          src="/images/homebg_4.svg"
          alt="homebg_4"
          className={`absolute top-1/4 left-1/2 w-11/12 xl:w-5/12 -translate-x-1/2 -translate-y-3/4`}
        />
        <button className="px-8 py-4 text-white text-md bg-[#5865f2] rounded-full flex items-center w-fit mx-auto">
          <img
            src="/images/download-white.png"
            alt="download-white"
            className=" w-5 h-5 mr-3"
          />
          Download for Linux
        </button>
      </div>
    </div>
  );
};
