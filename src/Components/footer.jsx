import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';


export function Footer() {
  return (
    <div className="py-5 border-t-3/2">
            <div className="flex align-center justify-center mt-4">
                
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/fantastic-yuvi">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/fantastic_yuvi/">
              <BsInstagram />
              <span class="sr-only">Instagram</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/yuvraj-singh-gangwar-b614a822b/">
              <BsLinkedin />
              <span class="sr-only">Linkedin</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-emerald-500 rounded-full hover:text-white transition-colors duration-300" href="https://mailto:ysgangwarfbd2001@gmail.com">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙 lack of sleep and Lots of coffee</span>by<a className="text-pink-500 hover:text-sky-600 duration-300" href="https://fantastic-yuvi.github.io/portfolio-website/"> Yuvraj Singh Gangwar</a>
              </p>
              </div>
    </div>
  );
};

