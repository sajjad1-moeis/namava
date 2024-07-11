import React, {useEffect} from "react";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";
import useFetch from "../../../Hooks/useFetch";

export default function SerialUpdateDate() {
   const url = "https://api.themoviedb.org/3/tv/airing_today?language=fa-IR&page=2";
   const {data, fetchData, loding} = useFetch();

   useEffect(() => {
      fetchData(url);
   }, []);
   return (
      <div>
         <CarouselFluid title='سریال های بروز شده' arr={data} id='imgSlide6' />
      </div>
   );
}
