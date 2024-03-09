import {Swiper, SwiperSlide} from "swiper/react";
import React, {useEffect, useState} from "react";
import {LiaImdb} from "react-icons/lia";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "swiper/css";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import {Navigation} from "swiper/modules";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Link} from "react-router-dom";
let $ = document;
export default function Carousel(arr, props, id) {
   const [images, setImg] = useState(arr);
   const [isIndex, setIndex] = useState(0);
   const [isShowMore, setShowMoreCarousel] = useState(false);
   const [isYesNo, setIs] = useState(false);
   const [img, setImgs] = useState("");
   const [titleImg, setTitle] = useState("");
   const [url, setUrl] = useState(0);

   useEffect(() => {
      let div = $.getElementById(`${isIndex}`);
      div && window.scrollTo(0, div.offsetTop);
   }, [isYesNo]);

   function clickHandeler(id, event) {
      let Find = images.find((item) => item.id === id);
      setShowMoreCarousel(true);
      setIndex((prev) => (prev = Find.isIndex));
      $.querySelectorAll(".moreCarousel").forEach((img) => img.classList.add("hidden"));
      isShowMore && $.getElementById(`${isIndex}`).classList.remove("hidden");
      setImgs(Find.fullImg);
      setIs(!isYesNo);
      setTitle(Find.title);
      setUrl(Find.id);
      $.querySelectorAll(".swiper-slide").forEach((slide) => slide.classList.remove("activeSlide"));
      $.getElementById(`${id}`).classList.add("activeSlide");
   }

   return (
      <>
         <div className='p-3 lg:ps-[37px]'>
            <div style={{padding: "inherit"}} className='text-white text-xl mt-5 md:mt-10'>
               {props}
            </div>
            <Swiper
               onSlideChange={(event) => {
                  $.querySelectorAll(".swiper-slide").forEach((slide) => slide.classList.remove("activeSlide"));
               }}
               slidesPerView={3}
               spaceBetween={10}
               navigation={true}
               style={{
                  "--swiper-navigation-color": "#fff",
               }}
               breakpoints={{
                  768: {slidesPerView: 4},
                  1024: {slidesPerView: 6.12, spaceBetween: 20},
                  1280: {slidesPerView: 9.12, spaceBetween: 20},
               }}
               modules={[Navigation]}
               className='mySwiper3'
            >
               {images.map((img, index) => (
                  <SwiperSlide key={index} id={img.id}>
                     <div className='absolute moreTozih z-10 top-1/4 h-max text-right ps-2' onClick={() => clickHandeler(img.id, event)}>
                        <div className='hidden md:block'>
                           <p>فیلم - 2023</p>
                           <p className=''>
                              85 <LiaImdb className='inline text-xl' />
                           </p>
                           <p>
                              <FavoriteIcon className='me-2' />
                              96%
                           </p>
                           <p>
                              <KeyboardVoiceIcon />
                              دوبله نما
                           </p>
                        </div>
                     </div>
                     <img src={img.img} alt='' className='rounded' onClick={() => clickHandeler(img.id, event)} />
                     <div className='my-3 text-right '>{img.title}</div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         {isShowMore && (
            <div className='mt-5 md:mt-10 lg:mt-20 relative bottom-0 moreCarousel  text-white w-full' id={id}>
               <div className='absolute w-full h-full moreCarousel2'></div>
               <img className='w-full ' src={img} alt='' />
               <MoreVideo title={titleImg} url={url} />
            </div>
         )}
      </>
   );
}

export function MoreVideo(props) {
   return (
      <div className='text-white p-5 z-10 lg:p-20 relative lg:absolute lg:top-1/4  lg:max-w-[600px] w-full'>
         <div className='text-3xl'>{props.title}</div>
         <div>
            <button className='my-5 alertFirstSlide rounded-xl flex-none px-2 ps-3 text-sm py-1.5 text-black'>
               12
               <AddIcon sx={{fontSize: "15px"}} />
            </button>
            <div className='ms-3 inline'>1403</div>
         </div>
         <span className='text-sm'>
            بهرام که همراه خانواده‌اش در کار برگزاری مراسم عروسی هستند، در فرودگاه متوجه می‌شود که ممنوع‌الخروج شده و حالا باید هر طور شده پول جور کند و …
         </span>
         <p className='my-3'>پخش اختصاصی به زودی در نماوا</p>
         <Link to={`/video/${props.url}`}>
            <button className='my-5 bg-white rounded-xl flex-none px-3  text-sm py-2.5 text-black'>
               <PlayArrowIcon sx={{fontSize: "16px"}} />
               پخش
            </button>
         </Link>
         <button>
            <InfoIcon sx={{marginRight: 2, marginLeft: 1}} />
            اطلاعات بیشتر
         </button>
         <div className='flex md:hidden gap-6'>
            <p className=''>
               85 <LiaImdb className='inline text-xl' />
            </p>
            <p>
               <FavoriteIcon className='me-2' />
               96%
            </p>
            <p>
               <KeyboardVoiceIcon />
               دوبله نما
            </p>
         </div>
      </div>
   );
}

///////////////////////////////////////////
