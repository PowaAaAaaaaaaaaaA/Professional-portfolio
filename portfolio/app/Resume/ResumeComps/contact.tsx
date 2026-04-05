import React from "react";
import { MdOutlineArrowOutward, MdSend } from "react-icons/md";
import { TbMailStar } from "react-icons/tb";
import Link from "next/link";

function Contact() {
  return (
    <div className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2">
      <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span>
          <TbMailStar />
        </span>
        Get in Touch
      </h2>
<div className="flex">
      {/* Top Links */}
      <div className="flex w-[50%] gap-4 flex-wrap justify-center">
        <Link href="https://github.com/PowaAaAaaaaaaaaaA" target="_blank" className="btn btn-neutral btn-outline lg:w-[100%] md:w-[25%] relative flex justify-between py-5">
          <span className="text-[0.5rem] text-gray-600 absolute top-2 left-4">GITHUB</span>
          <p className="pt-5">PowaAaAaaaaaaA</p>
          <p><MdOutlineArrowOutward className="text-[1.3rem]" /></p>
        </Link>
        <Link href="https://github.com/PowaAaAaaaaaaaaaA" target="_blank" className="btn btn-neutral btn-outline lg:w-[100%] md:w-[25%] relative flex justify-between py-5">
          <span className="text-[0.5rem] text-gray-600 absolute top-2 left-4">LINKEDIN</span>
          <p className="pt-5">Mike Brian Mayo</p>
          <p><MdOutlineArrowOutward className="text-[1.3rem]" /></p>
        </Link>
        <Link href="https://github.com/PowaAaAaaaaaaaaaA" target="_blank" className="btn btn-neutral btn-outline lg:w-[100%] md:w-[25%] relative flex justify-between py-5">
          <span className="text-[0.5rem] text-gray-600 absolute top-2 left-4">EMAIL</span>
          <p className="pt-5">Mikemayo482@gmail.com</p>
          <p><MdOutlineArrowOutward className="text-[1.3rem]" /></p>
        </Link>
        <Link href="https://github.com/PowaAaAaaaaaaaaaA" target="_blank" className="btn btn-neutral btn-outline lg:w-[100%] md:w-[25%] relative flex justify-between py-5">
          <span className="text-[0.5rem] text-gray-600 absolute top-2 left-4">DISCORD</span>
          <p className="pt-5">mykeeexd</p>
          <p><MdOutlineArrowOutward className="text-[1.3rem]" /></p>
        </Link>
      </div>

      {/* Contact Form */}
<form className="flex flex-col gap-3 w-[50%] px-7 text-black">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="input input-neutral"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="input input-neutral"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    className="textarea textarea-sm min-h-[120px]"
    required
  />
  <button type="submit" className="btn btn-soft btn-primary">
    Send Message
  </button>
</form>
    </div>
</div>
  );
}

export default Contact;