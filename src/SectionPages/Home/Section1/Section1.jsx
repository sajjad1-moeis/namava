import React, {useEffect, useMemo, useState} from "react";
import Carousel from "../../../Components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";
import useFetch from "../../../../Hooks/useFetch";
import {FaPlay} from "react-icons/fa6";
import Loder from "../../../Components/Lodaer/Loder";
import {Button} from "@material-tailwind/react";
import {LuInfo} from "react-icons/lu";
import "./Section1.css";

export default function Section1() {
   const [allVideo, setAllVideo] = useState([]);
   const {data, fetchData, loding} = useFetch();
   const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=c42dc63a5fb7464bc2de61817c1b0d8c&language=fa-IR&append_to_response=images,credits&include_image_language=en,fa,null";
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
      <div className='max-h-screen min-h-[70vh] lg:min-h-screen'>
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

               {allVideo.slice(0, 10)?.map((item) => (
                  <SwiperSlide key={item.id}>
                     <div
                        className=' h-full bg-cover bg-center min-h-[70vh] lg:min-h-screen'
                        style={{backgroundImage: ` url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}
                     >
                        <div className='sli'></div>
                        <div className='descVideo'>
                           <img src={`https://image.tmdb.org/t/p/original${item.logoUrl}`} alt='' />
                           <p className='text-lg md:text-2xl mt-5 text-center md:text-right'>{item.title}</p>

                           <div className='md:block hidden'>
                              <div className='bg-warning mt-5'>12+</div>
                              <p className=' mt-5  md:max-w-[40%] leading-8 text-sm'>
                                 {item.overview.length > 0
                                    ? item.overview.substring(0, 150)
                                    : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"}
                                 ...
                              </p>
                           </div>

                           <div className='flex gap-3 mt-7 justify-center md:justify-start'>
                              <Button className=' text-sm w-max p-3 font-thin hover:bg-blue-500 hover:text-white rounded-xl bg-white text-black flex-center'>
                                 <FaPlay />
                                 خرید اشتراک
                              </Button>
                              <Button className=' text-sm w-max p-3 font-thin  rounded-xl bg-white/20'>پیش نمایش</Button>
                              <Button variant='text' className='text-white md:flex-center px-0 hidden  text-sm font-thin  rounded-xl'>
                                 <LuInfo className='text-xl' />
                                 توضیحات بیشتر
                              </Button>
                           </div>
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
