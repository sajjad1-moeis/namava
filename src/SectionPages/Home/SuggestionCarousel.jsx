import React from "react";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";

export default function SuggestionCarousel() {
   return (
      <>
         <CarouselFluid
            img='https://static.namava.ir/Content/Upload/Images/883a0c99-4918-4eb2-9578-d0d347afab8b.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294'
            arr={[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]}
            title='پیشنهاد نماوا برای شما'
            id='imgSlide5'
         />
      </>
   );
}
