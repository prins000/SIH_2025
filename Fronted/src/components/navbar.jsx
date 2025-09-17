import React, { useState } from 'react'

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeDrawer = () => setIsOpen(false)

  return (
    <div>
      <div className="nav flex z-20 w-full absolute h-[56px] sm:h-[60px] items-center bg-[#2c2c2c6a] px-4 sm:px-6 md:px-10 lg:px-20 justify-between">
        <div className="logo text-green-300 font-bold text-2xl sm:text-3xl ">
           SIH_2025
        </div>

        <div className="menu font-bold text-sm sm:text-lg text-white hidden md:block ">
             <ul className="flex list-none space-x-4 ">
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#">Home</a></li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer '><a href="#places">Explore</a></li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#">Itinerary</a></li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#festivals">Festivals</a></li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#">About</a></li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer '><a href="#food">Contact</a></li>
             </ul>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          aria-label="Open menu"
          aria-expanded={isOpen}
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 md:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80%] z-20 bg-[#1f1f1f] text-white md:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between h-[56px] px-4 border-b border-white/10">
          <div className="text-green-300 font-bold text-2xl">Menu</div>
          <button aria-label="Close menu" className="p-2" onClick={closeDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-3 font-semibold">
            <li><a href="#" onClick={closeDrawer} className="block px-3 py-2 rounded hover:bg-white/10">Home</a></li>
            <li><a href="#places" onClick={closeDrawer} className="block px-3 py-2 rounded hover:bg-white/10">Explore</a></li>
            <li><a href="#" onClick={closeDrawer} className="block px-3 py-2 rounded hover:bg-white/10">Itinerary</a></li>
            <li><a href="#festivals" onClick={closeDrawer} className="block px-3 py-2 rounded hover:bg-white/10">Festivals</a></li>
            <li><a href="#" onClick={closeDrawer} className="block px-3 py-2 rounded hover:bg-white/10">About</a></li>
            <li><a href="#food" onClick={closeDrawer} className="block px-3 py-2 rounded hover:bg-white/10">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default navbar
