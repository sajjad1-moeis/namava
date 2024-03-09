import React, {useEffect, useState} from "react";
import Api from "../../../Api";
let arrImgs = await Api("first");
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import MicIcon from "@mui/icons-material/Mic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
arrImgs.reverse();
function BtnMoreFirst(props) {
   return (
      <div className='h-max my-auto flex-none  '>
         {props.title}
         {props.children}
      </div>
   );
}
export default function FirstCarousel() {
   const [sizeImgCarousel, setCarousel] = useState(window.innerWidth);
   const [imgCarousels, setImg] = useState(arrImgs);
   const [stateVideo, setStateVideo] = useState(0);

   window.onresize = () => {
      setCarousel(window.innerWidth);
   };

   useEffect(() => {
      if (stateVideo > 3) {
         document.querySelector("video").play();
      } else {
         if (document.querySelector("video")) {
            document.querySelector("video").currentTime = 0;
         }
      }
   }, [stateVideo]);

   return (
      <div className='relative'>
         <Swiper
            onSlideChange={(event) => {
               setStateVideo(event.realIndex);
            }}
            autoplay={{
               delay: 3500,
               disableOnInteraction: false,
            }}
            style={{
               "--swiper-navigation-color": "#fff",
               "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={30}
            navigation={sizeImgCarousel > 799 ? true : false}
            pagination={{
               clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className='mySwiper'
         >
            {imgCarousels.map((item) => (
               <SwiperSlide key={item.id}>
                  <div className='divMoreNamava w-full h-full absolute'></div>
                  <div className=' absolute h-max  w-max z-10 inset-0  mx-auto  md:mx-10 mt-[70%] md:mt-[10%]'>
                     <img src={item.titleImg} className='w-36 md:w-96 mx-auto md:mx-0' />
                     <div className={`w-max text-start my-5 `}>
                        <div className='lg:block hidden'>
                           <Link to='/' className='block text-white mt-6 '>
                              {item.name}
                           </Link>
                           <div className='flex gap-8'>
                              <button className='my-5 alertFirstSlide rounded-xl flex-none px-2 ps-3 text-sm py-1.5 text-black'>
                                 12
                                 <AddIcon sx={{fontSize: "15px"}} />
                              </button>
                              <div className='h-max my-auto'>۲۰۲۳</div>
                              <BtnMoreFirst title='91.5%'>
                                 <FavoriteIcon sx={{marginRight: 1}} />
                              </BtnMoreFirst>
                              <BtnMoreFirst title='دوبله نما'>
                                 <MicIcon sx={{marginRight: 1}} />
                              </BtnMoreFirst>
                              {item.isPersian && (
                                 <BtnMoreFirst title='زیرنویس'>
                                    <SubtitlesIcon sx={{marginRight: 1}} />
                                 </BtnMoreFirst>
                              )}
                           </div>
                        </div>
                        <div className='flex'>
                           <Button variant='contained' sx={{borderRadius: 3, flex: "none"}} startIcon={<PlayArrowIcon sx={{marginLeft: 1}} />}>
                              ورود و پخش
                           </Button>
                           <Button variant='filledTonal' sx={{borderRadius: 3, flex: "none"}}>
                              پیش نمایش
                           </Button>
                        </div>
                     </div>
                  </div>
                  {!item.isVideo ? (
                     <img src={sizeImgCarousel > 799 ? item.img : item.fullImg} alt='' loading='lazy' />
                  ) : (
                     <video
                        loading='lazy'
                        type='video/mp4'
                        src={
                           sizeImgCarousel > 799
                              ? "https://static.namava.ir/Content/Upload/Images/9cc37088-cdc1-4b5d-b546-113b385cd7be.mp4"
                              : "https://static.namava.ir/Content/Upload/Images/fb1418cb-96e6-455d-a1fb-f418e8ce5495.mp4"
                        }
                     ></video>
                  )}
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
