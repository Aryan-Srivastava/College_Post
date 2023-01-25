// import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import axios from "axios";

const SingleBlog = () => {
	// const location = useLocation();
	// const path = location.pathname.split("/")[2];

	// const [post, setPost] = useState([])

	// useEffect(() => {
	//     const getPost = async () => {
	//         const res = await axios.get("/posts/" + path);
	//         setPost(res.data);
	//     };
	//     getPost();
	// }, [path]);

	return (
		<div className="flex flex-col justify-center items-center w-[90%] m-auto">
			<div className="py-5">
				{/* {post.image && (
                    <img
                        src={post.image}
                        alt=""
                        className="w-full h-[300px] rounded-md object-cover"
                    />
                )} */}
				<img src="https://github.com/Aryan-Srivastava.png" alt="pfp" />
				<div className="SinglePostTitle text-3xl text-center my-10">
					{/* {post.title} */} Title
					<div className="float-right text-[18px] cursor-pointer">
						<i className="fa-regular fa-pen-to-square text-teal-500"></i>
						<i className="fa-solid fa-trash ml-3 text-red-500"></i>
					</div>
				</div>
				<div className="mb-10 flex justify-between">
					<span>
						Author: Aryan Srivastava
						{/* <Link to={`/?user=${post.username}`}>
                            <b className="ml-1">{post.username}</b>
                        </Link> */}
					</span>
					{/* <span className="SinglePostDate">{new Date(post.createdAt).toDateString()}</span> */}
				</div>
				<p className="single-post-desc">
					{/* {post.content} */}
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Voluptatibus, excepturi aspernatur. Ex, quaerat libero
					corrupti esse at reiciendis tempore dolorum, autem maiores
					velit quae eaque aspernatur, voluptatem porro itaque
					voluptates. Minima cupiditate itaque voluptatibus inventore
					perferendis laudantium consectetur expedita, amet possimus?
				</p>
			</div>
		</div>
	);
};

export default SingleBlog;
