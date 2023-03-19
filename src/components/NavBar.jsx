import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import asl from '../assets/ASL.png'


const NavBar = () => {
  const {totalQuantities} = useStateContext()

  return (
    <div>
      <div className="flex justify-between p-2 px-24 bg-[#347423]">
        <div>
          <a href="/" className='flex items-center gap-2'>
            <img src={asl} alt="asl" className=' w-12 h-12 object-cover' />
          <h1 className='text-2xl font-bold'>Africa System Shopping</h1>
          </a>
        </div>
        <div>
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost relative"><AiOutlineShoppingCart size={30}/>{totalQuantities >=1 && <span className='rounded-full absolute p-1 w-6 h-6 bg-green-600 top-0 right-0 text-white'>{totalQuantities}</span>}</label>
        </div>
      </div>
    </div>
  )
}

export default NavBar

// AiOutlineShoppingCart AiOutlineShop