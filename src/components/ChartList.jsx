import React from 'react'
import SmallItems from './SmallItems'
import { useStateContext } from '../context/StateContext'
import {AiOutlineShopping,AiOutlineShoppingCart,AiOutlineClose} from 'react-icons/ai'



const ChartList = () => {
  const {totalPrice, totalQuantities, cartItems} = useStateContext()
  return (
    <div>
      <ul className="menu p-4 w-fit bg-base-100 text-base-content h-full overflow-scroll">
        <li>
          <div className='flex text-sm justify-between'>
            <div className='flex gap-1'>
            <span>Your Card</span>
            <h1>({totalQuantities} items)</h1>
            </div>
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost rounded-full relative"><AiOutlineClose/></label>
          </div>
        </li>
        {cartItems.length < 1 && (
          <div className='flex flex-col justify-center items-center'>
          <AiOutlineShopping size={150}/>
          <h3>Your shopping is empty</h3>
          <a href="/" className='btn rounded-box bg-red-600 w-60 my-4'>Continue Shopping</a>
          </div>
        )}
        {cartItems.length >=1 && cartItems.map((item)=>(
          <li>
            <div key={item.id}>
              <SmallItems item={item}/>
            </div>
          </li>
        ))}
        {cartItems.length >= 1 && (
          <li>
            <div className="flex flex-col w-full">
              <div className="flex justify-between p-2 text-xl font-bold w-full">
                <span>Subtotal:</span>
                <span>{totalPrice}frs</span>
              </div>
              <div className="mx-2 w-full">
                <button className="rounded-box bg-red-500 btn btn-md w-full flex gap-4">PAY WITH STRIPE<AiOutlineShoppingCart size={25}/></button>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ChartList