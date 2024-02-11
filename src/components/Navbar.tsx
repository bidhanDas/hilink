"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [navigation, setNavigation] = useState(false);

  return (
    <>
    <nav className='max-container md:px-16 px-4 py-8 flex items-center justify-between'>

      <Link href={"/"}>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
      </Link>

      <ul className="hidden gap-x-12 lg:flex items-center justify-center">
       <Link href={'/'} className="text-[16px] font-[400] text-gray-50 cursor-pointer hover:font-bold duration-300 ease-in-out">Home</Link>
       <Link href={'/'} className="text-[16px] font-[400] text-gray-50 cursor-pointer hover:font-bold duration-300 ease-in-out">How Hilink Work?</Link>
       <Link href={'/'} className="text-[16px] font-[400] text-gray-50 cursor-pointer hover:font-bold duration-300 ease-in-out">Services</Link>
       <Link href={'/'} className="text-[16px] font-[400] text-gray-50 cursor-pointer hover:font-bold duration-300 ease-in-out">Pricing</Link>
       <Link href={'/'} className="text-[16px] font-[400] text-gray-50 cursor-pointer hover:font-bold duration-300 ease-in-out">Contact Us</Link>
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"></Button>
      </div>

      {
        !navigation && (
          <div className='lg:hidden block cursor-pointer' onClick={() => setNavigation(true)}> {/* call-back function*/}
            <FaBars size={30}></FaBars>
          </div>
        )
      }

    </nav>


    <div className={navigation ? 'z-[99] fixed left-0 top-0 w-full h-full bg-black/70' : ''}>
      <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-green-600 text-white p-10 ease-in duration-500' :'fixed top-0 left-[-100%] p-10 ease-out duration-500'}>
        
        <div>
          <div className='flex justify-between items-center'>
            <Link href={"/"}><Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image></Link>

            <div className='cursor-pointer' onClick={() => setNavigation(false)}>
              <FaTimes size={30}></FaTimes>
            </div>
          </div>
        </div>

        <ul className='mt-12'>
          <li className='py-4'><a href="/" className='text-2xl font-[400]'>Home</a></li>
          <li className='py-4'><a href="/" className='text-2xl font-[400]'>How Hilink Work?</a></li>
          <li className='py-4'><a href="/" className='text-2xl font-[400]'>Services</a></li>
          <li className='py-4'><a href="/" className='text-2xl font-[400]'>Pricing</a></li>
          <li className='py-4'><a href="/" className='text-2xl font-[400]'>Contact Us</a></li>
        </ul>

      </div>
    </div>

  

    </>
  )
}

export default Navbar