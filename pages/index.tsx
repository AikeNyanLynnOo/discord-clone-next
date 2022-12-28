import { PageHead } from "../components/PageHead";
import { FlexContent } from "../components/FlexContentComponent";
import { HeroSection } from "../components/HeroSectionComponent";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/FooterComponent";
import { useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleSelectBox = () => {
    console.log("toggling");
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
      <PageHead pageTitle="Discord Clone By a1k3" />
      <Navigation />
      <HeroSection />
      <FlexContent />
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
