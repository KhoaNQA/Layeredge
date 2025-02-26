import React from 'react'

const BannerCard = ({title, content}) => {
  return (
    <div className='card flex flex-col md:p-4 p-2 shadow-lg rounded-md border border-transparent'>
      <div className='text-white text-[min(4vw,1.8rem)] font-bold ' >
        {title}
      </div>

      <div className='md:max-w-[600px] max-w-full text-gray-400 text-[min(3vw,1.2rem)] font-thin mt-2' >
        {content}
      </div>
        
    </div>
  )
}

export default BannerCard