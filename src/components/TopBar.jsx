import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

const TopBar = (props)=>{
  return (
    <>
    
    <nav className="TopBar fixed w-[100%] z-50 border-b backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white  px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link className="flex items-center">
          <span className="SideBarItemText text-xl font-bold whitespace-nowrap">
            <span className="text-orange-600">C</span>ollege Post
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="nav-middle-ul">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-orange-600 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={"about"} className="nav-middle TopBarItemText">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-middle TopBarItemText">Contact</Link>
            </li>
            <li>
              <Link className="nav-middle TopBarItemText">Write</Link>
            </li>
            <li>
              <Link className="nav-middle TopBarItemText">Logout</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center space-x-5">
        <ReactSwitch onChange={props.toggleTheme} checked={props.theme === "dark"} className="m-[10px] sm:m-0" />
        <div className="flex justify-center cursor-pointer">
          <Link>
            <img
              className="rounded-full h-10 w-10 object-cover"
              src="https://source.unsplash.com/random"
              alt="profile_image"
            />
          </Link>
          <i className="fa-solid fa-magnifying-glass ml-5 nav-middle text-white hover:text-white rounded-full bg-orange-600 hover:bg-orange-600 p-3"></i>
        </div>
        </div>
      </div>
    </nav>
    <ul
    className="TopBar bottom-0 bg-[#faddc7] flex flex-row h-[50px] fixed z-10 w-[-webkit-fill-available] space-x-3
    sm:space-x-8 md:space-x-12 justify-center md:hidden"
  >
    <li className="flex text-center">
      <Link
        className="py-2 pl-3 pr-4 text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
        aria-current="page"
      >
        Home
      </Link>
    </li>
    <li className="flex text-center">
      <Link className="nav-middle TopBarItemText">About</Link>
    </li>
    <li className="flex text-center">
      <Link className="nav-middle TopBarItemText">Contact</Link>
    </li>
    <li className="flex text-center">
      <Link className="nav-middle TopBarItemText">Write</Link>
    </li>
    <li className="flex text-center">
      <Link className="nav-middle TopBarItemText">Logout</Link>
    </li>
  </ul>
  </>
  );
  }
export default TopBar;