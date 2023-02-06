import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
/* import { RxDotFilled } from "react-icons/rx"; */

export default function ImageSlider() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/02/23/22/04/book-bindings-3176776_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/10/22/21/06/flat-2879273_1280.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-wh h-[780px] w-full m-auto py-20 px-0 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="flex flex-col items-center h-[780px]  bg-cover bg-no-repeat bg-center z-[0] duration-300"
      >
        <div className=" px-2 opacity-100 m-auto">
          <h2 className="text-7xl ml-10 mb-8 text-center align-middle text-black-800 font-bold ">
            About{" "}
          </h2>
          <h2 className="text-7xl ml-10 mb-8 text-center align-middle text-black-800 font-bold ">
            Us{" "}
          </h2>
          <p className="container text-lg text-black text-[30px] font-bold mx-auto">
            Unlike Social Media, This Is All{" "}
            <span className="text-[#CD6E16]">Yours.</span>
          </p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {/* <RxDotFilled /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
