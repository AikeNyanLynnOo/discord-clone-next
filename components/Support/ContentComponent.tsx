import { SUPPORT_CARDSITEMS } from "../shared/env";
import { SupportCard } from "./SupportCardComponent";

export const Content = () => {
  return (
    <div className="py-20">
      <div className="text-center large-font text-[#72767D]">
        <h3 className="text-2xl mb-4 px-4">Need help? We&apos;ve got your back.</h3>
        <p className="w-11/12 md:w-6/12 mx-auto">
          From account settings to permissions, find help for everything Discord
          If you&apos;re new to Discord and looking for tips, check out our
          Beginner&apos;s Guide
        </p>
        <div className="flex flex-wrap justify-center items-center w-full md:w-11/12 my-14 mx-auto">
          {SUPPORT_CARDSITEMS.map((cardItem, index) => (
            <SupportCard
              key={index}
              image={cardItem.image}
              title={cardItem.title}
              body={cardItem.body}
            />
          ))}
        </div>
        <h3 className="text-2xl my-5 px-4">Other ways to find help.</h3>
        <div className="flex flex-wrap justify-center items-center w-full md:w-11/12 my-14 mx-auto">
          <SupportCard
            image={"support_card11.svg"}
            title="Developer Support"
            body="Your home for support with developing bots, apps, & games using our API and SDK! "
          />
          <SupportCard
            image={"support_card12.svg"}
            title="Twitter"
            body="Have a quick question? Hit us up on Twitter!"
          />
        </div>
      </div>
    </div>
  );
};
