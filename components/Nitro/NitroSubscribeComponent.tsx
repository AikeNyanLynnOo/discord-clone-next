import Image from "next/image";
export const NitroSubscribe = () => {
  return (
    <div className="nitro-subscribe py-32 relative w-full overflow-x-hidden">
      <h2 className="text-center x-large-font text-bold text-white text-3xl md:text-4xl lg:text-5xl w-6/12 mx-auto">
        Unleash the fun with Nitro
      </h2>
      <button className="block mt-12 w-fit mx-auto rounded-full py-5 px-14 bg-white text-lg large-font font-semibold hover:text-[#1477CD]">
        Subscribe
      </button>
      <Image
        src={`/images/subscribe-left.svg`}
        alt="subscribe-left"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 hidden sm:block"
        />
      <Image
        src={`/images/subscribe-right.svg`}
        alt="subscribe-right"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 hidden sm:block"
      />
    </div>
  );
};
