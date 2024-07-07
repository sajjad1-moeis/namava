import {Navigation, EffectFade, Pagination, Autoplay} from "swiper/modules";
import {Swiper} from "swiper/react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Carousel(props) {
   ////
   const configs = [props.autoPlay ? Autoplay : "", props.fade ? EffectFade : "", props.navigation ? Navigation : "", props.pagination ? Pagination : ""];
   const filterConfig = configs.filter((item) => item);

   return (
      <>
         <Swiper
            modules={[...filterConfig]}
            {...props}
            effect={"fade"}
            autoplay={{
               delay: props.delay,
            }}
            navigation={{
               prevEl: ".prev",
               nextEl: ".next",
               disabledClass: "hidden",
            }}
            style={{
               "--swiper-navigation-color": "#fff",
               "--swiper-pagination-color": "#fff",
               "--swiper-pagination-bullet-inactive-color": "#ffda",
               "--swiper-pagination-bottom": "100px",
               color: "white",
            }}
            pagination={{
               clickable: true,
               el: ".swiper-pagination",
            }}
            breakpoints={
               props.size === "fluid"
                  ? {
                       0: {
                          initialSlide: 0,
                          spaceBetween: 10,
                          slidesPerView: 3,
                       },

                       780: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                       },
                       1080: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                       },
                       1280: {
                          slidesPerView: 9,
                          spaceBetween: 20,
                          slidesPerGroup: 9,
                       },
                    }
                  : props.size === "lg"
                  ? {
                       0: {
                          initialSlide: 0,
                          spaceBetween: 10,
                          slidesPerView: 1,
                       },
                       640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                       },
                       780: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                       },
                       1080: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                          slidesPerGroup: 4,
                       },
                    }
                  : props.responsive
            }
            className={`mySwiper ${props.className}`}
         >
            {props.children}
            {props.customBtn || (
               <>
                  <div className='btnSlider prev  bg-gradient-to-l  from-[#121212] to-[#12121200]'>
                     <button className=' top-[40%] absolute'>
                        <IoIosArrowForward />
                     </button>
                  </div>
                  <div className='btnSlider next  bg-gradient-to-r  from-[#121212] to-[#12121200]'>
                     <button className=' top-[40%] absolute'>
                        <IoIosArrowBack />
                     </button>
                  </div>
               </>
            )}
         </Swiper>
         <div
            id={props.idimg}
            style={{transition: "0.5s", height: props.src ? `866px` : "0px", maxHeight: "866px"}}
            className='overflow-hidden w-full h-full mt-10 lg:block hidden'
         >
            <img src={props.src} alt='' />
         </div>
      </>
   );
}
