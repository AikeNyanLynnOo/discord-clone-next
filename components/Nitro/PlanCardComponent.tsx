import { NitroPlan } from "../shared/Types";

export const PlanCard = (props: { plans: NitroPlan[] }) => {
  return (
    <div className="bg-[#F6F6F6] rounded-lg py-5 w-full my-20">
      <h3 className="w-8/12 mx-auto text-center py-14 large-font font-bold text-3xl md:text-4xl lg:text-5xl">
        Pick the plan that works best for you
      </h3>
      <div className="mb-14">
        <div className="flex justify-between items-start w-11/12 mx-auto border-b border-[#ddd] py-0">
          <span className="w-1/3 md:w-2/3 text-left font-bold py-6">
            Features
          </span>

          <div className="flex-1 text-center px-5 py-6">
            <img
              src={`/images/nitro_basic_black.svg`}
              className="w-12 md:w-20 inline-block"
            />
          </div>
          <div className="relative flex-1 text-center px-5 py-6 border-x-2 border-t-2 border-[#B845C1] rounded-t-2xl">
            <img
              src={`/images/nitro_black.svg`}
              className="w-12 md:w-20 inline"
            />

            <img
              src={`/images/most_popular.svg`}
              className="hidden md:block w-24 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 inline-block"
            />
          </div>
        </div>
        {props.plans.map((plan) => {
          return (
            <div className="flex justify-between items-center w-11/12 mx-auto border-b border-[#ddd]">
              <span className="w-1/3 md:w-2/3 text-left font-light text-sm md:text-md max-h-14 overflow-y-scroll scrollbar-hide">
                {plan.textContent}
              </span>

              <div className="flex-1 text-center px-5 py-6">
                {(plan.basic.includes(".svg") && (
                  <img
                    src={`/images/${plan.basic}`}
                    className="h-3 w-3 md:h-6 md:w-6 inline-block"
                  />
                )) || (
                  <span className="font-bold text-sm md:text-md">
                    {plan.basic}
                  </span>
                )}
              </div>
              <div className="flex-1 text-center py-6 px-5 border-x-2 border-[#B845C1]">
                {(plan.special.includes(".svg") && (
                  <img
                    src={`/images/${plan.special}`}
                    className="h-3 w-3 md:h-6 md:w-6 inline-block"
                  />
                )) || (
                  <span className="font-bold  text-sm md:text-md">
                    {plan.special}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        <div className="hidden md:flex justify-between items-start w-11/12 mx-auto py-0">
          <span className="w-1/3 md:w-2/3"></span>

          <div className="flex-1 text-center py-6">
            <button className="block mx-auto text-sm px-5 py-2 text-white text-sm bg-[#5865f2] rounded-full flex items-center">
              Subscribe Basic
            </button>
          </div>
          <div className="relative flex-1 text-center py-6 border-x-2 border-b-2 border-[#B845C1] rounded-b-2xl">
            <button className="block mx-auto text-sm px-5 py-2 text-white text-sm bg-[#5865f2] rounded-full flex items-center">
              Subscribe Nitro
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-gap-4 w-11/12 mx-auto pt-10">
          <div className="pt-5">
            <img src={`/images/nitro_basic_black.svg`} className="w-24" />
          </div>
          <div className="pt-5">
            <button className="block mx-auto text-sm px-5 py-2 text-white text-sm bg-[#5865f2] rounded-full w-full">
              Subscribe Basic
            </button>
          </div>
          <div className="pt-5">
            <img src={`/images/nitro_black.svg`} className="w-24" />
          </div>
          <div className="pt-5">
            <button className="block mx-auto text-sm px-5 py-2 text-white text-sm bg-[#5865f2] rounded-full w-full">
              Subscribe Nitro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
