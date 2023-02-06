import React from "react";

export default function SplitSection() {
  const img1 =
    "https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_1280.png";

  const img2 =
    "https://cdn.pixabay.com/photo/2017/01/16/08/27/echo-1983513_1280.png";

  return (
    <div>
      <div className="max-w-[1000px] mx-auto my-[120px] h-[360] grid grid-cols-3 gap-[100px] border">
        <div className=" h-[360] col-span-1 w-[100%] flex flex-col justify-center">
          <img src={img1} alt="profile1" class="rounded-[20px] h-[80%]" />
        </div>
        <div className=" h-[360px] col-span-2 max-w-[645] flex flex-col justify-center">
          <h1 class="text-black text-[42px] my-2">Who Are We?</h1>
          <h1 class="text-black text-[30px] my-2">What’s our Story?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto my-[30px] h-[360]   grid grid-cols-3 gap-[100px] border">
        <div className=" h-[360px] col-span-2 max-w-[645px] flex flex-col justify-center">
          <h1 class="text-black text-[42px] my-2">We Are Different How?</h1>
          <h1 class="text-black text-[30px] my-2">What it means?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className=" h-[360] col-span-1 w-[100%] flex flex-col justify-center">
          <img src={img2} alt="profile2" class="rounded-[20px] w-80" />
        </div>
      </div>
    </div>
  );
}
