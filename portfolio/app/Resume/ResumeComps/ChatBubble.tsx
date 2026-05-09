'use client'
import React, { useState, useRef } from 'react'

function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleToggle = () => {
    if (isOpen) {
      if (emailRef.current) emailRef.current.value = ''
      if (subjectRef.current) subjectRef.current.value = ''
      if (messageRef.current) messageRef.current.value = ''
    }
    setIsOpen(prev => !prev)
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      <div
        className={`w-75 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden
          transition-all duration-250 origin-bottom-right
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-3 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="bg-neutral-900 px-4 py-3 flex items-center gap-3 border-b border-neutral-800">
          <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 fill-neutral-400" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white text-[13px] font-medium leading-none mb-0.5">Send a message</p>
            <p className="text-neutral-500 text-[11px]">Usually replies in minutes</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-neutral-500" />
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-3 bg-white">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="you@example.com"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-black/5 focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">Subject</label>
            <input
              ref={subjectRef}
              type="text"
              placeholder="What's this about?"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-black/5 focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">Message</label>
            <textarea
              ref={messageRef}
              placeholder="Your message here..."
              rows={3}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-black/5 focus:bg-white transition-all resize-none"
            />
          </div>

          <div className="h-px bg-neutral-100" />

          <button className="w-full bg-neutral-900 hover:bg-neutral-700 active:scale-95 text-white text-[13px] font-medium rounded-lg py-2.5 flex items-center justify-center gap-2 transition-all tracking-wide">
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            Send Message
          </button>
        </div>
      </div>

      {/* FAB Button */}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="w-14 h-14 rounded-full bg-neutral-900 hover:bg-neutral-700 flex items-center justify-center shadow-lg shadow-black/20 transition-all hover:scale-105 active:scale-95 relative"
      >
        <svg className={`w-6 h-6 fill-white absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <svg className={`w-6 h-6 fill-white absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
  )
}

export default ChatBubble