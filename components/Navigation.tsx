import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavStyles from "../styles/Navigation.module.css";

const navItems = [
  {
    text: "Home",
    link: "/",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Download",
    link: "/download",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Nitro",
    link: "/nitro",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Discover",
    link: "/discover",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Safety",
    link: "/safety",
    subNav: true,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Mod Academy",
    link: "",
    subNav: true,
    smallNav: true,
    largeNav: false,
  },
  {
    text: "Support",
    link: "/support",
    subNav: false,
    smallNav: true,
    largeNav: false,
  },
  {
    text: "Blog",
    link: "/blog",
    subNav: false,
    smallNav: true,
    largeNav: false,
  },
  {
    text: "Careers",
    link: "/careers",
    subNav: false,
    smallNav: true,
    largeNav: false,
  },
];

const safetySubData = [
  {
    title: "Safety Center",
    liText: [
      {
        text: "Overview",
        link: "",
      },
    ],
  },
  {
    title: "Controlling Your Experience",
    liText: [
      {
        text: "Four steps to a super safe server",
        link: "",
      },
      {
        text: "Role of administrators and moderators on Discord",
        link: "",
      },
      {
        text: "Reporting problems to Discord",
        link: "",
      },
    ],
  },
];
const moderatorAcademyData = [
  {
    title: "Moderator Academy",
    liText: [
      {
        text: "Overview",
        link: "",
      },
    ],
  },
  {
    title: "Basics",
    liText: [
      {
        text: "100: An Intro to the DMA",
        link: "",
      },
      {
        text: "103: Basic Channel Setup",
        link: "",
      },
      {
        text: "104: How to Report Content to Discord",
        link: "",
      },
    ],
  },
];

export const Navigation = () => {
  const router = useRouter();
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isSubSlideOpen, setIsSubSlideOpen] = useState(false);
  const [currentSubNav, setCurrentSubNav] = useState("Safety");

  const closeAll = () => {
    setIsSlideOpen((prev) => {
      return prev === true ? !prev : prev;
    });
    setIsSubSlideOpen((prev) => {
      return prev === true ? !prev : prev;
    });
  };

  const toggleSlideNav = (value?: boolean) => {
    (value !== undefined && setIsSlideOpen((value) => value)) ||
      setIsSlideOpen((prev) => !prev);
  };
  const toggleSubSlideNav = (value?: boolean) => {
    (value !== undefined && setIsSubSlideOpen((value) => value)) ||
      setIsSubSlideOpen((prev) => !prev);
  };
  return (
    <nav
      className={`${NavStyles.nav} w-full px-10 py-6 flex items-center justify-between`}
    >
      <div className="flex items-center w-1/4 justify-start">
        <img src="/discord.png" className="inline mr-4 w-8 h-8" />
        <h1 className="x-large-font inline uppercase text-white">Discord</h1>
      </div>
      <ul className="normal-font w-2/4 hidden lg:flex justify-between items-center text-white font-semibold">
        {navItems
          .filter((item) => item.largeNav)
          .map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.link}>{navItem.text}</Link>
            </li>
          ))}
      </ul>
      <div className="flex items-center w-1/4 justify-end">
        <button className="hidden sm:block bg-white rounded-full px-4 py-1.5 text-sm normal-font text-black">
          Login
        </button>
        <img
          src="/lines.png"
          className="inline lg:hidden ml-4 w-7 h-7 cursor-pointer"
          onClick={() => {
            toggleSlideNav();
          }}
        />
      </div>
      <div
        className={`${
          NavStyles.sideNav
        } h-screen w-full md:w-4/12  bg-white rounded-l-md absolute z-10 right-0 ${
          isSlideOpen ? NavStyles.sideNavOpen : NavStyles.sideNavClose
        } top-0`}
      >
        <div className="flex justify-between mx-6">
          <div className="w-11/12 ">
            <div className="border-b py-6">
              <img src="/discord-black.png" className="inline mr-4 w-8 h-8" />
              <h1 className="x-large-font inline uppercase text-[#23272a]">
                Discord
              </h1>
            </div>
            <ul
              className={`py-4 ${NavStyles.ulMaxHeight} overflow-y-scroll scrollbar-hide`}
            >
              {navItems
                .filter((item) => item.smallNav)
                .map((navItem, index) => (
                  <li
                    key={index}
                    className={`${
                      router.asPath === navItem.link
                        ? "bg-[#F6F6F6] text-[#4FB3F5]"
                        : ""
                    } font-light text-sm px-4 py-3 my-2 rounded-md hover:underline`}
                  >
                    {(!navItem.subNav && (
                      <Link href={navItem.link}>{navItem.text}</Link>
                    )) || (
                      <span
                        onClick={() => {
                          toggleSubSlideNav(true);
                          toggleSlideNav(false);
                          setCurrentSubNav(navItem.text);
                        }}
                      >
                        {navItem.text}
                        {navItem.subNav && (
                          <img
                            src="/caret-r.png"
                            className="inline w-3 h-3 ml-3"
                          />
                        )}
                      </span>
                    )}
                  </li>
                ))}
            </ul>
            <div className="absolute bottom-6 z-10 flex justify-between items-center w-fit">
              <button className="px-5 py-2 text-white text-sm bg-[#5865f2] rounded-full flex items-center">
                <img src="/download.png" className=" w-4 h-4 mr-3" />
                Download for Linux
              </button>
              <button className="border-solid border border-[#5865f2] rounded-full ml-2 px-7 py-2 text-sm normal-font text-[#5865f2] block sm:hidden">
                Login
              </button>
            </div>
          </div>
          <img
            src="/close.png"
            className="w-4 h-4 mt-7 cursor-pointer"
            onClick={closeAll}
          />
        </div>
      </div>
      <div
        className={`${
          NavStyles.sideNav
        } h-screen w-full md:w-4/12  bg-white rounded-l-md absolute z-12 right-0 ${
          isSubSlideOpen ? NavStyles.sideNavOpen : NavStyles.sideNavClose
        } top-0`}
      >
        <div className="flex justify-between mx-6">
          <div className="w-11/12 ">
            <div
              className="border-b py-6"
              onClick={() => {
                toggleSubSlideNav(false);
                toggleSlideNav(true);
              }}
            >
              <img src="/caret-l.png" className="inline mr-2 w-3 h-3" />
              <h1 className="inline font-light text-sm py-3 my-2 rounded-md hover:underline">
                Back
              </h1>
            </div>
            <ul
              className={`py-4 ${NavStyles.ulMaxHeight} overflow-y-scroll scrollbar-hide`}
            >
              {(currentSubNav === "Safety" &&
                safetySubData.map((data, index) => (
                  <div className="border-b py-3 px-2" key={index}>
                    <h2 className="text-lg mb-2">{data.title}</h2>
                    <ul className="px-3">
                      {data.liText.map((li, index) => (
                        <li
                          className="font-light py-2 text-sm hover:underline"
                          key={index}
                        >
                          <Link href={li.link}>{li.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))) ||
                moderatorAcademyData.map((data, index) => (
                  <div className="border-b py-3 px-2" key={index}>
                    <h2 className="text-lg mb-2">{data.title}</h2>
                    <ul className="px-3">
                      {data.liText.map((li, index) => (
                        <li
                          className="font-light py-2 text-sm hover:underline"
                          key={index}
                        >
                          <Link href={li.link}>{li.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </ul>
            <button className="px-5 py-3 absolute bottom-6 z-10 text-white text-sm bg-[#5865f2] rounded-full flex items-center">
              <img src="/download.png" className="inline w-4 h-4 mr-3" />
              Download for Linux
            </button>
          </div>
          <img
            src="/close.png"
            className="w-4 h-4 mt-7 cursor-pointer"
            onClick={closeAll}
          />
        </div>
      </div>
    </nav>
  );
};
