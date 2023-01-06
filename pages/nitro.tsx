import { PageHead } from "../components/shared/PageHead";
import { HeroSection } from "../components/Nitro/HeroSectionComponent";
import { Navigation } from "../components/shared/Navigation";
import { Footer } from "../components/shared/FooterComponent";
import { useState } from "react";
import { Content } from "../components/Nitro/ContentComponent";
import { Faq } from "../components/Nitro/FaqComponent";
import { NitroSubscribe } from "../components/Nitro/NitroSubscribeComponent";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

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
      <PageHead pageTitle="Nitro Benefits and Features | Discord" />
      <Navigation currentNav={"nitro"} />
      <HeroSection />
      <div className="mt-96 pt-60 md:py-0 md:mt-80 mx-auto w-11/12">
        <Content />
      </div>
      <Faq currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <NitroSubscribe />
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
