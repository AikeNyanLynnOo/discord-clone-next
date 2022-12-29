import { PageHead } from "../components/shared/PageHead";
import { HeroSection } from "../components/Nitro/HeroSectionComponent";
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
      <PageHead pageTitle="Nitro Benefits and Features | Discord" />
      <Navigation navBgColor={"#BB87F4"} />
      <HeroSection />
      <div className="bg-gray-100 h-screen"></div>
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
