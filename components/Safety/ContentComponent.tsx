import { Card } from "../Safety/CardComponent";
import { SAFETY_CONTENTS } from "../shared/env";

export const Content = () => {
  return (
    <div className="py-10 px-0 md:px-10 xl:px-24">
      {SAFETY_CONTENTS.map((content, index) => (
        <Card
          key={index}
          title={content.title}
          image={content.image}
          bodyContents={content.bodyContents}
          subCards={content.subCards}
        />
      ))}
    </div>
  );
};
