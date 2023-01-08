import { ContentNavList } from "./ContentNavListComponent";
import { SearchBar } from "./SearchBarComponent";

export const Content = ({
  navLink,
}: {
  navLink: string | string[] | undefined;
}) => {
  return (
    <div className="w-full md:w-9/12 mx-auto px-4 md:px-10 py-14">
      <SearchBar />
      <div>
        <ContentNavList navLink={navLink} />
      </div>
    </div>
  );
};
