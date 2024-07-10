import React, {useEffect} from "react";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";
import Loder from "../../Components/Lodaer/Loder";
import useFetch from "../../../Hooks/useFetch";
export default function SuggestionCarousel() {
   const {data, fetchData, loding} = useFetch();

   const url = "https://api.themoviedb.org/3/movie/popular?language=fa-IR&page=2&region=Iran";

   useEffect(() => {
      fetchData(url);
   }, []);
   return <>{data ? <CarouselFluid arr={data} title='پیشنهاد نماوا برای شما' id='imgSlide5' /> : <Loder />}</>;
}
