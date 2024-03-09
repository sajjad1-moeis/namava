import {returenrApi} from "../../../Api";
let images = await returenrApi("aliveFootbal");
import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {Link} from "react-router-dom";
export default function AliveFootbal() {
   const [Images, set] = useState(images);

   return (
      <div className='p-3 lg:ps-[37px]'>
         <div className='mt-10 text-xl text-white' style={{padding: "inherit"}}>
            پخش زنده
         </div>
         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            style={{
               "--swiper-navigation-color": "#fff",
            }}
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 3,
               },
               1024: {
                  slidesPerView: 4.05,
               },
            }}
            modules={[Navigation]}
            className='mySwiper4'
         >
            {Images.map((item, index) => (
               <SwiperSlide key={index} style={{borderRadius: 5, overflow: "hidden"}}>
                  <Link to='/'>
                     <img src={item.img} alt='' />
                     <div className='py-3 px-5 bg-[#222327] text-right text-sm'>
                        <p className='my-2'>فوتبال النصر - الرعد با گزارش پویا نظری</p>
                        <p className='my-2'>هفته بیست و سوم لیگ حرفه‌ای عربستان</p>
                        <p className='my-2'>زمان شروع: پنج‌شنبه ۱۷ اسفند - ساعت ۲۰:۳۰</p>
                     </div>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
