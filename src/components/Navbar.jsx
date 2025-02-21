import React from 'react';
import logo from '../assets/logo.png';
import { RiMediumLine} from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { RxDiscordLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className='w-full h-[80px] bg-black '>
          <div className='max-w-[1100px] m-auto w-full h-full flex justify-between items-center'>
              

              <div className='flex items-center gap-5'>
                <img src={logo} className='h-[30px]'/>
                <button>
                  <RiMediumLine size={22} className="Medium" style={{color: 'grey'}}
                  />
                </button>

                <button>
                  <LiaTelegram size={22} className="Telegram" style={{color: 'grey'}}
                  />
                </button>

                <button>
                  <RxDiscordLogo size={22} className="Discord" style={{color: 'grey'}}
                  />
                </button>

                <button>
                  <FaXTwitter size={22} className="Twitter" style={{color: 'grey'}}
                  />
                </button>
              </div>

              {/* <div className='flex items-center text-white p-10 grid-cols-5'> */}
                  <ul className='flex items-center gap-10 text-white text-base'>
                      <li>Docs</li>
                      <li>Blog</li>
                      <li>Ecosystem</li>
                      <li>Exporer</li>

                      <button className='px-5 py-2 rounded-full bg-black text-white border'>Run a light node</button>
                  </ul>
                  
            {/* </div> */}

          </div>
      </div>
    </div>
  )
}

export default Navbar