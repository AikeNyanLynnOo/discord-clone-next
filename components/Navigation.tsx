import Link from "next/link";
import NavStyles from "../styles/Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={`${NavStyles.nav} w-full px-10 py-6 flex items-center justify-between`}>
      <div className="flex items-center w-1/4 justify-start">
        <img src="/discord.png" className="inline mr-4 w-7 h-7" />
        <h1 className="x-large-font inline uppercase text-white">Discord</h1>
      </div>
      <ul className="normal-font w-2/4 hidden lg:flex justify-between items-center text-white font-semibold">
        <li>
          <Link href={"/download"}>Download</Link>
        </li>
        <li>
          <Link href={"/nitro"}>Nitro</Link>
        </li>
        <li>
          <Link href={"/discover"}>Discover</Link>
        </li>
        <li>
          <Link href={"/safety"}>Safety</Link>
        </li>
        <li>
          <Link href={"/support"}>Support</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/careers"}>Careers</Link>
        </li>
      </ul>
      <div className="flex items-center w-1/4 justify-end">
        <button className="bg-white rounded-full px-4 py-1 text-sm normal-font text-black">
          Login
        </button>
        <img
          src="/lines.png"
          className="inline lg:hidden ml-4 w-7 h-7 cursor-pointer"
        />
      </div>
    </nav>
  );
};
