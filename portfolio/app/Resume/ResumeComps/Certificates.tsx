import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

function Certificates() {
  return (
    <div className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2">
      <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span>
          <BiBadgeCheck />
        </span>
        Certifactions
      </h2>
      <div className="p-4 rounded-sm bg-gray-200">
        <h2 className="text-black font-bold pb-2">JavaScript Essential 1</h2>
        <p className="text-gray-600 text-[0.8rem]">
          DICT-ITU DTC Initiative • 2025
        </p>
      </div>
      <div className="p-4 rounded-sm bg-gray-200">
        <h2 className="text-black font-bold pb-2">JavaScript Essential 1</h2>
        <p className="text-gray-600 text-[0.8rem]">
          DICT-ITU DTC Initiative • 2025
        </p>
      </div>
    </div>
  );
}

export default Certificates;
