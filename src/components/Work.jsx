import React from 'react'
import Card from './Card'

const Work = () => {
  return (
    <div>
        <div className='text-white text-center justify-center items-center flex flex-col mx-10 mt-20'>
            <h2 className='font-bold text-6xl my-8 '>
                <ul>Powering Trust-Minimized</ul>
                <ul>Settlement on Bitcoin</ul>
            </h2>
            <p className='font-light text-lg'>LayerEdge opens door for anyone to tap into Bitcoin's security, while taking only upto 1% of the Bitcoin blockspace they would have taken building directly without LayerEdge</p>
        </div>
        <div className='flex items-center justify-center gap-1 text-white text-xs my-5'>

            <button className='px-3 py-1 rounded-full bg-black text-white border'>All</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>Chains</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>Protocol Infra</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>ZK Provers</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>AI</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>zkVM</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>DA</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>RAAS</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>DePin</button>
            <button className='px-3 py-1 rounded-full bg-black text-white border'>Others</button>
            
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
            <Card 
            content={'A real-time ZK Proof Generation Layer with State-of-the-Art hardware and prover network.'}
            />
            <Card 
            content={'Scaling ZKP for the Trustless Future. Develop, deploy, and scale your ZK applications with Snarkify.'}
            />
            <Card 
            content={'Nexus introduced the first global distributed zkVM-powered supercomputer network. Anyone in the world can connect and contribute compute power with just one click.'}
            />
            <Card 
            content={'Fermah is optimized for cheap, fast, and reliable ZK proof generation. It is architected to make ZKPs the default substrate for all computation.'}
            />

            <Card 
            content={'A revolutionary staking protocol for Bitcoin, allowing BTC holders to earn yields by securing Proof of Stake (PoS) blockchains trustlessly.'}
            />
            <Card 
            content={'SP1 is a performant, open-source zero-knowledge virtual machine (zkVM) that verifies the execution of arbitrary Rust (or any LLVM-compiled language) programs.'}
            />
            <Card 
            content={'The Groth16 algorithm enables a quadratic arithmetic program to be computed by a prover over elliptic curve points derived in a trusted setup, and quickly checked by a verifier'}
            />
            <Card 
            content={"The world's first RISC-V zkVM."}
            />

            <Card 
            content={"The liquidity layer for Bitcoin's Economy."}
            />
            <Card 
            content={'Bitfinity provides the Ethereum development experience, with layer-2-like speed and scalability on Bitcoin. If you are a Solidity developer, getting started on Bitfinity is as easy as changing the RPC endpoint.'}
            />
            <Card 
            content={'Decentralised Insurance Infrastructure for Bitcoin Ecosystem.'}
            />
            <Card 
            content={'B² Network is the most practical Bitcoin Layer2 Network. A zk proof verification commitment rollup on Bitcoin. EVM compatible. Supporting Bitcoin address account and Ethereum address account. Fast and cheap. Safe and trusty.'}
            />
        </div>

    </div>
  )
}

export default Work