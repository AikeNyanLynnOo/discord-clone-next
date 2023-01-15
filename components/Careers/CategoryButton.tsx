export const CategoryButton = ({
  text,
  isActive,
}: {
  text: string;
  isActive: boolean;
}) => {
  return (
    <button
      className={`large-font ${
        isActive ? "bg-[#5865F2] text-white" : "bg-white"
      } rounded-full h-12 px-9 mr-2 my-1 hover:shadow-lg`}
    >
      {text}
    </button>
  );
};
