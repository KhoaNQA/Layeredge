import React, {useState} from 'react';
import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';
import close from '../assets/close.png';
import { RiMediumLine} from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { RxDiscordLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "../Nav.css"


const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const handleClick = ()=> setToggle(!toggle)
  return (
    <div className='fixed top-0 left-0 w-full z-50 navbar'>
      <div className='w-full h-[100px] md:px-20 px-10'>
        <div className='md:max-w-[1480px] w-full m-auto h-full flex justify-between items-center px-5 sm:px-10'>
              
          <div className='flex'>
          <Link to="/">
              <img src={logo} className="h-[30px] cursor-pointer" alt="Logo" />
            </Link>

            <div className='hidden sm:flex items-center gap-5 ml-5'>

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

            <div className='hidden xl:flex' >
              <ul className='flex gap-7 text-white'>
                  <li className='nav-options'>Docs</li>
                  <li className='nav-options'>Blog</li>
                  <li className='nav-options'><Link to="/ecosystem">Ecosystem</Link></li>
                  <li className='nav-options'>Explorer</li>
              </ul>
            </div>
            
            <div className='hidden xl:flex'>
              <button className='px-5 py-2 rounded-full bg-black text-white border  hover:bg-gray-900'>Run a light node</button>
            </div>

            <div className='xl:hidden' onClick={handleClick}>
              <img src={toggle?close:hamburger} className='h-[30px]'/>
            </div>
            

        

            <div className={toggle?' p-4 items-center flex flex-col justify-center bg-black text-white w-full px-8 xl:hidden ':'hidden'}>
                <ul className='flex flex-col items-center justify-center font-bold gap-4'>
                    <li className='px-4 py-2 rounded-full hover:bg-gray-900'>Docs</li>
                    <li className='px-4 py-2 rounded-full hover:bg-gray-900'>Blog</li>
                    <li className='px-4 py-2 rounded-full hover:bg-gray-900'>Ecosystem</li>
                    <li className='px-4 py-2 rounded-full hover:bg-gray-900'>Expolrer</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-3 rounded-full border hover:bg-gray-900 text-white font-bold'>Run a light node</button>
                    </div>
                </ul>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar