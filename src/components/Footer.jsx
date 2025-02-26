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

                            <a href='' target='_blank' className="group">
                                <RiMediumLine
                                size={22} 
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                                />
                            </a>
                            <a href='https://t.me/layeredge' target='_blank' className="group">
                                <LiaTelegram
                                size={22}
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                                />
                            </a>
                            <a href='https://discord.com/invite/layeredge' target='_blank' className="group">
                                <RxDiscordLogo
                                size={22}
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                            />
                            </a>
                            <a href='https://x.com/layeredge' target='_blank' className="group">
                                <FaXTwitter
                                size={22}
                                className="text-gray-400 group-hover:text-white transition-colors duration-200"
                                />
                            </a>
                        </div>
                    </div>

                    <h3 className='py-2 text-white text-[min(3vw,1.2rem)] my-8'>Security Layer on Bitcoin.</h3>
                    <p className='py-2 text-[#6D737A] font-thin text-[min(3vw,1rem)]'>LayerEdge @ 2024-2025. All right reserved.</p>
                        
                </div>

                <div className='md:ml-56 mx-20 md:mt-0 mt-14'>
                    <h3 className='text-[min(4vw,1.5rem)] font-bold text-white'>Explore</h3>
                    <ul className='py-6 text-[#6D737A] text-[min(3vw,1rem)]'>
                        <li className='py-2 my-3 hover:text-white hover:transition-colors hover:duration-200'><a href='https://github.com/Layer-Edge/Whitepaper' target='_blank'>Whitepaper</a></li>
                        <li className='py-2 my-3 hover:text-white hover:transition-colors hover:duration-200'><a href='https://github.com/Layer-Edge' target='_blank'>GitHub</a></li>
                        <li className='py-2 my-3 hover:text-white hover:transition-colors hover:duration-200'><a href='https://docs.layeredge.io/' target='_blank'>Docs</a></li>
                        <li className='py-2 my-3 hover:text-white hover:transition-colors hover:duration-200'><a href='https://catsignet.com/' target='_blank'>Bitcoin Testnet Explorer</a></li>
                    </ul>
                </div>

                <div className='md:ml-56 mx-20 md:mt-0 mt-14'>
                    <h3 className='text-[min(4vw,1.5rem)] font-bold text-white '>Resources</h3>
                    <ul className='py-6 text-[#6D737A] text-[min(3vw,1rem)]'>
                        <li className='py-2 my-3 hover:text-white hover:transition-colors hover:duration-200'><a href='' target='_blank'>Contact</a></li>
                        <li className='py-2 my-3 hover:text-white hover:transition-colors hover:duration-200'><a href='' target='_blank'>Blog</a></li>
                        <li className='py-2 my-3 hover:text-white hover:transition-colors hover:duration-200'><a href='https://drive.google.com/drive/folders/1avOvqo_wiJZ65JYw5Lvl4GqZaCfhitHg' target='_blank'>Media Kit</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer