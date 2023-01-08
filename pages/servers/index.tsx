import { PageHead } from "../../components/shared/PageHead";
import { Navigation } from "../../components/shared/Navigation";
import { Footer } from "../../components/shared/FooterComponent";
import { useState } from "react";
import { HeroSection } from "../../components/Discover/HeroSectionComponent";
import { Content } from "../../components/Discover/ContentComponent";

import { useRouter } from "next/router";

export default function Servers() {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const router = useRouter();

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
      <Content navLink={""} />
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
