import { ContentCard } from "./ContentCardItemComponent";
import { PlanCard } from "./PlanCardComponent";
import { nitroGridContents, nitroPlans } from "../shared/env";

export const Content = () => {
  return (
    <div>
      <h3 className="text-center py-14 large-font font-bold text-3xl md:text-4xl lg:text-5xl">
        Popular Nitro Perks
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nitroGridContents.map((content, index) => {
          return (
            <ContentCard
              key={index}
              textContent={content.textContent}
              imgSrc={content.imgSrc}
            />
          );
        })}
      </div>
      <button className="py-3 px-12 mt-10 block w-fit mx-auto text-white text-lg font-light bg-[#23272A] rounded-full hover:shadow-2xl transition delay-100 duration-300 hover:-translate-y-1 ">
        Show all perks
      </button>

      <PlanCard plans={nitroPlans} />
    </div>
  );
};
