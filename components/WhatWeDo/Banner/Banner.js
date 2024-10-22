import React from "react";

export default function Banner() {
  return (
    <div className="z-50 h-[90vh]">
      <div className="lg:h-[50vh] h-[30vh]">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out `}
          >
            <img
              src="what-we-do/banner.jpg"
              className="lg:size-full h-52 object-cover"
              alt="Slide image"
            />
          </div>
        </div>
      </div>
      <div className="z-40 mx-auto flex h-[40vh] flex-col items-center justify-center bg-[#F8E2CF] text-xl font-normal lg:px-40">
        <h2 className="text-4xl font-medium ">What We Do</h2>
        <p className="text-center md:w-10/12 lg:py-10">
          Seslong operates through three main business verticals:
        </p>
      </div>
    </div>
  );
}
