import React from 'react'
import { useStateContext } from '../context/StateContext'
import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


const SmallItems = ({item}) => {
  const { toggleCartItemQuantity,onRemove } = useStateContext()
  return (
    <div>
      <div className="flex gap-2">
              <div>
                <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="h-36 rounded-box"/>
                <span className="text-2xl">
                  {item.title}
                </span>
              </div>
              <div className="flex flex-col justify-between mx-1 h-36">
                <span className="text-2xl">{item.price}frs</span>
                <div className="input-group">
                  <button className="btn btn-sm" onClick={()=>toggleCartItemQuantity(item.id, 'dec')}><AiOutlineMinus/></button>
                  <span className="bg-gray-300 w-10 text-black">{item.quantity}</span>
                  <button className="btn btn-sm" onClick={()=>toggleCartItemQuantity(item.id, 'inc')}><AiOutlinePlus/></button>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-red-500" onClick={()=>onRemove(item)}><TiDeleteOutline size={30}/></span>
              </div>
            </div>
    </div>
  )
}

export default SmallItems