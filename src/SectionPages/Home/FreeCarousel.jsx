import React, {useEffect, useState} from "react";
import Loder from "../../Components/Lodaer/Loder";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";
import useFetch from "../../../Hooks/useFetch";

export default function FreeCarousel() {
   const {data, fetchData, loding} = useFetch();

   const url = "https://api.themoviedb.org/3/movie/now_playing?language=fa-IR&page=2";

   useEffect(() => {
      fetchData(url);
   }, []);
   return <>{data ? <CarouselFluid arr={data} id='imfSlide4' title='رایگان در نماوا' /> : <Loder />}</>;
}
