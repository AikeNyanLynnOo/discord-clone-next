import Link from "next/link";
import { COUNTRIES } from "../shared/env";

export const NavBar = (props: any) => {
  return (
    <nav className="bg-white text-[#5865f2] relative">
      <div
        className={`w-full px-10 lg:px-24 py-6 flex items-center justify-between `}
      >
        <Link href="/" className="flex items-center w-1/4 justify-start">
          <img
            src="/images/discord-transparent.png"
            className="inline mr-4 w-8 h-8"
          />
          <h1 className="x-large-font inline">Discord</h1>
        </Link>
        <div className="flex">
          <img
            src="/images/menu_blue.png"
            className="h-5 w-5 block md:hidden cursor-pointer"
            onClick={()=>props.toggleNav()}
          />
          <ul className="text-sm font-light hidden md:flex">
            <li className="hover:underline mx-4">
              <Link href={"#"}>Feedback</Link>
            </li>
            <li
              className="hover:underline mx-4 relative"
              onClick={(e) => {
                props.toggleNavSelectBox();
                e.stopPropagation();
              }}
            >
              <Link href={"#"} className="flex items-center">
                {COUNTRIES[props.selectedCountry]}{" "}
                <img src="/images/caret-d-blue.png" className="h-2 w-2 ml-3" />
              </Link>
              {props.isNavSelectOpen && (
                <ul className="absolute top-10 max-h-[calc(100vh-_100px)] overflow-y-scroll scrollbar-hide px-5 w-36 py-3 bg-white rounded-md border text-black">
                  {COUNTRIES.map((country, index) => {
                    return (
                      <li
                        className="py-2 cursor-pointer"
                        key={index}
                        onClick={(e) => {
                          props.toggleNavSelectBox();
                          e.stopPropagation();
                          props.setSelectedCountry(index);
                        }}
                      >
                        {country}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            <li className="hover:underline mx-4">
              <Link href={"#"}>Submit a request</Link>
            </li>
          </ul>
          <Link href="#" className="text-sm font-light hover:underline mx-4">
            Sign in
          </Link>
        </div>
      </div>

      {props.isNavOpen && (
        <ul className="absolute top-20 z-30 bg-white border text-center w-full block md:hidden">
          <ul className="text-sm font-light">
            <li className="hover:underline mx-4 py-4">
              <Link href={"#"}>Feedback</Link>
            </li>
            <li
              className="hover:underline mx-4 relative py-4"
              onClick={(e) => {
                props.toggleNavSelectBox();
                e.stopPropagation();
              }}
            >
              <Link href={"#"} className="flex items-center w-fit mx-auto">
                {COUNTRIES[props.selectedCountry]}{" "}
                <img src="/images/caret-d-blue.png" className="h-2 w-2 ml-3" />
              </Link>
              {props.isNavSelectOpen && (
                <ul className="absolute top-10 max-h-[calc(100vh-_100px)] overflow-y-scroll scrollbar-hide px-5 w-full py-3 bg-white rounded-md border text-black mx-auto">
                  {COUNTRIES.map((country, index) => {
                    return (
                      <li
                        className="py-2 cursor-pointer"
                        key={index}
                        onClick={(e) => {
                          props.toggleNavSelectBox();
                          e.stopPropagation();
                          props.setSelectedCountry(index);
                        }}
                      >
                        {country}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            <li className="hover:underline mx-4 py-4">
              <Link href={"#"}>Submit a request</Link>
            </li>
          </ul>
        </ul>
      )}
    </nav>
  );
};
