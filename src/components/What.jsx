import React from 'react';
import grid from '../assets/grid.jpg';

const What = () => {
  return (
    <div className="relative w-full min-h-screen my-32 flex flex-col">
        <div className="absolute top-0 left-0 w-full h-[50vh] md:h-[75vh] opacity-5 flex flex-col ">
            <img src={grid} className="w-full h-full object-contain" />
            <img src={grid} className="w-full h-full object-contain" />
            <img src={grid} className="w-full h-full object-contain" />
            <img src={grid} className="w-full h-full object-contain" />
            <img src={grid} className="w-full h-full object-contain block md:hidden" />
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1  text-white lg:gap-x-60 mt-20 lg:mx-60 m-auto'>
            <div className=' flex flex-col max-w-[400px] lg:text-left  lg:mt-32 lg:mx-5 sm:mx-auto mx-32'>
                <h1 className='text-[min(4vw,3.5rem)] font-bold'>What's Layer</h1>
                <p className='text-gray-400 text-[min(3vw,1.2rem)] font-thin mt-2'>LayerEdge is the first decentralized network that enhances the capabilities of Bitcoin Blockspace with ZK & BitVM.</p>
            </div>
            <div className='relative flex flex-col max-w-[400px] lg:mt-80 lg:mx-5 sm:mx-auto mx-32'>
                <h1 className='text-[min(4vw,3.5rem)] font-bold'>The Problem</h1>
                <p className='text-gray-400 text-[min(3vw,1.2rem)] font-thin mt-2'>Most scaling solutions on Bitcoin are sidechains, while almost no blockchains or rollups currently settles on Bitcoin.</p>
            </div>
            <div className='relative flex flex-col max-w-[400px] lg:mt-10 lg:mx-5 sm:mx-auto mx-32'>
                <h1 className='text-[min(4vw,3.5rem)] font-bold'>Solution</h1>
                <p className='text-gray-400 text-[min(3vw,1.2rem)] font-thin mt-2'>LayerEdge utilizes BitVM for Trust-minimized settlement on Bitcoin, while leveraging proof aggregation of zk proofs from various blockchains and rollups, enabling them to tap into Bitcoin's security by settling at up to 1% of the cost.</p>
            </div>
            <div className='relative flex flex-col max-w-[400px] lg:mt-80 lg:mx-5 sm:mx-auto mx-32'>
                <h1 className='text-[min(4vw,3.5rem)] font-bold'>Mission</h1>
                <p className='text-gray-400 text-[min(3vw,1.2rem)] font-thin mt-2'>Unlocking Bitcoin as a bedrock for all blockchains/rollups and apps.</p>
            </div>
        </div>
        <div className='h-32'></div>
    </div>
  )
}

export default What