import React from 'react'

const Banner = ({titile,Image,discription}) => {
  return (
         <div className="relative h-40 md:h-72 w-full overflow-hidden">
      <img
        src={Image}
        alt="Photo Contest"
        layout="fill"
        objectFit="cover"
      />
      {/* Centered "about" text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40  flex-col">
        <p className="text-white text-xl md:text-7xl font-garamond font-bold">{titile}</p>
        <p className="text-white font-garamond  text-sm text-center md:w-full w-3/4   md:text-xl bg-black bg-opacity-10">{discription}</p>
      </div>
    </div>
  )
}

export default Banner