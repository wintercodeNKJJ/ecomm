import React from 'react'
import { Banner, Product } from '../components/index'

const Home = ({ itemsdata }) => {
  return (
    <div>
      <Banner />
      <div className="flex gap-3 flex-col justify-center items-center text-3xl font-bold">
        <div>Best sold items</div>
        <div>
          <input type="text" placeholder="search..." className="input input-sm bg-gray-300 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 py-2 m-2 gap-2">
        {itemsdata.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Home