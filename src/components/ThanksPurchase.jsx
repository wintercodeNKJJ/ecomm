import React from 'react'

const ThanksPurchase = () => {
  return (
    <div>
      <div className="mx-2 md:mx-10 lg:mx-20 my-6">
    <div className="rounded-box bg-gray-400 flex flex-col items-center w-full lg:w-[60rem] gap-2 p-4 mx-auto text-black">
      <div>icon</div>
      <div className="text-6xl font-extrabold text-center">Thanks For Your Purchase</div>
      <div className="text-sm mb-8">Check your email inbox for the reciept</div>
      <div className="mb-8 text-center">if you have any questions pleas <a href="/"
          className="text-red-600">orders@example.com</a></div>
      <div className="btn border-none rounded-box w-80 bg-red-500">Continue Shopping</div>
    </div>
  </div>
    </div>
  )
}

export default ThanksPurchase