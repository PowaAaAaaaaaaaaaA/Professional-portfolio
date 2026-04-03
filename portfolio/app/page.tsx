
import { BsStars } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import Link from "next/link";

import Card from "@/Components/Card";
import CodeSnippet from "@/Components/CodeSnippet";



import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <div className=" element h-screen flex justify-around items-center relative ">
  <h2 className="absolute top-3 left-3 font-bold text-gray-700">WEB DEVELOPER</h2>

      <div className="flex  gap-40 w-[80%]">
        <div>
        <div className="border border-black p-2 rounded-4xl w-[60%] text-center relative mb-6">
        <BsStars className="absolute text-[1.3rem] left-3 text-black"/>
        <p className="text-black text-[0.9rem] font-bold">Let's Build together</p>
        </div>
        <h1 className={` text-black text-9xl [text-shadow:_0px_-1px_15px_#443c3c]`}>MYKEEE</h1>
        <p className="text-black text-[0.9rem] w-[75%]">Full-Stack Developer passionate about building interactive web apps. Skilled in React, Next.js, Laravel, and Firebase, I craft scalable solutions that make coding engaging and accessible.</p>
        <div className="flex gap-4 mt-2">
          <div className="border border-black p-3 text-cyan-600 text-2xl rounded-[5px]"><FaReact /></div>
          <div className="border border-black p-3 text-black text-2xl rounded-[5px]"><SiNextdotjs/></div>
          <div className="border border-black p-3 text-orange-700 text-2xl rounded-[5px]"><FaLaravel/></div>
        </div>
        <div className="flex gap-2 mt-2">
          <Link href="/Resume" className="w-[40%]">
            <button className="btn btn-neutral btn-outline w-full  relative"><MdOutlineArrowOutward className="absolute text-[1.3rem] left-3 text-black"/>Portfolio</button>
          </Link>
            
            <button className="btn btn-neutral btn-dash w-[40%] relative"><MdOutlineArrowOutward className="absolute text-[1.3rem] left-3 text-black"/>Contact</button>
        </div>
        </div>
        <div className="w-[60%] self-end"><CodeSnippet/></div>
      

      </div>
    </div>
  );
}