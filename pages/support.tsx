import { PageHead } from "../components/shared/PageHead";
import { NavBar } from "../components/Support/NavBarComponent";
import { useState } from "react";
import { HeroSection } from "../components/Support/HeroSectionComponent";
import { Content } from "../components/Support/ContentComponent";
import { Footer } from "../components/Support/FooterComponent";

export default function Nitro() {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isNavSelectOpen, setIsNavSelectOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [currentTab, setCurrentTab] = useState(0);

  const toggleSelectBox = () => {
    // console.log("toggling");
    setIsSelectOpen((prev) => !prev);
  };

  const toggleNavSelectBox = () => {
    // console.log("Toggling");
    setIsNavSelectOpen((prev) => !prev);
  };

  const toggleNav = () => {
    // console.log("Toggling");
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div
      onClick={() => {
        if (isSelectOpen) {
          setIsSelectOpen(false);
        }
      }}
    >
      <PageHead pageTitle="Discord" />
      <NavBar
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        isNavSelectOpen={isNavSelectOpen}
        setIsNavSelectOpen={setIsNavSelectOpen}
        toggleNavSelectBox={toggleNavSelectBox}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        toggleNav={toggleNav}
      />
      <HeroSection />
      <Content />
      <Footer />
    </div>
  );
}
