import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
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
               {[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9].map((item) => (
                  <SwiperSlide key={item * Math.random() * 9}>
                     <img
                        src='https://static.namava.ir/Content/Upload/Images/115d493e-e5ce-4911-8ddd-06d29e0424ce.jpg?anchor=middlecenter&crop=auto&scale=both&w=750&h=300'
                        className='rounded-xl'
                     />
                  </SwiperSlide>
               ))}
            </Carousel>
         </div>
      </div>
   );
}
