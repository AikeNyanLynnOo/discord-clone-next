export const contents = [
  {
    img: "/images/home_content1.svg",
    title: "Create an invite-only place where you belong",
    text: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
  },
  {
    img: "/images/home_content2.svg",
    title: "Where hanging out is easy",
    text: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
  },
  {
    img: "/images/home_content3.svg",
    title: "From few to a fandom",
    text: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
  },
];

export const FlexContent = () => {
  return (
    <ul className="h-auto w-100 py-10 md:py-24">
      {contents.map((content, index) => (
        <li
          key={index}
          className={`block lg:flex justify-center w-full px-10 py-16 md:p-16 lg:p-20 ${
            index % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"
          }`}
        >
          <img
            className={`w-96 sm:w-3/4 mx-auto ${
              index % 2 === 0 ? "" : "order-last"
            }`}
            src={content.img}
          />
          <div
            className={`ml-0 mt-20 ${index % 2 === 0 ? "lg:ml-32" : "lg:ml-0"}`}
          >
            <h2 className="large-font font-bold text-3xl md:text-4xl lg:text-5xl mb-5">
              {content.title}
            </h2>
            <p>{content.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
