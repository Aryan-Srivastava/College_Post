import React from 'react'
import "../index.css";
import { Link } from "react-router-dom";
const BottomBar = ()=>{
  return (
    <><ul
    className="TopBar bottom-0 bg-[#faddc7] flex flex-row h-[50px] fixed z-10 w-[-webkit-fill-available] space-x-1 xs:space-x-3 sm:space-x-8 md:space-x-12 justify-center md:hidden"
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
  </ul></>
  )
}
export default BottomBar;