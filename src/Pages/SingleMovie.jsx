import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

function SingleMovie() {
   const {idMovie} = useParams();
   async function getMovie() {
      const movieResponse = await fetch(
         `https://api.themoviedb.org/3/movie/${idMovie}?api_key=c42dc63a5fb7464bc2de61817c1b0d8c&language=fa-IR&append_to_response=images&include_image_language=en,null`
      );
      const movieData = await movieResponse.json();

      const imagesResponse = await fetch(
         `https://api.themoviedb.org/3/movie/${idMovie}/images?api_key=c42dc63a5fb7464bc2de61817c1b0d8c&language=en-US&append_to_response=images&include_image_language=en,jp,null`
      );
      const imagesData = await imagesResponse.json();
      console.log(imagesData);
   }
   useEffect(() => {
      getMovie();
   }, []);
   return <></>;
}

export default SingleMovie;
