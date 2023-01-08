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
  const currentPageItem = SERVERS_CONTENT_NAV_ITEMS.filter(
    (item) => item.navLink === navLink
  )[0];
  return (
    <div className="flex py-10">
      <ul className="w-1/3 mr-3">
        {SERVERS_CONTENT_NAV_ITEMS.map((item, index) => (
          <Link href={`/servers/${item.navLink}`} key={index}>
            <li
              className={`cursor-pointer text-[#2E3338] flex justify-between rounded-lg py-3 px-4 my-2 items-center ${
                navLink === item.navLink ? "bg-[#DBDEE1]" : "bg-none"
              }`}
            >
              <div>
                <img
                  src={`/images/${item.image}`}
                  className="inline-block h-4 w-4 mr-3"
                />
                <span>{item.text}</span>
              </div>
              <span>{item.count}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="w-2/3 ">
        <h2 className="large-font text-lg font-bold">
          {currentPageItem.count} Results Found in {currentPageItem.text}
        </h2>
        <div>
          {SERVERS_NAVITEM_CONTENTS.map((content, index) => (
            <div
              className="grid grid-cols-2 gap-x-4 my-6 p-2 hover:bg-[#DBDEE1] rounded-lg cursor-pointer"
              key={index}
            >
              <img src={`/images/${content.imgLg}`} className="rounded-lg" />
              <div>
                <div className="flex items-center">
                  <img
                    src={`/images/${content.imgSm}`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
