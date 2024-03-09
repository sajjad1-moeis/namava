import React from "react";
import FirstCarousel from "./FirstCarousel/FirstCarousel";
import Slide1 from "./slide1/Slide1";
import SpecialCarousel from "./specialCarousel/SpecialCarousel";
import AliveFootbal from "./aliveCarousel/AliveCarousel";
import SpitialNamava from "./spcialNamava/SpitialNamava";
import FreeNamava from "./FreeNamava/FreeNamava";
import Suggestion from "./suggestion/Suggestion";
import NewNamava from "./newNamava/NewNamava";
import Serial from "./Serial/Serial";
import BestNamava from "./BestNamava/BestNamava";
export default function Home() {
   return (
      <>
         <FirstCarousel />
         <Slide1 />
         <SpecialCarousel />
         <AliveFootbal />
         <SpitialNamava />
         <FreeNamava />
         <Suggestion />
         <NewNamava />
         <Serial />
         <BestNamava />
      </>
   );
}
