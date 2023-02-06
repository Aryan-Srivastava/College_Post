import React from "react";

export default function CardBlocks() {
  const icon1 =
    "https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_1280.png";

  return (
    <div className="py-[60px]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-[70px]">
        <div className=" shadow-2xl h-[320px] rounded-xl max-w-[260px] bg-black text-[#ffffff] hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto my-[20px] bg-black"
            src={icon1}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-2 border-b mt-8">
            Vision
          </h2>
          <p className="text-center text-[18px] p-5 font-semi-bold">
            make a type specimen book. It has survived not
          </p>
        </div>
        <div className=" shadow-2xl h-[320px] rounded-xl max-w-[260px] bg-black text-[#ffffff] hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto my-[20px] bg-black"
            src={icon1}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-2 border-b mt-8">
            Vision
          </h2>
          <p className="text-center text-[18px] p-5 font-semi-bold">
            make a type specimen book. It has survived not
          </p>
        </div>
        <div className=" shadow-2xl h-[320px] rounded-xl max-w-[260px] bg-black text-[#ffffff] hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto my-[20px] bg-black"
            src={icon1}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-2 border-b mt-8">
            Vision
          </h2>
          <p className="text-center text-[18px] p-5 font-semi-bold">
            make a type specimen book. It has survived not
          </p>
        </div>
      </div>
    </div>
  );
}
