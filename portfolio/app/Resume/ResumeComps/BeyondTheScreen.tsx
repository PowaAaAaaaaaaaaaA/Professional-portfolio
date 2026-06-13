import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

function BeyondTheScreen() {
  return (
    <div className="p-5 rounded-xl shadow-sm border bg-white flex flex-col gap-4">
      <h2 className="text-[1.5rem] font-semibold flex gap-3 items-center text-black">
        <span className="p-2 bg-pink-50 rounded-lg border border-pink-100 shadow-sm text-pink-600">
          <BsArrowsFullscreen />
        </span>
        Beyond the Screen
      </h2>
      <p className="text-gray-600 text-[0.85rem] leading-relaxed">
        Outside of coding, I enjoy playing games like <span className="text-black font-medium">Dota 2</span> and <span className="text-black font-medium">Valorant</span>,
        hanging out with friends on Discord, and watching anime. I also like
        staying active through jogging and spending quality time with my family and
        friends.
      </p>
      
      <div className="carousel w-full aspect-video rounded-xl shadow-inner bg-slate-50 border">
        <div id="slide1" className="carousel-item relative w-full group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <a href="#slide4" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❮</a>
            <a href="#slide2" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <a href="#slide1" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❮</a>
            <a href="#slide3" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <a href="#slide2" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❮</a>
            <a href="#slide4" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <a href="#slide3" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❮</a>
            <a href="#slide1" className="btn btn-circle btn-sm bg-white/50 border-none backdrop-blur-md">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeyondTheScreen;
