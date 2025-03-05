import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div className='md:max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 w-full h-full text-white '>
        <div className='flex justify-between '>
            <h2 className='font-bold text-[min(7vw,3.5rem)] '>
                What's new?
            </h2>

            <button className='self-center px-5 py-3 text-[min(3vw,1rem)] rounded-full border hover:bg-gray-900 text-white '>View more on M</button>
        </div>

        <div className='flex flex-col gap-2 my-6'>
            <BlogCard
                date={'Febuary 9, 2025'}
                time={'11:47:57 PM'}
                title={"Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero’s zkVM and Boundless for Proof…"}
            />

            <BlogCard
                date={'Febuary 6, 2025'}
                time={'9:36:13 PM'}
                title={"LayerEdge Monthly Recap — January"}
            />

            <BlogCard
                date={'January 23, 2025'}
                time={'7:01:15 AM'}
                title={"LayerEdge Testnet Launch (Incentivized): Building the Bitcoin-Backed Internet"}
            />
        </div>
    </div>
  )
}

export default Blog