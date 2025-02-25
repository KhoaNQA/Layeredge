import React from 'react'
import BannerCard from './BannerCard'

const Banner = () => {
  return (
    <div className='text-white flex mx-auto my-32'>
        <div className='mx-20'>
            <h2 className='font-bold text-[min(5vw,3.5rem)] lg:mx-32 mx-8'>
                <ul>Bitcoin</ul>
                <ul>as Bedrock</ul>
                <ul>For Blockchains</ul>
            </h2>

            <div className='grid md:grid-cols-2 grid-cols-1 lg:mx-32 mx-2 mt-20 gap-10'>
                <BannerCard 
                title={'Modular'}
                content={'Our modular architecture supports a flexible and adaptable infrastructure, allowing seamless integration with various protocols and stacks. This flexibility empowers developers to leverage Bitcoin L1’s security without burdening the Bitcoin network.'}
                />
                <BannerCard 
                title={'Aggregation'}
                content={'At the core of our solution is aggregation. By combining multiple zk-proofs into a single, compact proof, we minimize load, making Bitcoin’s security more accessible and practical for a wide range of protocols.'}
                />
                <BannerCard 
                title={'Leaf-Level Verifiability'}
                content={'LayerEdge ensures verifiability by allowing each protocol to verify its specific zk-proofs from the aggregated proof posted on the Bitcoin network. This preserves the integrity of individual computations while leveraging the security of Bitcoin L1.'}
                />
                <BannerCard 
                title={'Trust-minimized settlement'}
                content={'LayerEdge enables a modular future for blockchains with its execution layer that keeps the settlement on Bitcoin leveraging BitVM.'}
                />

            </div>
        </div>
        
    </div>
  )
}

export default Banner