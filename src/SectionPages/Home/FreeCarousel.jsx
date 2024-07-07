import React, {useState} from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import BoxSlideFluid from "../../Components/BoxSlideFluid/BoxSlideFluid";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";

export default function FreeCarousel() {
   return (
      <>
         <CarouselFluid
            img='https://static.namava.ir/Content/Upload/Images/b52b0b30-b88d-450b-9f73-274432cbcdb9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294'
            arr={[3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5]}
            id='imfSlide4'
            title='رایگان در نماوا'
         />
         ;
      </>
   );
}
