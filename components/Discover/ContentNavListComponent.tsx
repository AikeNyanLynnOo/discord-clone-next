// import Image from "next/image";
import Link from "next/link";
import {
  SERVERS_CONTENT_NAV_ITEMS,
  SERVERS_NAVITEM_CONTENTS,
} from "../shared/env";

export const ContentNavList = ({
  navLink,
}: {
  navLink: string | string[] | undefined;
}) => {
  return (
    <div className="block md:flex py-8">
      <div className="flex md:hidden mb-8 justify-between rounded-lg bg-[#DBDEE1] py-4 px-4 items-center">
        <span className="text-[#72767D]">
          {navLink !== undefined &&
            SERVERS_CONTENT_NAV_ITEMS.filter(
              (item) => item.navLink === navLink
            )[0].text}
        </span>
        <img
          src="/images/caret-r.png"
          alt="caret-r"
          className="h-3 w-3 rotate-90"
        />
      </div>

      <ul className="w-1/3 mr-3 hidden md:block">
        {SERVERS_CONTENT_NAV_ITEMS.map((item, index) => (
          <Link scroll={false} href={`/servers/${item.navLink}`} key={index}>
            <li
              className={`cursor-pointer text-[#2E3338] flex justify-between rounded-lg py-3 px-4 my-2 items-center ${
                navLink === item.navLink ? "bg-[#DBDEE1]" : "bg-none"
              }`}
            >
              <div>
                <img
                  src={`/images/${item.image}`}
                  alt={`${item.image}`}
                  className="inline-block h-4 w-4 mr-3"
                />
                <span>{item.text}</span>
              </div>
              <span>{item.count}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="w-full lg:w-2/3">
        <h2 className="large-font text-lg font-bold">
          {navLink !== undefined &&
            SERVERS_CONTENT_NAV_ITEMS.filter(
              (item) => item.navLink === navLink
            )[0].count}{" "}
          Results Found in{" "}
          {navLink !== undefined &&
            SERVERS_CONTENT_NAV_ITEMS.filter(
              (item) => item.navLink === navLink
            )[0].text}
        </h2>
        <div>
          {SERVERS_NAVITEM_CONTENTS.map((content, index) => (
            <div
              className="block md:grid grid-cols-2 gap-x-4 my-6 p-0 md:p-2 hover:bg-[#DBDEE1] rounded-lg cursor-pointer"
              key={index}
            >
              <img
                src={`/images/${content.imgLg}`}
                alt={`${content.imgLg}`}
                className="rounded-lg hidden md:block"
              />
              <div className="hidden md:block">
                <div className="flex items-center">
                  <img
                    src={`/images/${content.imgSm}`}
                    alt={`${content.imgSm}`}
                    className="inline-block h-6 w-6 mr-2 rounded-lg"
                  />
                  <span className="large-font font-bold">{content.title}</span>
                </div>
                <p className="my-3 text-sm font-medium text-[#2E3338]">
                  {content.bodyText}
                </p>
                <p className="my-3 text-xs font-light text-[#2E3338]">
                  <span>{content.online} Online</span>
                  <span className="mx-2">&#8226;</span>
                  <span>{content.totalMembers} Members</span>
                </p>
              </div>

              <div className="flex md:hidden">
                <div className="flex w-full">
                  <img
                    src={`/images/${content.imgSm}`}
                    alt={`${content.imgSm}`}
                    className="inline-block h-10 w-10 mr-4 rounded-lg"
                  />
                  <div>
                    <p className="large-font font-bold">{content.title}</p>
                    <p className="my-3 text-sm font-medium text-[#2E3338]">
                      {content.bodyText}
                    </p>
                    <p className="my-3 text-xs font-light text-[#2E3338]">
                      <span>{content.online} Online</span>
                      <span className="mx-2">&#8226;</span>
                      <span>{content.totalMembers} Members</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
