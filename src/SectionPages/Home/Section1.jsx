import React, {useEffect, useMemo, useState} from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";
import useFetch from "../../../Hooks/useFetch";

import Loder from "../../Components/Lodaer/Loder";

export default function Section1() {
   const [allVideo, setAllVideo] = useState([]);
   const {data, fetchData, loding} = useFetch();
   const url = "https://api.themoviedb.org/3/movie/now_playing?language=fa-IR&page=1";
   useMemo(() => {
      fetchData(url);
   }, []);

   const settingCarousel = {
      loop: true,
      slidesPerView: 1,
      autoPlay: true,
      delay: 3000,
      navigation: true,
      pagination: true,
      fade: "true",
      speed: 450,
      grabCursor: "true",
   };

   return (
      <div className='min-h-[65vh] md:min-h-screen'>
         {loding ? (
            <Loder />
         ) : (
            <Carousel {...settingCarousel} customBtn>
               <div className='md:block hidden'>
                  <button className='prev p-3.5 bg-white/25 rounded-full text-3xl absolute top-3/4 text-gray-500 transition-colors hover:text-white left-14 z-40'>
                     <IoIosArrowBack />
                  </button>
                  <button className='next p-3.5 bg-white/25 rounded-full text-3xl absolute top-3/4 text-gray-500 transition-colors hover:text-white left-32 z-40'>
                     <IoIosArrowForward />
                  </button>
               </div>
               {data.slice(0, 8)?.map((item) => (
                  <SwiperSlide key={item.imgLab} className='max-h-screen h-full'>
                     <>
                        <div className='s  absolute w-full h-full opacity-50 md:opacity-100'></div>
                        <img className='md:hidden min-h-[65vh] object-cover  w-full ' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt='' />
                        <img className='hidden md:block w-full h-full' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt='' />{" "}
                     </>
                  </SwiperSlide>
               ))}
               <div className='swiper-pagination md:hidden'></div>
            </Carousel>
         )}
      </div>
   );
}
