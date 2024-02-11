import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="max-container md:px-16 px-4 mb-24">
      <div className='lg:flex justify-between w-full mb-14'>
        <Link href="/">
          <Image src="hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>

        <ul>
          <li><h4 className="text-[18px] font-[700] pb-5">Learn More</h4></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>About Hilink</Link></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Press Releases</Link></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Environment</Link></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Jobs</Link></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Privacy Policy</Link></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Contact Us</Link></li>
        </ul>

        <ul>
          <li><h4 className="text-[18px] font-[700] pb-5">Our Community</h4></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Climbing xixixi</Link></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Hiking hilink</Link></li>
          <li><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Hilink kinthill</Link></li>
        </ul>

        <ul>
          <li><h4 className="text-[18px] font-[700] pb-5">Contact Us</h4></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Admin Officer: <span className='text-[14px] font-[600] text-blue-70'>123-456-7890</span></Link></li>
          <li className='pb-4'><Link href={'/'} className='text-[14px] font-[400] text-gray-30'>Email Officer: <span className='text-[14px] font-[600] text-blue-70'>hilink@akinthil.com</span></Link></li>
          {/* 1 space works */}
        </ul>

        <ul>
          <li><h4 className="text-[18px] font-[700] pb-5">Social</h4></li>
          <ul className='text-[14px] font-[400] flex gap-x-4 text-gray-30'>
            <li><Link href={'/'}> <Image src={'/facebook.svg'} alt="logo" width={24} height={24} /> </Link></li>
            <li><Link href={'/'}> <Image src={'/instagram.svg'} alt="logo" width={24} height={24} /> </Link></li>
            <li><Link href={'/'}> <Image src={'/twitter.svg'} alt="logo" width={24} height={24} /> </Link></li>
            <li><Link href={'/'}> <Image src={'/youtube.svg'} alt="logo" width={24} height={24} /> </Link></li>
            <li><Link href={'/'}> <Image src={'/wordpress.svg'} alt="logo" width={24} height={24} /> </Link></li>
          </ul>
        </ul>

      </div>

      <div className="border bg-gray-20" />

      <p className="text-[14px] font-[400] text-center text-gray-30 pt-14">2023 Hilink | All rights reserved</p>

    </footer>
  )
}


export default Footer