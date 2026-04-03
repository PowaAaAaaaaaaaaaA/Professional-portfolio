import React from "react";

function CodeSnippet() {
  return (
    <div className="w-full rounded-xl shadow-lg">
      {/* Title Bar */}
      <div className="flex flex-row justify-between bg-[#1e1e2e] rounded-tl-xl rounded-tr-xl items-center px-4 py-2.5">
        <div className="flex flex-row gap-1.5">
          <div className="bg-[#F78C6C] h-2.5 w-2.5 rounded-full" />
          <div className="bg-[#FFCB6B] h-2.5 w-2.5 rounded-full" />
          <div className="bg-[#C3E88D] h-2.5 w-2.5 rounded-full" />
        </div>
        <p className="text-gray-400 text-[0.7rem] font-mono">Myke_portfolio.ts</p>
      </div>

      {/* Code Body */}
      <div className="bg-[#181825]/90 px-5 py-4 font-mono text-[0.78rem] leading-6 rounded-br-xl rounded-bl-xl ">

        <p className="text-gray-500">{"// portfolio.config"}</p>

        <p>
          <span className="text-[#C792EA]">const </span>
          <span className="text-white">portfolio</span>
          <span className="text-gray-400">: </span>
          <span className="text-[#FFCB6B]">Portfolio </span>
          <span className="text-white">= {"{"}</span>
        </p>

        <div className="pl-4">
          <p>
            <span className="text-[#82AAFF]">name</span>
            <span className="text-white">: </span>
            <span className="text-[#C3E88D]">"Mike Brian Mayo"</span>
            <span className="text-gray-400">,</span>
          </p>
          <p>
            <span className="text-[#82AAFF]">role</span>
            <span className="text-white">: </span>
            <span className="text-[#C3E88D]">"Full-Stack Developer"</span>
            <span className="text-gray-400">,</span>
          </p>
          <p>
            <span className="text-[#82AAFF]">stack</span>
            <span className="text-white">: [</span>
            <span className="text-[#C3E88D]">"React"</span>
            <span className="text-white">, </span>
            <span className="text-[#C3E88D]">"Next.js"</span>
            <span className="text-white">, </span>
            <span className="text-[#C3E88D]">"Laravel"</span>
            <span className="text-white">, </span>
            <span className="text-[#C3E88D]">"Node.js"</span>
            <span className="text-white">],</span>
          </p>
          <p>
            <span className="text-[#82AAFF]">open</span>
            <span className="text-white">: </span>
            <span className="text-[#FFCB6B]">true</span>
            <span className="text-gray-400">,</span>
          </p>
          <p>
            <span className="text-[#82AAFF]">passionate</span>
            <span className="text-white">: </span>
            <span className="text-[#FFCB6B]">true</span>
          </p>
        </div>

        <p className="text-white">{"}"}</p>

        <p className="mt-4">
          <span className="text-[#C792EA]">export default </span>
          <span className="text-[#82AAFF]">getPortfolio</span>
          <span className="text-white">(portfolio)</span>
        </p>

      </div>
    </div>
  );
}

export default CodeSnippet;