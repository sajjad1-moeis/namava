import React, {useEffect, useState} from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import BoxSlideFluid from "../../Components/BoxSlideFluid/BoxSlideFluid";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";

export default function SpecialCarousel() {
   const [src, setSrc] = useState("");
   const [index2, setIndex] = useState("");

   return (
      <div className='mt-10'>
         <CarouselFluid
            img='https://static.namava.ir/Content/Upload/Images/5ee3e79b-8ae3-46bf-8676-759116a1e476.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294'
            arr={[4, 4, 4, 4, 4, 44, 4, 4, 4, 4, 4, 44, 4, 4]}
            id='imgSlide2'
            title='ویژه'
         />
      </div>
   );
}
