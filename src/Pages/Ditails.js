import React from 'react'
import { Product } from '../components'
import { useStateContext } from '../context/StateContext'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai'

const Ditails = ({ Data }) => {
  const { decQty, incQty, qty, productsa, onAdd } = useStateContext()

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-3 p-2 m-2 gap-3 text-black">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4">
            <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="h-72 w-full object-cover rounded-box" />
          </div>
          <div>
            <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="h-20 w-full object-cover rounded-box" />
          </div>

          <div>
            <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="h-20 w-full object-cover rounded-box" />
          </div>

          <div>
            <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="h-20 w-full object-cover rounded-box" />
          </div>

          <div>
            <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="h-20 w-full object-cover rounded-box" />
          </div>

        </div>
        <div className="p-2 col-span-1 md:col-span-2">
          <div className="text-4xl mb-2 font-bold">{Data.title}</div>
          <div>star review</div>
          <div className="font-bold mt-1">ditails:</div>
          <div className="font-light">
            <p>
              {Data.description}
            </p>
          </div>
          <div className="font-bold text-2xl my-5">{Data.price}frs</div>
          <div className="flex gap-2 my-2">
            <span className="font-bold text-xl">Quantity:</span>
            <div className="input-group">
              <button className="btn btn-sm" onClick={decQty}><AiOutlineMinus /></button>
              <span className="bg-gray-300 w-10 text-black">{qty}</span>
              <button className="btn btn-sm" onClick={incQty}><AiOutlinePlus /></button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-10 mt-8">
            <button className="btn btn-md bg-[#347423] hover:text-[#347423] border-none rounded-box w-52 flex gap-4" onClick={() => onAdd(Data, qty)}>Add to chart<AiOutlineShoppingCart size={25} /></button>
            <button className="btn btn-md rounded-box w-52 bg-[#4d4643] border-none flex gap-4 hover:text-red-500">Buy now <AiOutlineShopping size={25} /></button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-col justify-center items-center text-3xl font-bold my-8 text-black">
        <div>You May also Like</div>
      </div>

      <div className="p-4 flex gap-4 overflow-scroll">
        {productsa.map((elem) => (
          <div className="min-w-[240px]" key={elem.id}>
            <Product item={elem} />
          </div>
        ))}

      </div>

    </div>
  )
}

export default Ditails