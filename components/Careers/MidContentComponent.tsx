export const MidContent = () => {
  return (
    <div className="py-20 px-10">
      <h1 className="large-font text-xl text-2xl md:text-3xl lg:text-5xl text-left md:text-center font-bold text-[#23272A]">
        Come build belonging with us
      </h1>
      <div className="my large-font text-[#23272A] py-10 md:w-11/12 mx-auto text-lg leading-8">
        <p className="mb-5">
          Discord is working toward an inclusive world where no one feels like
          an outsider, where genuine human connection is a click, text chat, or
          voice call away. A place where everyone can find belonging.
          Challenging? Heck yes. Rewarding? Double heck yes. It's a mission that
          gives us the chance to positively impact millions of people all over
          the world.
        </p>
        <p>
          So if this strikes a chord, and you're equally comfortable
          communicating in memes and gifs as you are in code or decks, come
          build belonging with us!
        </p>
      </div>
      <div className="flex large-font items-center text-[#23272A] w-11/12 mx-auto py-10">
        <div className="mr-8">
          <h2 className="font-bold text-xl text-2xl md:text-3xl mb-6">
            Work with people who care.
          </h2>
          <p className="leading-8">
            Our people, much like our users, can't be put in a box. The quirky
            and unique cast of characters that work together at Discord may be
            intrepid travelers from all walks of life, but there's a reason
            we've all ended up here. We care about each other, the work we do,
            and the future we're building — like, a lot. We pull our own weight
            and treat each other with extreme empathy. No cogs or jerks allowed.
          </p>
        </div>
        <img src="/images/career_content1.jpeg" className="rounded-2xl w-1/2" />
      </div>
      <div className="flex large-font items-center text-[#23272A] w-11/12 mx-auto py-10">
        <div className="ml-8">
          <h2 className="font-bold text-xl text-2xl md:text-3xl mb-6">
            Join a culture that builds belonging.
          </h2>
          <p className="leading-8">
            Imagine a workplace where everyone belongs. At Discord, we aren't
            just imagining this place, we're creating it. We're building an
            inclusive, diverse, and welcoming space that reflects the world we
            live, play, and work in — because we know that with diversity comes
            better ideas, a better product, a better work environment, and
            ultimately a better company.
          </p>
        </div>
        <img
          src="/images/career_content2.jpeg"
          className="rounded-2xl w-1/2  order-last md:order-first"
        />
      </div>
    </div>
  );
};
