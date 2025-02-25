import React from 'react'

const BannerCard = ({title, content}) => {
  return (
    <div className='card flex flex-col md:p-4 p-2 shadow-lg rounded-md border border-transparent'>
      <div className='text-white text-3xl font-bold ' >
        {title}
      </div>

      <div className='md:max-w-[600px] max-w-full text-gray-400 text-lg font-thin mt-2' >
        {content}
      </div>
        
    </div>
  )
}

export default BannerCard