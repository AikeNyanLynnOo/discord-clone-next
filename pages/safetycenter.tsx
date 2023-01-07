import { PageHead } from "../components/shared/PageHead";
import { HeroSection } from "../components/Safety/HeroSectionComponent";
import { Navigation } from "../components/shared/Navigation";
import { Footer } from "../components/shared/FooterComponent";
import { useState } from "react";
import { Content } from "../components/Safety/ContentComponent";

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
      <PageHead pageTitle="Discord Safety Center" />
      <Navigation currentNav={"safetycenter"} />
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
