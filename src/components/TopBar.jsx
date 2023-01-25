import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const TopBar = () => {
	return (
		<nav className="fixed w-[100%] z-50 border-b backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white  px-2 sm:px-4 py-2.5 ">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link  className="flex items-center">
					<span className=" text-xl font-bold whitespace-nowrap">
						<span className="text-orange-600">C</span>ollege Post
					</span>
				</Link>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-default"
				>
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
							<Link className="nav-middle">
								About
							</Link>
						</li>
						<li>
							<Link className="nav-middle">
								Contact
							</Link>
						</li>
						<li>
							<Link className="nav-middle">
								Write
							</Link>
						</li>
						<li>
							<Link className="nav-middle">
								Logout
							</Link>
						</li>
					</ul>
				</div>
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
		</nav>
	);
};

export default TopBar;
