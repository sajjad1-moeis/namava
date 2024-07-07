import React, {useState} from "react";
import Carousel from "../../Components/Carousel/Carousel";

import CarouselFluid from "../../Components/Carousel/CarouselFluid";

export default function PrivateNamava() {
   return (
      <div className='mt-14'>
         <CarouselFluid
            img='https://static.namava.ir/Content/Upload/Images/6612f3e6-2f38-457e-89d2-b14f5f6671e5.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400'
            arr={[6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 36, 6]}
            id='imgSlide3'
            title='اختصاصی نماوا'
         />
      </div>
   );
}
