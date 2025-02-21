import React from 'react'

const Card = () => {
  return (
    <div className='category-card md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-white hover:cursor-pointer group/edit'>
        <div className='flex gap-4'>
            {icons}
            <h1 className='md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold absolute ml-10' >
              {content}
              </h1>
        </div>
        
    </div>
  )
}

export default Card