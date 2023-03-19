import React from 'react'
import asl from '../assets/ASL.png'


const Footer = () => {
  return (
    <div className='flex items-center bg-[#347423] justify-center gap-2'>
      <img src={asl} alt="asl" className='h-12 w-12 object-cover' />
      <div className="flex justify-center items-center h-14 "> &copy; Africa systems 2023</div>
    </div>
  )
}

export default Footer