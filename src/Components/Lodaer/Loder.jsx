import React from "react";
import "./Loder.css";
function Loder() {
   return (
      <div className='absolute w-full h-full flex justify-center items-center -top-[20%] md:top-0 z-50'>
         <div className='loader'></div>
      </div>
   );
}

export default Loder;
