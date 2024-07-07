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
   const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c42dc63a5fb7464bc2de61817c1b0d8c&language=fa-IR&append_to_response=images,credits&include_image_language=en,fa,null";
   const re = async () => {
      const moviesWithDetails = await Promise.all(
         data.map(async (movie) => {
            const movieResponse = await fetch(
               `https://api.themoviedb.org/3/movie/${movie.id}?api_key=c42dc63a5fb7464bc2de61817c1b0d8c&language=fa-IR&append_to_response=images,credits&include_image_language=en,fa,null`
            );
            const movieData = await movieResponse.json();
            const logo = movieData.images?.logos[0]?.file_path;
            return {
               ...movie,
               credits: movieData.credits,
               logoUrl: logo,
            };
         })
      );
      setAllVideo(moviesWithDetails);
   };
   useMemo(async () => {
      await fetchData(url);
   }, []);

   useEffect(() => {
      re();
   }, [data]);

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
      <div className='min-h-[70vh] max-h-screen  md:min-h-screen'>
         {loding ? (
            <Loder />
         ) : (
            <Carousel {...settingCarousel} custombtn>
               <div className='md:block hidden  md:max-h-screen'>
                  <button className='prev p-3.5 bg-white/25 rounded-full text-3xl absolute top-3/4 text-gray-500 transition-colors hover:text-white left-14 z-40'>
                     <IoIosArrowBack />
                  </button>
                  <button className='next p-3.5 bg-white/25 rounded-full text-3xl absolute top-3/4 text-gray-500 transition-colors hover:text-white left-32 z-40'>
                     <IoIosArrowForward />
                  </button>
               </div>
               {allVideo.slice(0, 8)?.map((item) => (
                  <SwiperSlide key={item.id}>
                     <div className='relative'>
                        <div className='s'></div>
                        <img className='md:hidden size-full max-h-[70vh]' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='' />
                        <img className='md:block hidden size-full max-h-screen' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt='' />
                        <div className='absolute w-full h-full md:block  right-0 hidden bg-black opacity-30 top-0'></div>
                        <div className='hidden md:absolute  top-1/2 left-1/2 -translate-x-1/2 md:right-0 md:translate-x-0'>
                           <img className=' mx-auto md:mx-0 lg:max-w-[10%]' src={`https://image.tmdb.org/t/p/original${item.logoUrl}`} alt='' />
                           <p className='text-xl mt-5 text-center'>{item.title}</p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
               <div className='swiper-pagination md:hidden'></div>
            </Carousel>
         )}
      </div>
   );
}
