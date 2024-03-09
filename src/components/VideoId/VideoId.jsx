import React from "react";
import {returenrApi} from "../../Api";
let arr = await returenrApi("allVideo");
let arr2 = await returenrApi("allVideo2");
let result = arr.concat(arr2);
import {useParams} from "react-router-dom";
import {MoreVideo} from "../Home/Carouse";
export default function VideoId() {
   window.scrollTo(0, 0);
   let id = useParams();
   let findVideo = result.find((item) => item.id == id.videoId);
   console.log(findVideo);
   return (
      <div>
         <div className='absolute w-full h-full moreCarousel2'></div>
         <img src={findVideo.fullImg} alt='' />
         <MoreVideo title={findVideo.title} />
      </div>
   );
}
