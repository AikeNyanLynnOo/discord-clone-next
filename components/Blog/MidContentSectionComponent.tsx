// import Image from "next/image";
import { Collection } from "./CollectionComponent";

export const MidContentSection = () => {
  return (
    <div className=" mt-32 mb-20">
      <div className="block md:flex justify-between w-full md:w-11/12 mx-auto">
        <div className="mx-auto w-11/12 md:w-1/2 md:pr-3 my-16 md:my-0">
          <img
            src="/images/blog_big_card1.png"
            alt="blog_big_card1"
            width="0"
            height="0"
            className="w-full rounded-lg"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Policy & Safety
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Discord Transparency Report: July - September 2022
          </p>
        </div>
        <div className="mx-auto w-11/12 md:w-1/2 my-16 md:my-0">
          <img
            src="/images/blog_big_card2.png"
            alt="blog_big_card2"
            width="0"
            height="0"
            className="w-full rounded-lg"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Policy & Safety
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Evolving Our Policies to Keep You Safe
          </p>
        </div>
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 w-11/12 mx-auto">
        <div className="py-3">
          <img
            src="/images/blog_sm_card1.png"
            alt="blog_sm_card1"
            width="0"
            height="0"
            className="rounded-lg w-full"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Product & Features
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Announcing Server Subscriptions and the Creator Portal, Now Open to
            More Communities
          </p>
        </div>
        <div className="py-3">
          <img
            src="/images/blog_sm_card2.png"
            alt="blog_sm_card2"
            width="0"
            height="0"
            className="rounded-lg w-full"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Product & Features
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Announcing Server Subscriptions and the Creator Portal, Now Open to
            More Communities
          </p>
        </div>
        <div className="py-3">
          <img
            src="/images/blog_sm_card3.png"
            alt="blog_sm_card3"
            width="0"
            height="0"
            className="rounded-lg w-full"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Product & Features
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Announcing Server Subscriptions and the Creator Portal, Now Open to
            More Communities
          </p>
        </div>
        <div className="py-3">
          <img
            src="/images/blog_sm_card4.png"
            alt="blog_sm_card4"
            width="0"
            height="0"
            className="rounded-lg w-full"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Product & Features
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Announcing Server Subscriptions and the Creator Portal, Now Open to
            More Communities
          </p>
        </div>
        <div className="py-3">
          <img
            src="/images/blog_sm_card5.png"
            alt="blog_sm_card5"
            width="0"
            height="0"
            className="rounded-lg w-full"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Product & Features
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Announcing Server Subscriptions and the Creator Portal, Now Open to
            More Communities
          </p>
        </div>
        <div className="py-3">
          <img
            src="/images/blog_sm_card6.png"
            alt="blog_sm_card6"
            width="0"
            height="0"
            className="rounded-lg w-full"
          />
          <h3 className="text-[#6874F3] x-large-font uppercase my-4">
            Product & Features
          </h3>
          <p className="large-font text-2xl font-bold w-full">
            Announcing Server Subscriptions and the Creator Portal, Now Open to
            More Communities
          </p>
        </div>
      </div>
      <Collection />
    </div>
  );
};
