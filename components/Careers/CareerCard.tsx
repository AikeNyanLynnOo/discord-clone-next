import Image from "next/image";
export const CareerCard = ({
  title,
  workLocation,
  icon,
}: {
  title: string;
  workLocation: string;
  icon: string;
}) => {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-between py-5 px-6 h-auto sm:h-52 hover:shadow-2xl cursor-pointer">
      <h1 className="pt-4 pb-7 font-semibold large-font text-[#23272A] text-lg sm:text-2xl lg:text-3xl">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <span className="large-font text-sm font-light">{workLocation}</span>
        <Image
          src={`/images/${icon}`}
          alt="discord_opportunity"
          className="h-8 w-8 ml-5"
        />
      </div>
    </div>
  );
};
