import Link from "next/link";
import { FaqItem } from "./FaqItemComponent";
import { FAQS } from "../shared/env";
import { useState } from "react";

export const Faq = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: number;
  setCurrentTab: Function;
}) => {
  const [openedFaq, setOpenedFaq] = useState(null);

  return (
    <div className="py-5 w-full">
      <h3 className="w-8/12 mx-auto text-center py-14 large-font font-bold text-3xl md:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </h3>
      <div className="block text-center md:flex justify-center w-11/12 mx-auto">
        {FAQS.map((faq, index) => (
          <span
            className={`leading-10 text-gray-400 text-lg cursor-pointer mx-3 md:mx-5 py-3 ${
              index === currentTab
                ? "text-[#1477CD] font-semibold border-b border-[#1477CD]"
                : ""
            }`}
            key={index}
            onClick={() => setCurrentTab(index)}
          >
            {faq.tab}
          </span>
        ))}
      </div>
      <div className="w-11/12 mx-auto py-10">
        {FAQS[currentTab].faqs.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            faq={faq}
            openedFaq={openedFaq}
            isOpened={openedFaq === index ? true : false}
            setOpenedFaq={setOpenedFaq}
          />
        ))}
      </div>
    </div>
  );
};
