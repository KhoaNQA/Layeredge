import React from 'react'

const Card = ({content}) => {
  return (
    <div className='card md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-white hover:cursor-pointer group/edit'>
      <p className='md:max-w-[200px] max-w-[70px]  ml-10 text-white text-xs' >
        {content}
      </p>
        
    </div>
  )
}

export default Card