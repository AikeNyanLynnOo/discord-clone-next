import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavStyles from "../../styles/Navigation.module.css";
import { NAV_ITEMS, SAFETY_SUBDATA, MODERATOR_ACAMEDY_DATA } from "./env";
const ButtonGroup = () => {
  return (
    <div className="absolute bottom-6 z-20 flex justify-between items-center w-fit">
      <button className="px-5 py-2 text-white text-sm bg-[#5865f2] rounded-full flex items-center">
        <Image
          src="/images/download-white.png"
          alt="download-white"
          className=" w-4 h-4 mr-3"
        />
        Download for Linux
      </button>
      <button className="border-solid border border-[#5865f2] rounded-full ml-2 px-7 py-2 text-sm normal-font text-[#5865f2] block sm:hidden">
        Login
      </button>
    </div>
  );
};

export const Navigation = (props: any) => {
  const router = useRouter();
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isSubSlideOpen, setIsSubSlideOpen] = useState(false);
  const [currentSubNav, setCurrentSubNav] = useState("Safety");

  useEffect(() => {
    // console.log("Slide " + isSlideOpen);
    // console.log("SubSlide " + isSubSlideOpen);
  });

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
    <nav>
      <div
        className={`nav-${props.currentNav} w-full px-10 lg:px-24 py-6 flex items-center justify-between fixed top-0 z-20`}
      >
        <Link href="/" className="flex items-center w-1/4 justify-start">
          <Image
            src="/images/discord.png"
            alt="discord"
            className="inline mr-4 w-8 h-8"
          />
          <h1 className="x-large-font inline text-white">Discord</h1>
        </Link>
        <ul className="normal-font w-2/4 hidden lg:flex justify-between items-center text-white font-semibold">
          {NAV_ITEMS.filter((item) => item.largeNav).map((navItem, index) => (
            <li key={index} className="hover:underline">
              <Link href={navItem.link}>{navItem.text}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center w-1/4 justify-end">
          <button className="hidden sm:block bg-white rounded-full px-4 py-1.5 text-sm normal-font text-black">
            Login
          </button>
          <Image
            src="/images/lines.png"
            alt="lines"
            className="inline lg:hidden ml-4 w-7 h-7 cursor-pointer"
            onClick={() => {
              toggleSlideNav();
            }}
          />
        </div>
      </div>
      <div
        className={`h-auto w-full md:w-4/12  bg-white rounded-l-md fixed z-30 right-0 top-0 bottom-0 ${
          isSlideOpen ? "block" : "hidden"
        } top-0`}
      >
        <div className="flex justify-between mx-6">
          <div className="w-11/12 ">
            <Link href="/" className="border-b py-6 flex items-center">
              <Image
                src="/images/discord-black.png"
                alt="discord-black"
                className="inline mr-4 w-8 h-8"
              />
              <h1 className="x-large-font inline text-[#23272a]">Discord</h1>
            </Link>
            <ul
              className={`py-4 ${NavStyles.ulMaxHeight} overflow-y-scroll scrollbar-hide bg-white`}
            >
              {NAV_ITEMS.filter((item) => item.smallNav).map(
                (navItem, index) => (
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
                          <Image
                            src="/images/caret-r.png"
                            alt="caret-r"
                            className="inline w-3 h-3 ml-3"
                          />
                        )}
                      </span>
                    )}
                  </li>
                )
              )}
            </ul>
            <ButtonGroup />
          </div>
          <Image
            src="/images/close.png"
            alt="close"
            className="w-4 h-4 mt-7 cursor-pointer"
            onClick={closeAll}
          />
        </div>
      </div>
      {isSubSlideOpen && (
        <div
          className={`h-full w-full md:w-4/12  bg-white rounded-l-md fixed z-30 right-0 top-0`}
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
                <Image
                  src="/images/caret-l.png"
                  alt="caret-l"
                  className="inline mr-2 w-3 h-3"
                />
                <h1 className="inline font-light text-sm py-3 my-2 rounded-md hover:underline">
                  Back
                </h1>
              </div>
              <ul
                className={`py-4 ${NavStyles.ulMaxHeight} bg-white overflow-y-scroll scrollbar-hide`}
              >
                {(currentSubNav === "Safety" &&
                  SAFETY_SUBDATA.map((data, index) => (
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
                  MODERATOR_ACAMEDY_DATA.map((data, index) => (
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
              <ButtonGroup />
            </div>
            <Image
              src="/images/close.png"
              alt="close"
              className="w-4 h-4 mt-7 cursor-pointer"
              onClick={closeAll}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
