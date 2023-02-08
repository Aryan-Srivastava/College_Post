import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const TopBar = () => {
  const [enable, setEnable] = useState(false);
  return (
    <nav
      className={
        enable
          ? "bg-slate-300 opacity-100 z-[2] w-full fixed h-[79px] justify-center text-center"
          : "fixed w-[100%] z-50 border-b backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white  px-2 sm:px-4 py-2.5 h-fit justify-center"
      }
    >
      <div
        className={
          enable
            ? "container flex flex-wrap items-center  justify-center mx-auto"
            : "container flex flex-wrap items-center  justify-between mx-auto"
        }
      >
        <div className="flex justify-center items-center lg:order-2">
          <div
            onClick={() => setEnable(!enable)}
            className="hamburger z-20 inline-block p-4 absolute left-[3px] cursor-pointer lg:hidden"
          >
            <div
              className={
                enable
                  ? "line transition-all  h-[0.3rem] w-7 my-1 rotate-45  bg-black"
                  : "line transition-all  h-1 w-6 my-1 bg-black"
              }
            ></div>
            <div
              className={
                enable
                  ? "line transition-all  h-[0.3rem] w-7 my-1 -translate-y-[8px] -rotate-45 bg-black"
                  : "line transition-all  h-1 w-6 my-1 bg-black"
              }
            ></div>
            <div
              className={enable ? "hidden" : "line  h-1 w-6 my-1 bg-black"}
            ></div>
          </div>
          {/* <div className="search lg:hidden">
            <img src="/search.svg" className="w-6" alt="" />
          </div> */}
        </div>

        <Link className={enable ? "hidden" : "flex items-center "}>
          <span className=" text-xl font-bold whitespace-nowrap">
            <span className="text-orange-600">C</span>ollege Post
          </span>
        </Link>
        <div
          className={
            enable ? "flex flex-row pt-1" : "hidden w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul
            className={
              enable
                ? "flex flex-row font-semibold text-[25px]"
                : "nav-middle-ul"
            }
          >
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-orange-600 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-middle">About</Link>
            </li>
            <li>
              <Link className="nav-middle">Contact</Link>
            </li>
            <li>
              <Link className="nav-middle">Write</Link>
            </li>
            <li>
              <Link className="nav-middle">Logout</Link>
            </li>
          </ul>
        </div>
        <div
          className={enable ? "hidden" : "flex justify-center cursor-pointer"}
        >
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
    </nav>
  );
};

export default TopBar;
