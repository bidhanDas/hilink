import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react'

const Features = () => {
  return (
  <section className="max-container md:px-16 px-4 py-24 bg-feature-bg bg-cover bg-no-repeat bg-center">
    <div className="relative flex justify-between items-center w-full">

      <div>
        <Image
          src="/phone.png"
          alt="phone"
          width={440}
          height={1000}
          className="absolute top-[13%] -left-16  hidden lg:block rotate-[15deg]"
        />
      </div>

      <div className="flex w-full flex-col lg:w-[60%]">

        <div className='relative'>
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px]"
          />
          <h2 className="text-[64px] font-[700] leading-[120%]">Our Features</h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-20">
          {FEATURES.map((item) => (
            <FeatureItem 
              title={item.title} 
              icon={item.icon}
              description={item.description}
            />
          ))}
        </ul>

      </div>
    </div>
  </section>
  )
}


type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li>
      <div className="h-[100px] w-[100px] rounded-full bg-green-50 relative">
        <Image src={icon} alt="map" width={28} height={28} className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2' />
      </div>
      <h2 className="text-[32px] font-[700] leading-[120%] mt-5 capitalize">
        {title}
      </h2>
      <p className="text-[16px] font-[400] text-gray-30 mt-[30px]">
        {description}
      </p>
    </li>
  )
}

export default Features