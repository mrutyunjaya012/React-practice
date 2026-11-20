import React from 'react'

const Carts = ({username, hobby}) => {

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-40 ">
        <img
          class="w-full"
          src="https://plus.unsplash.com/premium_photo-1793901827087-4177708d16a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div class="font-bold text-xl mb-2">{username}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{hobby[0]}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{hobby[1]}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{hobby[2]}
          </span>
        </div>
      </div>
      </>
  )
}

export default Carts
