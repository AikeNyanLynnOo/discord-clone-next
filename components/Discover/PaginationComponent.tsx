import Image from "next/image";

export const Pagination = () => {
  return (
    <div className="flex justify-center text-[#72767D] mb-10">
      <button className="text-[#72767D] flex items-center font-bold mx-3">
        <Image
          src="/images/caret-l.png"
          alt="caret-l"
          className="h-3 w-3 mr-3"
        />
        Back
      </button>
      <button className="bg-[#5865F2] w-6 h-6 rounded-full text-white font-bold mx-3">
        1
      </button>
      <button className="mx-3 font-bold">2</button>
      <button className="mx-3 font-bold">3</button>
      <button className="mx-3 font-bold">...</button>
      <button className="mx-3 font-bold">135</button>
      <button className="flex items-center mx-3 font-bold">
        Next
        <Image
          src="/images/caret-r.png"
          alt="caret-l"
          className="h-3 w-3 ml-3"
        />
      </button>
    </div>
  );
};
