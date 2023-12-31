import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose ,AiFillHome} from 'react-icons/ai';
import {CiLogout} from 'react-icons/ci';
import {IoIosCreate} from 'react-icons/io'
import {FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {auth} from '../config/firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from 'firebase/auth';
import { Hero } from '../pages/main/hero';
export const NavbarNew = () => {
  const signuserout=()=>{
    signOut(auth);
}
const[user]=useAuthState(auth);
  // ----------------------------
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link to='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            FeviCall
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 '>
            <Link to="/">HOME</Link>
            {!user ? (<li className='p-4'>
            <Link to="/login">LOGIN</Link>
          </li>) :(<li className='p-4'>
          <Link to="/createpost">CREATE POST</Link>
          </li>)}
            
          </li>
          <li className='p-4'>
          {
                user && 
                <>
                <button onClick={signuserout } className='bg-gradient-to-r from-stone-900 text- to-rose-700 text-white px-4 py-2 border-none rounded-md ml-8 hover:animate-pulse'> 
                <CiLogout/> Log Out
                </button>
                </> 
            } 
          </li>
          
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
          <li className='p-4 '>
            <Link to="/">HOME</Link>
            {!user ? (<li className='p-4'>
            <Link to="/login">LOGIN</Link>
          </li>) :(<li className='p-4'>
          <Link to="/createpost">CREATE POST</Link>
          </li>)}
            
          </li>
          <li className='p-4'>
          {
                user && 
                <>
                <button onClick={signuserout } className='bg-gradient-to-r from-stone-900 text- to-rose-700 text-white px-4 py-2 border-none rounded-md ml-8 hover:animate-pulse'> 
                <CiLogout/> Log Out
                </button>
                </> 
            } 
          </li>
          </ul>
        </div>
      </div>
    </div>

  );
};