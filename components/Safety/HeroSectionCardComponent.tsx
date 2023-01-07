export const HeroSectionCard = ({
  content,
}: {
  content: { title: string; text: string };
}) => {
  return (
    <div className="w-11/12 cursor-pointer my-3 -ml-3 text-white bg-[#5865F2] hover:bg-[#6571F3] rounded-lg p-3">
      <h5 className="large-font font-bold text-xl">{content.title}</h5>
      <p className="text-sm leading-6 py-3">{content.text}</p>
      <div>
        <span className="text-sm font-bold">Learn more</span>
        <img src="/images/arrow_right.svg" className="inline ml-3"/>
      </div>
    </div>
  );
};
