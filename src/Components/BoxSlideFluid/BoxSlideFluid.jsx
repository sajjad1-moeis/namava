import React, {useEffect, useRef, useState} from "react";
import "./BoxSlideFluid.css";
import {IoHeartSharp} from "react-icons/io5";
export default function BoxSlideFluid(props) {
   const [size, setSize] = useState(window.innerWidth);
   const [is, setIs] = useState(false);
   const resizeWindow = () => {
      window.onresize = () => {
         setSize(window.innerWidth);
      };
   };

   useEffect(() => {
      resizeWindow();
      return () => {
         resizeWindow();
      };
   }, []);

   const ClickHandeler = (img) => {
      if (is && props.index2 === props.index) {
         props.setSrc("");
         setIs(false);
      } else {
         props.setSrc(img);
         document.getElementById(props.idScrol).scrollIntoView();
         props.setIndex(props.index);
         setIs(true);
      }
   };

   return (
      <div className='boxFluidSlide relative cursor-pointer'>
         <div className={`rounded  ${props.className}`}>
            <div
               className='p-5 bg'
               onClick={() => {
                  props.setSrc("");
                  props.setIndex("");
               }}
            >
               <div></div>
            </div>
            <div className='relative hoverBox'>
               <img
                  src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                  className='rounded-md h-72'
                  onClick={size > 1080 ? ClickHandeler : undefined}
               />
               <div
                  className='hoverContainer flex  items-end px-5 py-5 h-full'
                  onClick={() => (size > 1080 ? ClickHandeler(`https://image.tmdb.org/t/p/original${props.backdrop_path}`) : undefined)}
               >
                  <div className=''>
                     <p>فیلم - 1399</p>
                     <div className='flex items-center my-2 gap-1'>
                        <IoHeartSharp className='text-xl' />
                        99%
                     </div>
                  </div>
               </div>
            </div>
            <p className='mt-3 text-sm'>{props.title}</p>
         </div>
      </div>
   );
}
