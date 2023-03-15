import React from 'react'

const Product = ({item}) => {
  return (
    <div>
      <a href={`./${item.title}`}>
      <div>
        <div className="rounded-box h-60 bg-white">
          <img src={require("../assets/imges2/banner.jpeg")} alt="item" className="w-full h-full rounded-box object-cover"/>
        </div>
        <div className="py-2">
          <div>{item.title}</div>
          <div className="font-bold">{item.price}Frs</div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Product