import React from 'react'
import Card from './Card'
import cysic from '../assets/cysic.jpg'
import snarkify from '../assets/snarkify.png'
import nexus from '../assets/nexus.png'
import fm from '../assets/fm.png'
import babylon from '../assets/babylon.png'
import succinct from '../assets/succinct.png'
import groth from '../assets/groth.png'
import risczero from '../assets/risczero.svg'
import befi from '../assets/befi.png'
import bitfinity from '../assets/bitfinity.png'
import bqlabs from '../assets/bqlabs.png'
import b2 from '../assets/b2.png'
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className=' mx-20'>
        <div className='text-white text-center justify-center items-center flex flex-col mx-10 mt-20'>
            <h2 className='font-bold text-[min(5vw,4rem)] my-4 '>
                <ul>Powering Trust-Minimized</ul>
                <ul>Settlement on Bitcoin</ul>
            </h2>
            <p className='font-light text-lg'>LayerEdge opens door for anyone to tap into Bitcoin's security, while taking only upto 1% of the Bitcoin blockspace they would have taken building directly without LayerEdge</p>
        </div>
        <div className='flex items-center justify-center gap-1 text-white text-[min(2vw,0.7rem)] my-5'>

            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>All</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>Chains</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>Protocol Infra</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>ZK Provers</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>AI</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>zkVM</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>DA</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>RAAS</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>DePin</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border hover:bg-gray-900'>Others</button>
            
        </div>
        <div className='grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-3 md:grid-rows-4 sm:grid-cols-2 sm:grid-rows-3 grid-cols-1 grid-rows-6 py-4 md:gap-4 gap-1 mx-20'>
            <Card 
            imgSrc={cysic}
            content={'A real-time ZK Proof Generation Layer with State-of-the-Art hardware and prover network.'}
            />
            <Card 
            imgSrc={snarkify}
            content={'Scaling ZKP for the Trustless Future. Develop, deploy, and scale your ZK applications with Snarkify.'}
            />
            <Card 
            imgSrc={nexus}
            content={'Nexus introduced the first global distributed zkVM-powered supercomputer network. Anyone in the world can connect and contribute compute power with just one click.'}
            />
            <Card 
            imgSrc={fm}
            content={'Fermah is optimized for cheap, fast, and reliable ZK proof generation. It is architected to make ZKPs the default substrate for all computation.'}
            />

            <Card 
            imgSrc={babylon}
            content={'A revolutionary staking protocol for Bitcoin, allowing BTC holders to earn yields by securing Proof of Stake (PoS) blockchains trustlessly.'}
            />
            <Card 
            imgSrc={succinct}
            content={'SP1 is a performant, open-source zero-knowledge virtual machine (zkVM) that verifies the execution of arbitrary Rust (or any LLVM-compiled language) programs.'}
            />
            <Card 
            imgSrc={cysic}
            content={'The Groth16 algorithm enables a quadratic arithmetic program to be computed by a prover over elliptic curve points derived in a trusted setup, and quickly checked by a verifier'}
            />
            <Card 
            imgSrc={risczero}
            content={"The world's first RISC-V zkVM."}
            />

            <Card 
            imgSrc={befi}
            content={"The liquidity layer for Bitcoin's Economy."}
            />
            <Card 
            imgSrc={bitfinity}
            content={'Bitfinity provides the Ethereum development experience, with layer-2-like speed and scalability on Bitcoin. If you are a Solidity developer, getting started on Bitfinity is as easy as changing the RPC endpoint.'}
            />
            <Card 
            imgSrc={bqlabs}
            content={'Decentralised Insurance Infrastructure for Bitcoin Ecosystem.'}
            />
            <Card 
            imgSrc={b2}
            content={'B² Network is the most practical Bitcoin Layer2 Network. A zk proof verification commitment rollup on Bitcoin. EVM compatible. Supporting Bitcoin address account and Ethereum address account. Fast and cheap. Safe and trusty.'}
            />
        </div>
        <div className='flex justify-end mx-20'>
            <p className='nav-option flex justify-end text-white font-bold '>
                <Link to="/ecosystem">View All</Link>
            </p>
        </div>
        

    </div>
  )
}

export default Work