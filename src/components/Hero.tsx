import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section id='hero' className='max-container md:px-16 px-4 py-20 pb-32 lg:flex gap-x-28'>

      <div className='relative lg:w-1/2'>
        <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-30px] w-[50px]"></Image>

        <h1 className="text-[88px] font-[700] leading-[120%]">Putuk Truno Camp Area</h1>

        <p className="text-[16px] font-[400] mt-6 text-gray-30 lg:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="my-11 flex gap-x-5">
          <div className="flex items-center gap-x-2">
            <Image src="/star.svg" alt="star" width={24} height={24} />
            <Image src="/star.svg" alt="star" width={24} height={24} />
            <Image src="/star.svg" alt="star" width={24} height={24} />
            <Image src="/star.svg" alt="star" width={24} height={24} />
            <Image src="/star.svg" alt="star" width={24} height={24} />
          </div>

          <p className="text-[20px] font-[700] text-blue-70">198k<span className="text-[20px] font-[400] ml-1"> Excellent Reviews</span></p>
          {/* 1 space works */}
        </div>

        <div className="flex gap-x-3 ">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button type="button" title="How we work?" icon="/play.svg" variant="btn_white_text"/>
        </div>
      </div>


      <div className='z-[1] w-[268px] h-[208px] rounded-3xl bg-green-90 px-7 py-8'>

        <div className='pb-8'>
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-[400] text-gray-20">Location</p>
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </div>
          <p className="text-[20px] font-[700] text-white">Aguas Calientes</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[16px] font-[400] text-gray-20">Distance</p>
            <p className="text-[20px] font-[700] text-white">173.28 mi</p>
          </div>
          <div>
            <p className="text-[16px] font-[400] block text-gray-20">Elevation</p>
            <p className="text-[20px] font-[700] text-white">2.040 km</p>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Hero