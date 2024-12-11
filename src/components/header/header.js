import React from "react";
import { IoMdArrowDropdown ,IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
// import { Container } from './styles';

function Header() {
  return (
    <div className="w-full flex items-center justify-between p-4 z-50  ">
      <div className="flex items-center gap-[45px]">
        <img
          src={require("../../assets/logo.png")}
          alt="logo netflix"
          className="w-[93px]"
        />
        
        <ul className="flex text-white gap-4 max-md:hidden">
          <li className="cursor-pointer font-semibold">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>

        
      </div>
      <div className="flex items-center gap-4">
      <IoSearchOutline size={24} color="white"/>
      <IoIosNotificationsOutline size={24} color="white"/>
         <div className="flex items-center gap-1">
        
            <img src={require('../../assets/SmallAvatar.png')}
            alt="small avatar"
            className="w-[32px]"
            />
            <IoMdArrowDropdown size={24} color="white"/>
        </div>
      </div>
     
    </div>
  );
}

export default Header;
