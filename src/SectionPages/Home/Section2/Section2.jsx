import React, {useEffect, useMemo, useState} from "react";
import Carousel from "../../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import posterData from "./posterData";
export default function Section2() {
   const responsive = {
      0: {
         initialSlide: 0,
         spaceBetween: 10,
         slidesPerView: 1.001,
      },
      640: {
         slidesPerView: 2,
      },
      780: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   };

   return (
      <div className='xl:-mt-32 mt-8'>
         <div>
            <Carousel navigation={true} className='px-5 lg:px-14 ' responsive={responsive}>
               {posterData.map((item) => (
                  <SwiperSlide key={item.id}>
                     <img src={item.img} className='rounded-xl' />
                  </SwiperSlide>
               ))}
            </Carousel>
         </div>
      </div>
   );
}
