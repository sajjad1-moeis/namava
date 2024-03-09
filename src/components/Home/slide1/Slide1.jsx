import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {returenrApi} from "../../../Api";
let arrImage = await returenrApi("Slide1");

export default function Slide1() {
   const [imgSizes, SetImgSizes] = useState(window.innerWidth);
   const [images, SetImg] = useState(arrImage);

   window.addEventListener("resize", () => {
      SetImgSizes(window.innerWidth);
   });
   return (
      <div className=' p-3 lg:ps-[37px]'>
         <Swiper
            style={{
               padding: "inherit",
               "--swiper-navigation-color": "#fff",
               "--swiper-pagination-color": "#fff",
            }}
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
               640: {
                  slidesPerView: 2,
               },
               768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
               },
               1024: {
                  slidesPerView: 3.05,
                  spaceBetween: 20,
                  slidesPerGroup: 3,
               },
            }}
            className='mySwiper2'
         >
            {images.map((img, index) => (
               <SwiperSlide key={index}>
                  <Link to='/'>
                     <img src={imgSizes > 799 ? img.desktop : img.mobile} alt='' />
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
