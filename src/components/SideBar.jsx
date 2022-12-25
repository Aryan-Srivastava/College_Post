import React from "react";
import { HashTags } from "./HashTags";
import "../index.css";

const SideBar = () => {
  return (
    <div className="flex-[3_3_0] hidden md:flex">
      <aside className="w-68 ml-8 " aria-label="Sidebar">
        <div className="overflow-y-auto">
          <div>
            <div className="flex mt-5 mb-5">
              <h1 className="text-2xl w-[40%] font-bold text-gray-600"> <span className="text-orange-600">T</span>ag Cloud</h1>
              <hr className=" ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-72 " />
            </div>
            <ul className="flex text-sm flex-wrap mt-2">
              <a href="">
                <HashTags name="Get Started" color="text-purple-400" />
              </a>
              <a href="">
                <HashTags name="Tech" color="text-purple-400" />
              </a>
              <a href="">
                <HashTags name="Music" color="text-pink-400" />
              </a>
              <a href="">
                <HashTags name="Life" color="text-purple-400" />
              </a>
              <a href="">
                <HashTags name="Notice" color="text-yellow-400" />
              </a>
              <a href="">
                <HashTags name="Health" color="text-cyan-400" />
              </a>
              <a href="">
                <HashTags name="Travel" color="text-blue-400" />
              </a>
              <a href="">
                <HashTags name="Important" color="text-red-400" />
              </a>
            </ul>
          </div>
          <div className="flex mt-5 mb-5">
            <h1 className="text-2xl w-[30%] tag-cloud font-bold text-gray-600"><span className="text-orange-600">F</span>ollow !</h1>
            <hr className=" ml-3 mt-4 h-[0.15rem] border-orange-600 bg-orange-600 border-y w-64 " />
          </div>
          <ul className="flex justify-evenly overflow-hidden">
            <li>
              <a href="#" className="sidebar-social-icon">
                <i className="fa-brands fa-instagram p-2 text-[#f009a5] duration-200 hover:scale-125"></i>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-social-icon">
                <i className="fa-brands fa-facebook-f p-2 text-[#175beb] duration-200 hover:scale-125"></i>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-social-icon">
                <i className="fa-brands fa-twitter p-2 text-[#1da1f2] duration-200 hover:scale-125"></i>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-social-icon">
                <i className="fa-solid fa-envelope p-2 text-[#ff6f6f] duration-200 hover:scale-125"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex mt-5 mb-5">
            <h1 className="text-2xl w-[40%] tag-cloud font-bold text-gray-600"><span className="text-orange-600">A</span>dvertising</h1>
            <hr className=" ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-56 " />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
