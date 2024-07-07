import React, {useState} from "react";

function useFetch() {
   const [data, setData] = useState([]);
   const [loding, setLoding] = useState(false);
   const [error, setError] = useState(false);

   const fetchData = async (url) => {
      const options = {
         method: "GET",
         headers: {
            accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDJkYzYzYTVmYjc0NjRiYzJkZTYxODE3YzFiMGQ4YyIsIm5iZiI6MTcyMDM0MjQ4NS4zMDA0NzQsInN1YiI6IjY2ODhmMzZkM2RlMDQwOTI1MDA4MzRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Ob_FK0zdARPzwpL8cvauwOAWMPlNEfeDc90O6L4INM",
         },
      };

      try {
         setLoding(true);
         const res = await fetch(url, options);
         const videos = await res.json();
         setData(videos.results);
      } catch {
         setError(true);
      } finally {
         setLoding(false);
      }
   };

   return {data, fetchData, loding};
}

export default useFetch;
