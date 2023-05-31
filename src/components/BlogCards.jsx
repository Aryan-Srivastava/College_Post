import React from "react";
import { HashTags } from "./index";
import { Link } from "react-router-dom";

const BlogCards = (props) => {
	console.log(props);
	return (
		<div className=" mr-3 mt-28">
			<div className="cards flex max-w-[700px] mb-10 ml-16 p-[40px] border border-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded bg-white ">
				<div>
					<div className="flex ">
						<Link to="">
							<img
								src={props.image}
								alt=""
								className="h-32 w-32 mr-10 cursor-pointer shadow-md"
							/>
						</Link>
						<div className="flex flex-col">
							<Link
								to=""
								className="cardsText text-3xl font-bold leading-10 cursor-pointer text-[#39376b] hover:text-cyan-800"
							>
								{props.title}
							</Link>
							<div className="mt-2 inline-flex justify-start align-middle opacity-75">
								<p className="my-5">{props.content}</p>
							</div>
						</div>
					</div>
					<div>
						<div className="flex mt-4">
							<div className="text-sm">
								{props.categories.map((category) => (
									<Link to="">
										<HashTags
											name={category}
											color="text-pink-400"
										/>
									</Link>
								))}
							</div>
							<div className="flex cursor-pointer">
								<img
									src="https://source.unsplash.com/random"
									alt=""
									className="h-8 w-8 mr-3 object-cover rounded-full hover:text-red-500"
								/>
								<span className="text-xs mt-2 author-name hover:text-orange-600">
									{props.username}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCards;
