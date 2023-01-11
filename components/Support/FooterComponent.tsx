import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#23272a] py-12 text-center support-footer block">
      <button className="bg-[#3BA55C] rounded-full text-white uppercase mx-auto px-20 py-2 font-bold">
        Learn More
      </button>
      <img
        src="/images/support_footer.png"
        className="hidden md:block cursor-pointer support-footer-bg"
      />
      <img
        src="/images/browsers.svg"
        className="hidden md:block support-footer-browsers"
      />
      <img
        src="/images/android.svg"
        className="hidden md:block support-footer-android"
      />
      <img
        src="/images/apple.svg"
        className="hidden md:block support-footer-apple"
      />
      <img
        src="/images/window.svg"
        className="hidden md:block support-footer-window"
      />
      <img
        src="/images/cross_platform.svg"
        className="hidden md:block support-footer-crossplatform"
      />
      <div className="support-footer-line hidden md:block " />
      <div className="block md:flex w-7/12 justify-between absolute left-1/2 bottom-1/2 translate-y-1/2 md:bottom-5 md:translate-y-0 -translate-x-1/2">
        <Link href={"/"}>
          <img src="/images/discord_white.svg" className="h-10" />
        </Link>
        <ul className="text-[#ddd] text-left">
          <li className="py-1 text-sm">Download</li>
          <li className="py-1 text-sm">Help & Support</li>
          <li className="py-1 text-sm">Feedback</li>
          <li className="py-1 text-sm">Status</li>
        </ul>
        <ul className="text-[#ddd]  text-left">
          <li className="py-1 text-sm">Company</li>
          <li className="py-1 text-sm">
            Jobs - <span className="text-lime-500">We're hiring</span>
          </li>
          <li className="py-1 text-sm">Blog</li>
          <li className="py-1 text-sm">Terms & Policy</li>
        </ul>
      </div>
    </footer>
  );
};
