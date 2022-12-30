import { NitroCardContent } from "../shared/Types";
export const Card = ({
  headerImg,
  cardType,
  cardContents,
}: {
  headerImg: string;
  cardType: string;
  cardContents: NitroCardContent[];
}) => {
  return (
    <div
      className={`flex flex-col justify-between flex-1 card-${cardType} rounded-lg p-5 m-2.5`}
    >
      <div className="mb-3">
        <img src={`/images/${headerImg}`} />
        <ul className="text-white py-3 text-lg font-light">
          {cardContents.map((cardContent, index) => {
            return (
              <li key={index} className="flex items-center py-2">
                <img
                  src={`/images/${cardContent.imgSrc}`}
                  className="h-5 w-5"
                />
                <p className="ml-2">{cardContent.textContent}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="text-lg bottom-10 rounded-full bg-white block mx-auto py-3 w-full">
        Subscribe
      </button>
    </div>
  );
};
