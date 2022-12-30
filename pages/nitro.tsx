import { PageHead } from "../components/shared/PageHead";
import { HeroSection } from "../components/Nitro/HeroSectionComponent";
import { Navigation } from "../components/shared/Navigation";
import { Footer } from "../components/shared/FooterComponent";
import { useState } from "react";
import { Content } from "../components/Nitro/ContentComponent";

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
      <Navigation currentNav={"nitro"} />
      <HeroSection />
      <div className="mt-96 pt-60 md:py-0 md:mt-80 mb-72 mx-auto w-11/12">
        <Content />
      </div>
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
