import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
export default function LiveSlide() {
   return (
      <div className='mt-10 lg:mt-2 relative'>
         <p className='text-white mb-5 text-xl px-5 lg:px-16 '>پخش زنده</p>
         <Carousel size='lg' className=' px-5 md:px-14 swiper' navigation={true} speed={700}>
            {[6, 6, 6, 66, 6, 6, 666, 6, 66].map((item) => (
               <SwiperSlide className='rounded-lg overflow-hidden'>
                  <img
                     src='https://static.namava.ir/Content/Upload/Images/c5ac3294-898b-44de-a38d-5c0c0b3f7776.jpg?anchor=middlecenter&crop=auto&scale=both&w=600&h=250'
                     alt=''
                  />
                  <div className='p-5 bg-[#222327] text-white text-sm'>
                     <p className='my-2'>فوتبال انگلستان - اسلوواکی (گزارش انگلیسی)</p>
                     <p className='my-2'>یک‌هشتم نهایی یورو ۲۰۲۴ </p>
                     <p className='my-2'>زمان شروع : یک‌شنبه ۱۰ تیر - ساعت ۱۹:۳۰</p>
                  </div>
               </SwiperSlide>
            ))}
         </Carousel>
      </div>
   );
}
