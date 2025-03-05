import React from 'react'

const BlogCard = ({date, time, title}) => {
  return (
    <div className='card grid md:grid-cols-[1fr_3.5fr_0.5fr] max-[768px]:grid-cols-1 max-[768px]:grid-rows-[auto_auto] md:gap-10 gap-4 w-full p-8 shadow-lg rounded-md items-center border border-gray-400 border-opacity-15'>
        <div className='max-w-full text-white text-[min(4.5vw,1.3rem)] font-bold order-1 max-[768px]:order-none'>
            {title}
        </div>

        <div className='flex flex-col text-[min(3.5vw,0.9rem)] text-gray-400 font-thin order-0 max-[768px]:order-1'>
            <ul>{date}</ul>
            <ul>{time}</ul>
        </div>

        <div className='text-white text-[min(3.5vw,0.9rem)] font-thin hover:cursor-pointer justify-end order-2 max-[768px]:order-2'>
            Learn more
        </div>
    </div>

  )
}

export default BlogCard