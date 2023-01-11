export const SupportCard = ({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) => {
  return (
    <div className="hover:-translate-y-2 my-3 mx-2 py-10 cursor-pointer h-auto md:h-60 flex flex-col justify-center px-5 text-center shadow-lg w-11/12 md:w-52">
      <img src={`/images/${image}`} className="w-1/3 mx-auto" />
      <span className="large-text text-xl text-[#404eed] py-3">{title}</span>
      <p className="large-text text-sm">{body}</p>
    </div>
  );
};
