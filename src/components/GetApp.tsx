import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="max-container md:px-16 px-4 pb-[100px]">
      <div className="lg:flex justify-between  bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat  text-white  py-24 px-20 max-h-[598px] rounded-5xl">
        {/* overflow-hidden */}
        <div className="flex flex-col gap-y-12 w-full">
          <h2 className="text-[64px] font-[700] leading-[120%] max-w-[320px]">Get for free now!</h2>
          <p className="text-[16px] font-[400] text-gray-10">Available on iOS and Android</p>

          <div className="lg:flex w-full gap-x-3">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>

        </div>

        <div >
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp