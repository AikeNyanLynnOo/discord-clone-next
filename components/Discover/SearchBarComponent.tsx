// import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input
        className="bg-[#E3E5E8] rounded-lg grow py-4 px-5 mr-4"
        placeholder="Explore communities"
      />
      <button className="bg-[#5865F2] rounded-lg flex-none text-center p-5">
        <img src="/images/search.png" alt="search" className="h-4 w-4" />
      </button>
    </div>
  );
};
