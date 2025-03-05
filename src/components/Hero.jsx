import React from 'react'
import hero from '../assets/hero.mp4'

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center text-center text-white'>
      <div className='relative w-full h-screen'>
        
        <video className='hero w-full h-full object-cover' autoPlay loop muted>
          <source src={hero} type='video/mp4' />
        </video>

        <div className='absolute inset-0 bg-black/50 '></div>

      </div>
      
        <div className='text-white absolute justify-center items-center flex flex-col mx-10'>
          <p className='font-light text-[min(4vw,1.2rem)]'>Powering trustless settlement & trust-minimized verification on Bitcoin at 99% lower cost for all Layers & Apps</p>
          <h2 className='font-bold text-[min(10vw,5rem)] my-4 ' >
              <ul>Bitcoin Backed </ul>
              <ul>Internet</ul>
          </h2>
          <div className='flex gap-5 text-[min(3vw,1.2rem)]'>
            <button className='px-5 py-2 rounded-full bg-black text-white border  hover:bg-gray-900'>Incentivized Testnet</button>
            <button className='px-5 py-2 rounded-full bg-black text-white border  hover:bg-gray-900'>Documentation</button>
          </div>
        </div>
    </div>
  )
}

export default Hero