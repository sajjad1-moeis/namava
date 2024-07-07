import React from "react";
import Header from "../Components/Header/Header";
import Section1 from "../SectionPages/Home/Section1";
import Section2 from "../SectionPages/Home/Section2";
import SpecialCarousel from "../SectionPages/Home/SpecialCarousel";
import LiveSlide from "../SectionPages/Home/LiveCarousel";
import PrivateNamava from "../SectionPages/Home/PrivateNamava";
import FreeCarousel from "../SectionPages/Home/FreeCarousel";
import SuggestionCarousel from "../SectionPages/Home/SuggestionCarousel";
import NewNamava from "../SectionPages/Home/NewNamava";
import SerialUpdateDate from "../SectionPages/Home/SerialUpdateDate";
import SerialPersian from "../SectionPages/Home/SerialPersian";
export default function Home() {
   return (
      <>
         <Header />
         <Section1 />
         <Section2 />
         <SpecialCarousel />
         <LiveSlide />
         <PrivateNamava />
         <FreeCarousel />
         <SuggestionCarousel />
         <NewNamava />
         <SerialUpdateDate />
         <SerialPersian />
      </>
   );
}
