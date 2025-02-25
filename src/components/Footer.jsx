import React from 'react';
import logo from '../assets/logo.png';
import { RiMediumLine} from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { RxDiscordLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex mt-28 mb-10 bg-black'>
        <div className='w-full md:px-20 px-10'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-3 max-[400px]:grid-cols-2  gap-2 max-w-[700px]'>
                      
                <div className='md:ml-auto ml-20'>
                    <div className='flex'>
                    
                        <img src={logo} className='h-[30px] w-100%'/>

                        <div className='flex items-center gap-5 ml-5'>

                            <button className="group">
                            <RiMediumLine
                                size={22}
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                            />
                            </button>
                            <button className="group">
                            <LiaTelegram
                                size={22}
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                            />
                            </button>
                            <button className="group">
                            <RxDiscordLogo
                                size={22}
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                            />
                            </button>
                            <button className="group">
                            <FaXTwitter
                                size={22}
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                            />
                            </button>
                        </div>
                    </div>

                    <h3 className='py-2 text-white text-lg my-8'>Security Layer on Bitcoin.</h3>
                    <p className='py-2 text-[#6D737A] font-thin text-md'>LayerEdge @ 2024-2025. All right reserved.</p>
                        
                </div>

                <div className='md:ml-56 mx-20 md:mt-0 mt-14'>
                    <h3 className='text-2xl font-bold text-white'>Explore</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Whitepaper</li>
                        <li className='py-2'>GitHub</li>
                        <li className='py-2'>Docs</li>
                        <li className='py-2'>Bitcoin Testnet Explorer</li>
                    </ul>
                </div>

                <div className='md:ml-56 mx-20 md:mt-0 mt-14'>
                    <h3 className='text-2xl font-bold text-white '>Resources</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Contact</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Media Kit</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer