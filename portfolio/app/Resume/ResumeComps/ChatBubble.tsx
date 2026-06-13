'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react'
import { HiMail, HiChatAlt2, HiUser } from 'react-icons/hi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { BsChatFill } from 'react-icons/bs'

function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [state, handleSubmit] = useForm("mwvjnqpr")

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-4">
      {/* Chat Panel */}
      <div
        className={`w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 
          transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] origin-bottom-right
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="bg-neutral-900 px-6 py-8 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-white/5 rounded-full blur-2xl" />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 shadow-inner">
                <Image 
                  src="/Imgs/Myke1.png" 
                  alt="Myke" 
                  width={56} 
                  height={56} 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black border-2 border-white rounded-full shadow-sm animate-pulse" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg leading-tight">Mike Brian Mayo</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-neutral-400 text-xs font-medium">Online</span>
                <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Replies quickly</span>
              </div>
            </div>

            <button 
              onClick={handleToggle}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white cursor-pointer"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {state.succeeded ? (
            <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-4 text-neutral-900 border border-neutral-100">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
              <p className="text-gray-500 text-sm">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-6 text-neutral-900 font-semibold text-sm hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="space-y-4">
                <div className="group relative">
                  <label htmlFor="full-name" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block px-1 transition-colors group-focus-within:text-neutral-900">
                    Full Name
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-neutral-900 transition-colors" size={18} />
                    <input
                      id="full-name"
                      name="name"
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-300 outline-none focus:bg-white focus:border-neutral-900 focus:ring-4 focus:ring-black/5 transition-all"
                    />
                  </div>
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1 px-1" />
                </div>

                <div className="group relative">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block px-1 transition-colors group-focus-within:text-neutral-900">
                    Email Address
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-neutral-900 transition-colors" size={18} />
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-300 outline-none focus:bg-white focus:border-neutral-900 focus:ring-4 focus:ring-black/5 transition-all"
                    />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1 px-1" />
                </div>

                <div className="group relative">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block px-1 transition-colors group-focus-within:text-neutral-900">
                    Your Message
                  </label>
                  <div className="relative">
                    <HiChatAlt2 className="absolute left-3.5 top-4 text-gray-300 group-focus-within:text-neutral-900 transition-colors" size={18} />
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="How can I help you today?"
                      rows={3}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-300 outline-none focus:bg-white focus:border-neutral-900 focus:ring-4 focus:ring-black/5 transition-all resize-none"
                    />
                  </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1 px-1" />
                </div>
              </div>

              <button 
                type="submit"
                disabled={state.submitting}
                className="cursor-pointer mt-2 w-full bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-black/5 transition-all tracking-wide"
              >
                <RiSendPlaneFill size={20} className="mb-0.5" />
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-1">
                Powered by Formspree
              </p>
            </form>
          )}
        </div>
      </div>

      {/* FAB Button */}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 relative group cursor-pointer
          ${isOpen 
            ? 'bg-white text-gray-900 rotate-0 scale-100 border border-gray-100' 
            : 'bg-neutral-900 text-white hover:scale-110 active:scale-95 shadow-black/20'
          }`}
      >
        {!isOpen && (
          <div className="absolute inset-0 rounded-2xl bg-neutral-900 animate-ping opacity-10 pointer-events-none" />
        )}
        
        <div className="relative z-10">
          {isOpen ? (
            <IoClose size={32} className="transition-transform duration-500 rotate-0" />
          ) : (
            <BsChatFill size={28} className="transition-transform duration-500 scale-100" />
          )}
        </div>

        {/* Unread indicator when closed */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center shadow-sm">
            1
          </div>
        )}
      </button>
    </div>
  )
}

export default ChatBubble