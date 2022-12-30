import { PageHead } from "../components/shared/PageHead";
import { HomeContentWrapper } from "../components/Home/ContentComponent";
import { HeroSection } from "../components/Home/HeroSectionComponent";
import { Navigation } from "../components/shared/Navigation";
import { Footer } from "../components/shared/FooterComponent";
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
      <Navigation currentNav={"home"} />
      <HeroSection />
      <HomeContentWrapper />
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
