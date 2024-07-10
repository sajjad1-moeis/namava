import React, {useEffect} from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Loder from "../../Components/Lodaer/Loder";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";
import useFetch from "../../../Hooks/useFetch";

export default function PrivateNamava() {
   const {data, fetchData, loding} = useFetch();

   const url = "https://api.themoviedb.org/3/movie/now_playing?language=fa-IR&page=1";

   useEffect(() => {
      fetchData(url);
   }, []);

   return <div className='mt-14'>{data ? <CarouselFluid arr={data} id='imgSlide3' title='اختصاصی نماوا' /> : <Loder />}</div>;
}
