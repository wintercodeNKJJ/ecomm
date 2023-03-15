import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="p-2 mx-4 my-2 rounded-box grid grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-400 h-full lg:h-96">
        <div className="p-4 flex flex-col justify-between">
          <div className="">
            <div className="font-light mx-4 text-2xl text-white">
              Best Sold
            </div>
            <div className="text-7xl md:text-9xl font-bold m-2 text-white">
              Product
            </div>
          </div>
          <div className="btn btn-accent rounded-full m-2"> Buy Product </div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-end items-center h-full w-full">
            <img src={require("../assets/imges2/banner.jpeg")} alt="banner"
              className="rounded-full w-40 h-40 md:w-80 md:h-80 object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-end items-end p-4 col-span-2 lg:col-span-1">
          <div className="">
            <div className="font-bold text-white">
              description title
            </div>
            <div className="font-light text-justify text-white">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora. Quidem commodi vitae, eligendi
                ipsam veritatis necessitatibus, accusantium nam nisi perferendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner