// import Image from "next/image";
import { SafetySubCardContent } from "../shared/Types";
export const Card = ({
  title,
  image,
  bodyContents,
  subCards,
}: {
  title: string;
  image: string;
  bodyContents: {
    text: string;
  }[];
  subCards: SafetySubCardContent[];
}) => {
  return (
    <div className="block md:flex justify-between bg-none md:bg-[#F6F6F6] rounded-lg p-5 md:p-10 my-10">
      <div className="w-full md:w-3/12">
        <h3 className="large-font font-bold text-[#5865F2] text-3xl md:text-4xl">
          {title}
        </h3>
        <img
          src={`/images/${image}`}
          alt={`${image}`}
          className="my-8 w-full"
        />
        {bodyContents.map((body, index) => (
          <p key={index} className="py-3 text-justify">
            {body.text}
          </p>
        ))}
        <button className="text-white bg-[#5865F2] rounded-full py-3 px-8 text-lg my-5">
          View all
        </button>
      </div>
      <div className="mt-10 md:mt-0 w-full md:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
        {subCards.map((subCard, index) => (
          <div key={index}>
            <img
              src={`/images/${subCard.image}`}
              alt={`${subCard.image}`}
              className="w-full rounded-lg"
            />
            <h4 className="large-font text-[#5865F2] py-3 font-bold">
              {subCard.title}
            </h4>
            <p className="large-font font-bold text-lg">{subCard.catchText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
