import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavStyles from "../styles/Navigation.module.css";
import { useSpring, animated } from "react-spring";

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

export const Navigation = () => {
  const router = useRouter();
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  const openStyles = useSpring({
    from: { opacity: 0, backgroundColor: "red" },
    to: { opacity: 1, backgroundColor: "blue" },
  });
  const closeStyles = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
  });
  const toggleSlideNav = () => {
    setIsSlideOpen((prev) => {
      return !prev;
    });
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
          .map((navItem, key) => (
            <li key={key}>
              <Link href={navItem.link}>{navItem.text}</Link>
            </li>
          ))}
      </ul>
      <div className="flex items-center w-1/4 justify-end">
        <button className="bg-white rounded-full px-4 py-1.5 text-sm normal-font text-black">
          Login
        </button>
        <img
          src="/lines.png"
          className="inline lg:hidden ml-4 w-7 h-7 cursor-pointer"
          onClick={toggleSlideNav}
        />
      </div>
      {isSlideOpen && (
        <animated.div style={isSlideOpen ? openStyles : closeStyles}>
          <div className="h-screen w-4/12  bg-white rounded-l-md absolute z-10 right-0 top-0">
            <div className="flex justify-between mx-6">
              <div className="w-11/12 ">
                <div className="border-b py-6">
                  <img
                    src="/discord-black.png"
                    className="inline mr-4 w-8 h-8"
                  />
                  <h1 className="x-large-font inline uppercase text-[#23272a]">
                    Discord
                  </h1>
                </div>
                <ul
                  className={`py-4 ${NavStyles.ulMaxHeight} overflow-y-scroll scrollbar-hide`}
                >
                  {navItems
                    .filter((item) => item.smallNav)
                    .map((navItem, key) => (
                      <li
                        className={`${
                          router.asPath === navItem.link
                            ? "bg-[#F6F6F6] text-[#4FB3F5]"
                            : ""
                        } font-light text-sm px-4 py-3 my-2 rounded-md hover:underline`}
                      >
                        <Link href={navItem.link}>
                          {navItem.text}
                          {navItem.subNav && (
                            <img
                              src="/caret-r.png"
                              className="inline w-3 h-3 ml-3"
                            />
                          )}
                        </Link>
                      </li>
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
                onClick={toggleSlideNav}
              />
            </div>
          </div>
        </animated.div>
      )}
    </nav>
  );
};
