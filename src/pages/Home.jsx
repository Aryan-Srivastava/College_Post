import { useEffect, useState } from "react";
import { SideBar, BlogCards } from "../components";
import { BottomBar } from "../components";
import axios from "axios";

const Home = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			const res = await axios.get("/posts");
			setBlogs(res.data);
		};
		fetchBlogs();
	}, []);

	console.log(blogs);

	return (
		<div className="flex">
			<SideBar />
			<div>
				{blogs.map((blog) => (
					<BlogCards {...blog} />
				))}
			</div>
			<BottomBar />
		</div>
	);
};

export default Home;
