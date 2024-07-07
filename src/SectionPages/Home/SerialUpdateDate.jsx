import React from "react";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";

export default function SerialUpdateDate() {
   return (
      <div>
         <CarouselFluid
            img='https://static.namava.ir/Content/Upload/Images/0c012c46-16e6-4bd5-94c5-08137c1b8bae.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294'
            title='سریال های بروز شده'
            arr={[1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]}
            id='imgSlide6'
         />
      </div>
   );
}
