
import React from 'react'
import { PiChatCircleDots } from "react-icons/pi";
import { PiChatCircleDotsFill } from "react-icons/pi";

function ChatBubble() {
  return (
    <div className="fab border-2 border-blue-500 h-screen w-[50%]">
  {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
  {/* <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-primary">F</div> */}
  <div tabIndex={0} role="button" className='w-15 h-15'><PiChatCircleDots className='w-12 h-12 cursor-pointer m-auto' /></div>

  {/* Main Action button replaces the original button when FAB is open */}
  <div className="fab-main-action w-15 h-15 ">
    <PiChatCircleDotsFill className='w-12 h-12 cursor-pointer m-auto' />
  </div>

  {/* buttons that show up when FAB is open */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
</div>
  )
}

export default ChatBubble