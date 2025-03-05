import React from 'react';
import { PiTreeStructure } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import mintchain from '../assets/mintchain.png';
import kaanch from '../assets/kaanch.png';
import o3 from '../assets/o3.png';
import u2ulogo from '../assets/u2ulogo.png';
import availlogo from '../assets/availlogo.png';
import bflogo from '../assets/bflogo.png';
import celastia from '../assets/celastia.png';
import onlylayer from '../assets/onlylayer.png';



const Explorer = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center min-h-screen my-14'>
        <h1 className='text-[min(4vw,2.2rem)] font-bold  '>LayerEdge Explorer</h1>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-2 w-full max-w-[900px] px-4 my-10'>

            <div className='flex justify-between items-center border border-white border-opacity-10 px-8 py-8'>
                <span className='text-[min(3vw,2rem)] font-bold'>40,043</span>
                <span className='flex gap-4 items-center'>
                    <p className='text-[min(2.5vw,1rem)] text-gray-400 font-thin'>Total Batches</p>
                    <PiTreeStructure size={32} className="text-white" />
                </span>
            </div>

            <div className='flex justify-between items-center border border-white border-opacity-10 px-8 py-8'>
                <span className='flex gap-4 items-center'>
                    <GoShieldCheck size={32} className="text-white" />
                    <p className='text-[min(3vw,1rem)] text-gray-400 font-thin'>Verified Proofs</p>
                </span>
                <span className='text-[min(3vw,2rem)] font-bold'>389,054</span>
            </div>

            <div className='flex justify-between items-center border border-white border-opacity-10 px-8 py-8'>
                <span className='text-[min(3vw,1rem)] font-bold'>YuofY5qj2IeccuylLdQTmUey</span>
                <span className='flex gap-4 items-center'>
                    <p className='text-[min(3vw,1rem)] text-gray-400 font-thin'>Services Manager</p>
                </span>
            </div>

            <div className='flex justify-between items-center border border-white border-opacity-10 px-8 py-8'>
                <span className='flex items-center'>
                    <p className='text-[min(3vw,1rem)] text-gray-400 font-thin'>Total Gas Saved in $USD</p>
                </span>
                <span className='text-[min(3vw,2rem)] font-bold'>3,355,363</span>
            </div>
        </div>
        <div className='flex justify-between items-center gap-24 bg-white bg-opacity-5 rounded-2xl px-6 py-4' >
            <h3 className='text-[min(3vw,1rem)] text-gray-400 font-thin whitespace-nowrap'>
                Protocols Aggregated by LayerEdge
            </h3>

            <div className='flex flex-wrap items-center gap-8'>
                <img src={mintchain} className='w-6 h-6' />
                <img src={availlogo} className='w-6 h-6' />
                <img src={bflogo} className='w-6 h-6' />
                <img src={o3} className='w-6 h-6' />
                <img src={celastia} className='w-6 h-6' />
                <img src={u2ulogo} className='w-6 h-6' />
                <img src={onlylayer} className='w-6 h-6' />
                <img src={kaanch} className='w-6 h-6' />
            </div>
        </div>
    </div>
  )
}

export default Explorer