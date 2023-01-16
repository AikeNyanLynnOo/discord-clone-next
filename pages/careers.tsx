import { PageHead } from "../components/shared/PageHead";
import { HeroSection } from "../components/Careers/HeroSectionComponent";
import { Navigation } from "../components/shared/Navigation";
import { Footer } from "../components/shared/FooterComponent";
import { useState } from "react";
import { MidContent } from "../components/Careers/MidContentComponent";
import { WorkCategories } from "../components/Careers/WorkCategoriesComponent";
import { CareerInfoCard } from "../components/Careers/CareerInfoCard";
import { ExperienceGrid } from "../components/Careers/ExperienceGrid";
import { FooterCarousel } from "../components/Careers/FooterCarousel";

export default function Careers() {
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
      <PageHead pageTitle="Jobs & Career Opportunies at Discord" />
      <Navigation currentNav={"careers"} />
      <HeroSection />
      <MidContent />
      <WorkCategories />
      <CareerInfoCard />
      <ExperienceGrid />
      <FooterCarousel />
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
