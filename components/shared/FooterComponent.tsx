import Link from "next/link";
import Image from "next/image";
import {
  COUNTRIES,
  PRODUCT_LINKS,
  COMPANY_LINKS,
  RESOURCE_LINKS,
  POLICY_LINKS,
} from "./env";

export const Footer = (props: any) => {
  return (
    <footer className="bg-[#23272A] w-100">
      <div className="footer-wrapper py-0 md:py-10 ">
        <div className="block lg:flex justify-between mx-10 md:mx-20 py-10 border-solid border-b border-[#5865f2]">
          <div className="flex-none mr-32 mb-10">
            <h1 className="x-large-font font-light text-[#5865f2] text-3xl mb-3">
              IMAGINE A PLACE
            </h1>
            <div className="relative bg-gray">
              <div
                id="selectBox"
                className="text-white rounded-lg h-8 w-fit flex items-center cursor-pointer select-none"
                onClick={() => props.toggleSelectBox()}
              >
                <Image
                  src={`/images/countries/${props.selectedCountry + 1}.png`}
                  alt="country"
                  className="inline mr-4 w-6 h-5"
                />
                {COUNTRIES[props.selectedCountry]}
                <Image
                  src="/images/caret-d.png"
                  alt="caret-d"
                  className="inline ml-3 w-2 h-2"
                />
              </div>
              <ul
                className={`${
                  props.isSelectOpen ? "absolute" : "hidden"
                } bottom-9 z-20 max-h-60 overflow-y-scroll bg-white py-2 rounded-md border`}
              >
                {COUNTRIES.map((country, index) => (
                  <li
                    value={index}
                    key={index}
                    onClick={() => props.setSelectedCountry(index)}
                    className="py-2 px-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                  >
                    <Image
                      src={`/images/countries/${index + 1}.png`}
                      alt="country"
                      className="inline mr-4 w-6 h-5"
                    />
                    {country}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center mt-5">
              <Link href="https://twitter.com/">
                <Image
                  src={`/images/twitter.png`}
                  alt="twitter"
                  className="inline mr-8 w-6 h-6"
                />
              </Link>
              <Link href="https://www.instagram.com/">
                <Image
                  src={`/images/instagram.png`}
                  alt="instagram"
                  className="inline mr-8 w-6 h-6"
                />
              </Link>
              <Link href="https://www.facebook.com/">
                <Image
                  src={`/images/facebook.png`}
                  alt="facebook"
                  className="inline mr-8 w-6 h-6"
                />
              </Link>
              <Link href="https://www.youtube.com/">
                <Image
                  src={`/images/youtube.png`}
                  alt="youtube"
                  className="inline w-6 h-6 mt-2"
                />
              </Link>
            </div>
          </div>

          <div className="grow grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-[#5865f2]">Product</h3>
              <ul className="text-white">
                {PRODUCT_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    className="my-2 text-sm block hover:underline"
                    href={"/"}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-[#5865f2]">Company</h3>
              <ul className="text-white">
                {COMPANY_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    className="my-2 text-sm block hover:underline"
                    href={"/"}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-[#5865f2]">Resources</h3>
              <ul className="text-white">
                {RESOURCE_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    className="my-2 text-sm block hover:underline"
                    href={"/"}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-[#5865f2]">Policies</h3>
              <ul className="text-white">
                {POLICY_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    className="my-2 text-sm block hover:underline"
                    href={"/"}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-10 md:px-20 py-10">
          <Link href="/">
            <Image
              src="/images/discord.png"
              alt="discord"
              className="inline mr-4 w-8 h-8"
            />
            <h1 className="x-large-font inline text-white">Discord</h1>
          </Link>
          <button className="px-5 py-2 text-white text-sm bg-[#5865f2] rounded-full flex items-center">
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
};
