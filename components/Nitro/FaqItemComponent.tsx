export const FaqItem = ({
  index,
  faq,
  openedFaq,
  isOpened,
  setOpenedFaq,
}: {
  index: number;
  faq: {
    question: string;
    answer: string;
  };
  openedFaq: number | null;
  isOpened: boolean;
  setOpenedFaq: Function;
}) => {
  return (
    <div
      className={`transition duration-300 cursor-pointer px-7 my-3 select-none rounded-lg py-8 ${
        isOpened ? "bg-[#1477CD]" : "bg-[#F6F6F6]"
      } `}
      onClick={() => {
        if (openedFaq === index) {
        //   console.log("Toggling");
          setOpenedFaq(null);
          return;
        }
        setOpenedFaq(index);
      }}
    >
      <div className="flex justify-between mb-3">
        <span
          className={`mr-2 font-bold text-lg large-font ${
            isOpened ? "text-white" : "text-black"
          }`}
        >
          {faq.question}
        </span>
        <img
          src={`/images/${isOpened ? "plus_white" : "plus_black"}.png`}
          className={`h-5 transition duration-300 ${
            isOpened ? "rotate-45" : "rotate-180"
          }`}
        />
      </div>
      {isOpened && <p className="faq-answer text-white">{faq.answer}</p>}
    </div>
  );
};
