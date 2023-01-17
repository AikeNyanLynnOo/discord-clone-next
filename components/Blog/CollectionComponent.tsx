import Image from "next/image";

export const Collection = () => {
  return (
    <div className="mx-auto w-11/12 p-7 md:p-12 block md:flex justify-between rounded-2xl bg-[#F6F6F6]">
      <div className="w-full md:w-4/12 pb-10 md:pb-0">
        <h2 className="uppercase">Collection</h2>
        <h1 className="x-large-font text-4xl text-[#5865F2] my-4">
          PRODUCT & FEATURES
        </h1>
        <Image src="/images/blog_cardItem_main.svg" alt="cardItemMain" className="w-full" />
        <p className="large-font font-semibold text-lg py-5">
          Announcements, new features, and general info about the Discord app.
        </p>
        <button className="bg-[#3E4EFD] rounded-full py-3 px-7 text-white w-full md:w-fit">
          View Collection
        </button>
      </div>
      <div className="w-full md:w-7/12">
        <div className="mb-5">
          <Image src="/images/blog_carditem_top.png" alt="cardItemTop" className="w-full" />
          <h2 className="font-bold text-xl py-4">
            Make Your Connection: Connected Accounts Get a Huge Functionality
            Boost
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-3">
          <div>
            <Image
              src="/images/blog_sm_card1.png"
              alt="blog_sm_card1"
              className="w-full rounded-lg"
            />
            <p className="py-3 font-semibold">
              Announcing Server Subscriptions and the Creator Portal, Now Open
              to More Communities
            </p>
          </div>
          <div>
            <Image
              src="/images/blog_card_item.png"
              alt="blog_card_itme"
              className="w-full rounded-lg"
            />
            <p className="py-3 font-semibold">
              Discord Update: November 1, 2022 Changelog
            </p>
          </div>
          <div>
            <Image
              src="/images/blog_sm_card5.png"
              alt="blog_sm_card5"
              className="w-full rounded-lg"
            />
            <p className="py-3 font-semibold">
              Attention Discord Developers: The App Directory is Here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
