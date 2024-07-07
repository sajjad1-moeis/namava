import React, {useState} from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import BoxSlideFluid from "../../Components/BoxSlideFluid/BoxSlideFluid";

export default function CarouselFluid({title, img, arr, id}) {
   const [src, setSrc] = useState("");
   const [index2, setIndex] = useState("");

   return (
      <div className='mt-5  text-white'>
         <p className='text-white mb-5 text-xl px-5 lg:px-16 '>{title}</p>
         <Carousel size='fluid' idimg={id} className='px-7 lg:px-14 pb-10' navigation={true} src={src} speed={600}>
            {arr.map((item, index) => (
               <SwiperSlide>
                  <BoxSlideFluid
                     index2={index2}
                     index={index}
                     idScrol={id}
                     setSrc={setSrc}
                     setIndex={setIndex}
                     src={src}
                     className={src && index === index2 ? "active" : ""}
                     img={img}
                  />
               </SwiperSlide>
            ))}
         </Carousel>
      </div>
   );
}
