import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const TopBar = () => {
	return (
		<nav className="fixed w-[100%] z-50 border-b backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white  px-2 sm:px-4 py-2.5 ">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<a href="#" className="flex items-center">
					<span className=" text-xl font-bold whitespace-nowrap">
						<span className="text-orange-600">C</span>ollege Post
					</span>
				</a>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-default"
				>
					<ul className="nav-middle-ul">
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-orange-600 md:p-0"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a href="#" className="nav-middle">
								About
							</a>
						</li>
						<li>
							<a href="#" className="nav-middle">
								Contact
							</a>
						</li>
						<li>
							<a href="#" className="nav-middle">
								Write
							</a>
						</li>
						<li>
							<a href="#" className="nav-middle">
								Logout
							</a>
						</li>
					</ul>
				</div>
				<div className="flex justify-center cursor-pointer">
					<a href="">
						<img
							className="rounded-full h-10"
							src="https://github.com/Aryan-Srivastava.png"
							alt="profile image"
						/>
					</a>
					<i className="fa-solid fa-magnifying-glass ml-5 nav-middle text-white hover:text-white rounded-full bg-orange-600 hover:bg-orange-600 p-3"></i>
				</div>
			</div>
		</nav>
	);
};

export default TopBar;
