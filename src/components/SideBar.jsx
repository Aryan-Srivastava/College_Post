import React, { useState, useEffect } from "react";
import { HashTags } from "./index";
import "../index.css";
import { Link } from "react-router-dom";
import sidebar_logo from "../img/sidebar_logo.png";
import axios from "axios";

const SideBar = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get("/Categories");
			setCats(res.data);
		};
		getCats();
	}, []);
	console.log(cats);

	const [enable, setEnable] = useState(false);

	return (
		<>
			<div
				onClick={() => setEnable(!enable)}
				className=" inline-block top-24 p-4 w-[50px] cursor-pointer lg:hidden"
			>
				<img
					className="top-[80px] absolute w-[30px]"
					src={sidebar_logo}
					alt=""
				/>
			</div>

			<aside
				className={
					enable
						? "SideBar fixed bg-[#fbe3e3] w-full top-[60px] p-[50px] z-10"
						: "SideBar ml-8 mt-24 hidden lg:block lg:p-[20px] lg:h-fit"
				}
				aria-label="Sidebar"
			>
				<div className="overflow-y-auto">
					<div>
						<div className="flex mt-5 mb-5">
							<h1
								className={
									enable
										? "SideBarItemText text-2xl  font-bold ml-[20px] w-[20%] text-gray-600"
										: "SideBarItemText text-2xl w-[40%] font-bold text-gray-600"
								}
							>
								{" "}
								<span className="text-orange-600">T</span>ag
								Cloud
							</h1>
							<div
								onClick={() => setEnable(!enable)}
								className=" inline-block top-32 p-4 w-[50px] cursor-pointer lg:hidden"
							>
								<img
									className="top-[16px] right-[16px] rotate-180 absolute w-[50px] "
									src={sidebar_logo}
									alt=""
								/>
							</div>
							<hr
								className={
									enable
										? " ml-[-44px] mt-4  border-orange-600 bg-orange-600 border-y w-[80vw] "
										: " ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-72 "
								}
							/>
						</div>
						<ul className="flex flex-row text-lg flex-wrap mt-2">
							{cats.map((c) => (
								<Link to={`/?cat=${c.name}`} key={c._id}>
									<HashTags key={c._id} name={c.name} color="text-red-500" />
								</Link>
							))}
						</ul>
					</div>
					<div className="flex mt-5 mb-5">
						<h1
							className={
								enable
									? "SideBarItemText text-2xl ml-[20px] w-[20%] tag-cloud font-bold text-gray-600"
									: "SideBarItemText text-2xl w-[30%] tag-cloud font-bold text-gray-600 "
							}
						>
							<span className="text-orange-600">F</span>ollow !
						</h1>
						<hr
							className={
								enable
									? " ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-[80vw] "
									: " ml-3 mt-4 h-[0.15rem] border-orange-600 bg-orange-600 border-y w-64 "
							}
						/>
					</div>
					<ul className="flex justify-evenly overflow-hidden">
						<li>
							<Link className="sidebar-social-icon">
								<i className="fa-brands fa-instagram px-5 text-[#f009a5] duration-200 hover:scale-125"></i>
							</Link>
						</li>
						<li>
							<Link className="sidebar-social-icon">
								<i className="fa-brands fa-facebook-f px-5 text-[#175beb] duration-200 hover:scale-125"></i>
							</Link>
						</li>
						<li>
							<Link className="sidebar-social-icon">
								<i className="fa-brands fa-twitter px-5 text-[#1da1f2] duration-200 hover:scale-125"></i>
							</Link>
						</li>
						<li>
							<Link className="sidebar-social-icon">
								<i className="fa-solid fa-envelope px-5 text-[#ff6f6f] duration-200 hover:scale-125"></i>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<div className="flex mt-5 mb-5">
						<h1
							className={
								enable
									? "SideBarItemText text-2xl ml-[20px] w-[20%] tag-cloud font-bold text-gray-600"
									: "SideBarItemText text-2xl w-[40%] tag-cloud font-bold text-gray-600"
							}
						>
							<span className="text-orange-600">A</span>dvertising
						</h1>
						<hr
							className={
								enable
									? "ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-[80vw]  "
									: " ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-56 "
							}
						/>
					</div>
				</div>
			</aside>
		</>
	);
};

export default SideBar;
