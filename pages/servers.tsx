import { PageHead } from "../components/shared/PageHead";
import { Navigation } from "../components/shared/Navigation";
import { Footer } from "../components/shared/FooterComponent";
import { useState } from "react";
import { HeroSection } from "../components/Discover/HeroSectionComponent";
import { SearchBar } from "../components/Discover/SearchBarComponent";
import { Content } from "../components/Discover/ContentComponent";

export default function Safety() {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleSelectBox = () => {
    // console.log("toggling");
    setIsSelectOpen((prev) => !prev);
  };

  return (
    <div
      onClick={() => {
        if (isSelectOpen) {
          setIsSelectOpen(false);
        }
      }}
    >
      <PageHead pageTitle="Discord Servers - Home" />
      <Navigation currentNav={"servers"} />
      <HeroSection />
      <Content />
      <Footer
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        isSelectOpen={isSelectOpen}
        setIsSelectOpen={setIsSelectOpen}
        toggleSelectBox={toggleSelectBox}
      />
    </div>
  );
}
