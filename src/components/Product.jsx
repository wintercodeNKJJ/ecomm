import React from 'react'

const Product = ({item}) => {
  return (
    <div className='text-black'>
      <a href={`./${item.title}`}>
      <div className=' hover:scale-105 duration-500'>
        <div className="rounded-box h-60 bg-white">
          <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="w-full h-full rounded-box object-cover"/>
        </div>
        <div className="py-2">
          <div>{item.title}</div>
          <div className="font-bold border-b-2 w-fit border-[#347423]">{item.price}Frs</div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Product