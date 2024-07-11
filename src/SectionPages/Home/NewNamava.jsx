import React, {useEffect} from "react";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";
import useFetch from "../../../Hooks/useFetch";

export default function NewNamava() {
   const {data, fetchData, loding} = useFetch();

   const url = "https://api.themoviedb.org/3/movie/now_playing?language=fa-IR&page=3";

   useEffect(() => {
      fetchData(url);
   }, []);

   return (
      <div>
         <CarouselFluid arr={data} title='تازه های نماوا' id='imgSlide7' />
      </div>
   );
}
