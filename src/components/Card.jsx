import React from 'react'

const Card = ({imgSrc,content}) => {
  return (
    <div className='card flex flex-col md:p-4 p-2 shadow-lg rounded-md items-center  border border-transparent hover:border-white hover:cursor-pointer group/edit'>
      <img src={imgSrc} alt="Card image" className="w-20 h-20 object-contain " />

      <div className='md:max-w-[200px]  max-w-full ml-4 text-gray-400 text-[min(4vw,0.8rem)] line-clamp-3 overflow-hidden' >
        {content}
      </div>
        
    </div>
  )
}

export default Card