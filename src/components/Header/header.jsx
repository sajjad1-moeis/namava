import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VideocamIcon from "@mui/icons-material/Videocam";
import HomeIcon from "@mui/icons-material/Home";
let mainHeader = [
   {title: "خانه", href: "/"},
   {title: "فیلم ها", href: "/videos"},
   {title: "سریال ها", href: "/series"},
   {title: "تازه ها", href: "/lasted"},
   {title: "کودکان", href: "/kinds"},
   {title: "پردیس نماوا", href: "/pardis"},
   {title: "نماوا مگ", href: "/mag"},
   {title: "جستجو", href: "/search"},
   {title: "دسته بندی", href: "/category"},
];

function BasicMenu() {
   const [anchorEl, setAnchorEl] = useState(null);
   const [valueBtn, setValueBtn] = useState("خانه");
   const [headerLink, setHeder] = useState(mainHeader.slice(0, 8));

   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
      event.target.textContent && setValueBtn(event.target.textContent);
   };

   return (
      <div variant='secondary'>
         <Button
            id='basic-button'
            sx={{color: "white"}}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
         >
            {valueBtn}
         </Button>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               "aria-labelledby": "basic-button",
            }}
         >
            <div className='bg-neutral-800 text-white'>
               {headerLink.map((item, index) => (
                  <NavLink key={index} to={item.href}>
                     <div className='flex-none'>
                        <MenuItem onClick={handleClose}>{item.title}</MenuItem>
                     </div>
                  </NavLink>
               ))}
            </div>
         </Menu>
      </div>
   );
}

function ItemHeader(props) {
   return (
      <NavLink to={props.href} className={(active) => (active.isActive ? "activeHeader" : "")}>
         <li className='text-sm h-max flex-none w-max'>{props.title}</li>
      </NavLink>
   );
}

export default function Header() {
   const [headerLink, setHeder] = useState(mainHeader);
   const [scroolTop, setScrool] = useState(0);
   window.onscroll = () => {
      scrollY > scroolTop ? document.querySelector("header").classList.add("hideHeader") : document.querySelector("header").classList.remove("hideHeader");
      setScrool(scrollY);
   };
   return (
      <header className={`${scroolTop > 10 ? "bg-[#171717]" : ""} z-10 top-0 flex  justify-between fixed    text-white w-full px-5 xl:px-[57px]`}>
         <div className=' py-3 xl:py-8 flex gap-3 xl:gap-9'>
            <NavLink className='h-max my-auto' to='/'>
               <img src='http://localhost:5173/src/components/Header/img/logo.png' alt='' className='w-12 md:w-16' />
            </NavLink>
            <ul className='gap-3 xl:gap-8 hidden md:flex h-max my-auto'>
               {headerLink.map((item, index) => (
                  <ItemHeader key={index} {...item} />
               ))}
            </ul>
            <div className='md:hidden block'>
               <BasicMenu />
            </div>
         </div>
         <div className='h-max my-auto flex gap-4 xl:gap-8'>
            <button className='rotate-90 text-xl xl:text-4xl md:block hidden '>
               <Link to='/search'>
                  <FiSearch />
               </Link>
            </button>
            <NavLink to='/buy' className='h-max my-auto text-sm flex gap-2'>
               <div className='h-ma my-auto flex-none'>خرید اشتراک</div>
               <img src='./src/components/Header/img/arrow.png' alt='' className='w-7 md:hidden inline' />
            </NavLink>
            <NavLink to='/login' className='flex-none md:block hidden h-max my-auto hover:bg-white hover:text-zinc-800 p-2 rounded-xl border border-white text-sm'>
               ورود/ ثبت نام
            </NavLink>
         </div>
      </header>
   );
}
