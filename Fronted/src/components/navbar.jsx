import React from 'react'

const navbar = () => {
  return (
    <div>
      <div className="nav flex z-10 w-full absolute  h-[60px] items-center bg-[#2c2c2c6a] px-20 justify-between">
        <div className="logo  text-green-300 font-bold text-3xl ">
           SIH_2025
        </div>

        <div className="menu   font-bold text-lg text-white ">
             <ul className="flex list-none space-x-4 ">
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'>Home </li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer '>Explore </li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'>Itinerary </li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'>Festivals</li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer'>About</li>
                <li className='hover:scale-110 transition-all duration-300 cursor-pointer '>Contact</li>
                
             </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar
