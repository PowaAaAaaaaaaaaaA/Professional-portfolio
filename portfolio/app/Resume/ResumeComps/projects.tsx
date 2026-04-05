import React from "react";
import { GoProjectRoadmap } from "react-icons/go";

function Projects() {
  return (
    <div className="w-full bg-white rounded-xl p-4 flex flex-col gap-3 border">
      <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span>
          <GoProjectRoadmap />
        </span>
        Projects
      </h2>
      <div className="grid grid-cols-[45%_45%] gap-4 justify-center max-h-[60vh] overflow-y-auto">

{/*Project 1*/}
<div className="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" className="drawer-toggle text-2xl" />
  <div className="drawer-content">
    {/* Page content here */}
            <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
          <figure>
            <img
              src="/Imgs/Portfolio/PortFolio.png"
              alt="Devlab"
              className="w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DevLab</h2>
            <p className="text-[0.7rem]">
              DevLab is a Capstone project that turns coding into a game—where
              challenges replace tutorials and progress is earned through
              solving, debugging, and building.
            </p>
            <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">Open drawer</label>
          </div>
        </div>
    
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-white min-h-full w-[40%] p-5 flex  relative items-center overflow-hidden">
      {/* Sidebar content here */}
      <div className="mt-20 p-5 flex flex-col h-[20%]">
        <h2 className="text-[2rem] bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-bold">Portfolio</h2>
        <div className="flex gap-5 mt-4">
          <div className="badge badge-soft badge-primary w-[15%] p-4">Next.js</div>
          <div className="badge badge-soft badge-primary w-[15%] p-4">Typescript</div>
          <div className="badge badge-soft badge-primary  p-4">Tailwind CSS</div>
        </div>

<div className="carousel w-full mt-5 rounded-2xl">
  <div id="portfolio1" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio4" className="btn btn-circle">❮</a>
      <a href="#portfolio2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio2" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio1" className="btn btn-circle">❮</a>
      <a href="#portfolio3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio3" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio2" className="btn btn-circle">❮</a>
      <a href="#portfolio4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio4" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio3" className="btn btn-circle">❮</a>
      <a href="#portfolio1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        <div className="mt-5">
          <h2 className="text-[1.2rem] text-gray-700">// Project Scope</h2>
          <p className="mt-3 text-gray-700">A responsive portfolio web application built to showcase my projects, skills, and experience. It focuses on clean UI, reusable components, smooth interactions, and performance optimization, with scalability for future updates.</p>
        </div>
      </div>
          <button className="btn btn-soft btn-primary self-end absolute bottom-10 w-[30%]">GITHUB</button>

    </ul>
  </div>
</div>
{/*Project 2*/}
<div className="drawer drawer-end">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle text-2xl" />
  <div className="drawer-content">
    {/* Page content here */}
            <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
          <figure>
            <img
              src="/Imgs/FRVA/FRVA1.png"
              alt="Devlab"
              className="w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">FRVA</h2>
            <p className="text-[0.7rem]">
              DevLab is a Capstone project that turns coding into a game—where
              challenges replace tutorials and progress is earned through
              solving, debugging, and building.
            </p>
            <label htmlFor="my-drawer-2" className="drawer-button btn btn-primary">Open drawer</label>
          </div>
        </div>
    
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-white min-h-full w-[40%] p-5 flex  relative items-center overflow-hidden">
      {/* Sidebar content here */}
      <div className="mt-20 p-5 flex flex-col h-[20%]">
        <h2 className="text-[2rem] bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-bold">Portfolio</h2>
        <div className="flex gap-5 mt-4">
          <div className="badge badge-soft badge-primary w-[15%] p-4">Next.js</div>
          <div className="badge badge-soft badge-primary w-[15%] p-4">Typescript</div>
          <div className="badge badge-soft badge-primary  p-4">Tailwind CSS</div>
          <div className="badge badge-soft badge-primary  p-4">Supabase</div>
        </div>

<div className="carousel w-full mt-5 rounded-2xl">
  <div id="FRVA1" className="carousel-item relative w-full">
    <img
      src="/Imgs/FRVA/FRVA1.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#FRVA4" className="btn btn-circle">❮</a>
      <a href="#FRVA2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="FRVA2" className="carousel-item relative w-full">
    <img
      src="/Imgs/FRVA/FRVA2.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#FRVA1" className="btn btn-circle">❮</a>
      <a href="#FRVA3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="FRVA3" className="carousel-item relative w-full">
    <img
      src="/Imgs/FRVA/FRVA3.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#FRVA2" className="btn btn-circle">❮</a>
      <a href="#FRVA4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="FRVA4" className="carousel-item relative w-full">
    <img
      src="/Imgs/FRVA/FRVA4.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#FRVA3" className="btn btn-circle">❮</a>
      <a href="#FRVA1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        <div className="mt-5">
          <h2 className="text-[1.2rem] text-gray-700">// Project Scope</h2>
          <p className="mt-3 text-gray-700">A responsive portfolio web application built to showcase my projects, skills, and experience. It focuses on clean UI, reusable components, smooth interactions, and performance optimization, with scalability for future updates.</p>
        </div>
      </div>
          <button className="btn btn-soft btn-primary self-end absolute bottom-10 w-[30%]">GITHUB</button>

    </ul>
  </div>
</div>
{/*Project 3*/}
<div className="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" className="drawer-toggle text-2xl" />
  <div className="drawer-content">
    {/* Page content here */}
            <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
          <figure>
            <img
              src="/Imgs/Portfolio/PortFolio.png"
              alt="Devlab"
              className="w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DevLab</h2>
            <p className="text-[0.7rem]">
              DevLab is a Capstone project that turns coding into a game—where
              challenges replace tutorials and progress is earned through
              solving, debugging, and building.
            </p>
            <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">Open drawer</label>
          </div>
        </div>
    
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-white min-h-full w-[40%] p-5 flex  relative items-center overflow-hidden">
      {/* Sidebar content here */}
      <div className="mt-20 p-5 flex flex-col h-[20%]">
        <h2 className="text-[2rem] bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-bold">Portfolio</h2>
        <div className="flex gap-5 mt-4">
          <div className="badge badge-soft badge-primary w-[15%] p-4">Next.js</div>
          <div className="badge badge-soft badge-primary w-[15%] p-4">Typescript</div>
          <div className="badge badge-soft badge-primary  p-4">Tailwind CSS</div>
        </div>

<div className="carousel w-full mt-5 rounded-2xl">
  <div id="portfolio1" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio4" className="btn btn-circle">❮</a>
      <a href="#portfolio2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio2" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio1" className="btn btn-circle">❮</a>
      <a href="#portfolio3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio3" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio2" className="btn btn-circle">❮</a>
      <a href="#portfolio4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio4" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio3" className="btn btn-circle">❮</a>
      <a href="#portfolio1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        <div className="mt-5">
          <h2 className="text-[1.2rem] text-gray-700">// Project Scope</h2>
          <p className="mt-3 text-gray-700">A responsive portfolio web application built to showcase my projects, skills, and experience. It focuses on clean UI, reusable components, smooth interactions, and performance optimization, with scalability for future updates.</p>
        </div>
      </div>
          <button className="btn btn-soft btn-primary self-end absolute bottom-10 w-[30%]">GITHUB</button>

    </ul>
  </div>
</div>
{/*Project 4*/}
<div className="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" className="drawer-toggle text-2xl" />
  <div className="drawer-content">
    {/* Page content here */}
            <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
          <figure>
            <img
              src="/Imgs/Portfolio/PortFolio.png"
              alt="Devlab"
              className="w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DevLab</h2>
            <p className="text-[0.7rem]">
              DevLab is a Capstone project that turns coding into a game—where
              challenges replace tutorials and progress is earned through
              solving, debugging, and building.
            </p>
            <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">Open drawer</label>
          </div>
        </div>
    
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-white min-h-full w-[40%] p-5 flex  relative items-center overflow-hidden">
      {/* Sidebar content here */}
      <div className="mt-20 p-5 flex flex-col h-[20%]">
        <h2 className="text-[2rem] bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-bold">Portfolio</h2>
        <div className="flex gap-5 mt-4">
          <div className="badge badge-soft badge-primary w-[15%] p-4">Next.js</div>
          <div className="badge badge-soft badge-primary w-[15%] p-4">Typescript</div>
          <div className="badge badge-soft badge-primary  p-4">Tailwind CSS</div>
        </div>

<div className="carousel w-full mt-5 rounded-2xl">
  <div id="portfolio1" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio4" className="btn btn-circle">❮</a>
      <a href="#portfolio2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio2" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio1" className="btn btn-circle">❮</a>
      <a href="#portfolio3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio3" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio2" className="btn btn-circle">❮</a>
      <a href="#portfolio4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="portfolio4" className="carousel-item relative w-full">
    <img
      src="/Imgs/Portfolio/PortFolio.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#portfolio3" className="btn btn-circle">❮</a>
      <a href="#portfolio1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        <div className="mt-5">
          <h2 className="text-[1.2rem] text-gray-700">// Project Scope</h2>
          <p className="mt-3 text-gray-700">A responsive portfolio web application built to showcase my projects, skills, and experience. It focuses on clean UI, reusable components, smooth interactions, and performance optimization, with scalability for future updates.</p>
        </div>
      </div>
          <button className="btn btn-soft btn-primary self-end absolute bottom-10 w-[30%]">GITHUB</button>

    </ul>
  </div>
</div>
      </div>
    </div>
  );
}

export default Projects;
