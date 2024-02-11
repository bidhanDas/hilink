import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="max-container md:px-16 px-4">

      <div className="w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase text-[18px] font-[400] -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex justify-between">
          <h2 className="text-[64px] font-[700] leading-[120%] max-w-[390px]">Guide You to Easy Path</h2>
          <p className="text-[16px] font-[400] text-gray-30 max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>

      <div className="relative">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="rounded-5xl"
        />

        <div className="absolute left-[5%] top-20 flex bg-white py-8 pl-5 pr-7 gap-x-3 rounded-3xl border shadow-md">
          
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="w-auto"
          />
          <div className="flex flex-col justify-between items-center">
            <div className='w-full'>
              <div className="flex items-center justify-between w-full">
                <p className="text-[16px] font-[400] text-gray-20">Destination</p>
                <p className="text-[16px] font-[700] text-green-50">48 min</p>
              </div>
              <p className="text-[20px] font-[700] mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="text-[16px] font-[400] text-gray-20">Start track</p>
              <h4 className="text-[20px] font-[700] mt-2">Wonorejo Pasuruan</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Guide