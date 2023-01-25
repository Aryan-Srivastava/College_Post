import { Link } from "react-router-dom";
import { HashTags } from "./HashTags";

const BlogCard = () => {
    return (
        <div className="flex w-[700px] mb-10 ml-16 p-[40px] border border-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded bg-white ">
            <div>
                <div className="flex ">
                    <Link to="">
                        <img
                            src="https://github.com/Aryan-Srivastava.png"
                            alt=""
                            className="h-32 w-32 mr-10 cursor-pointer shadow-md"
                        />
                    </Link>
                    <div className="flex flex-col">
                        <Link to="" className="text-3xl font-bold leading-10 cursor-pointer text-[#39376b] hover:text-cyan-800">Far far away, behind the mountains</Link>
                        <div className="mt-2 inline-flex justify-start align-middle text-xs font-mono opacity-75">
                            <span className="mr-3">1 hour ago</span>
                            <hr className="mt-2 border-orange-600 bg-orange-600 border w-4 " />
                            <span className="ml-3">3 min read</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="my-5">
                        Hey there, welcome to your new home on the web! Unlike
                        social networks, this one is all yours. Publish your
                        work on a custom domain, invite your audience to
                        subscribe, send them new...
                    </p>
                    <div className="flex justify-between align-center">
                        <div className="text-sm">
                            <Link to="">
                                <HashTags name="Tech" color="text-pink-400" />
                            </Link>
                            <Link to="">
                                <HashTags name="Get Started" color="text-purple-400" />
                            </Link>
                            <Link to="">
                                <HashTags name="Travel" color="text-red-300" />
                            </Link>
                        </div>
                        <div className="flex cursor-pointer">
                            <img src="https://github.com/Aryan-Srivastava.png" alt="" className="h-8 mr-3 rounded-full hover:text-red-500" />
                            <span className="text-xs mt-2 author-name hover:text-orange-600">Aryan Srivastava</span>
                            {/* <i className="fa-solid fa-share-nodes mt-2 ml-5 text-blue-800 share"><span className="share-tooltip">hello</span></i> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
