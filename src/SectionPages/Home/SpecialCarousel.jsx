import React, {useEffect} from "react";
import CarouselFluid from "../../Components/Carousel/CarouselFluid";
import useFetch from "../../../Hooks/useFetch";
import Loder from "../../Components/Lodaer/Loder";
export default function SpecialCarousel() {
   const {data, fetchData, loding} = useFetch();

   const url = "https://api.themoviedb.org/3/movie/upcoming?language=fa-IR&page=1";

   useEffect(() => {
      fetchData(url);
   }, []);

   return (
      <div className='mt-10'>
         {data ? (
            <CarouselFluid
               img='https://static.namava.ir/Content/Upload/Images/5ee3e79b-8ae3-46bf-8676-759116a1e476.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294'
               arr={data}
               id='imgSlide2'
               title='ویژه'
            />
         ) : (
            <Loder />
         )}
      </div>
   );
}
