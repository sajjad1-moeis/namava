import React, {useEffect, useState} from "react";
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

   const ClickHandeler = () => {
      if (is && props.index2 === props.index) {
         props.setSrc("");
         setIs(false);
      } else {
         props.setSrc(
            "https://static.namava.ir/Content/Upload/Images/2de5505a-e548-46ca-9913-b1ba47115d6a.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900"
         );
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
            ></div>
            <div className='relative hoverBox'>
               <img src={props.img} className='rounded-md' onClick={size > 1080 ? ClickHandeler : undefined} />
               <div className='hoverContainer flex h-max items-end px-5 py-5' onClick={size > 1080 ? ClickHandeler : undefined}>
                  <div className=''>
                     <p>فیلم - 1399</p>
                     <div className='flex items-center my-2 gap-1'>
                        <IoHeartSharp className='text-xl' />
                        99%
                     </div>
                  </div>
               </div>
            </div>
            <p className='mt-3 text-sm'>خرس</p>
         </div>
      </div>
   );
}
