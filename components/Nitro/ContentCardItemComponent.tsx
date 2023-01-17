// import Image from "next/image";
import { NitroCardContent } from "../shared/Types";
export const ContentCard = ({ textContent, imgSrc }: NitroCardContent) => {
  return (
    <div
      className={`text-center bg-[#F6F6F6] rounded-xl p-5 m-2.5 hover:shadow-2xl`}
    >
      <h2 className="text-[#23272A] px-6 py-5 large-font font-bold text-xl">
        {textContent}
      </h2>
      <img src={`/images/${imgSrc}`} alt={`${imgSrc}`} className="inline" />
    </div>
  );
};
