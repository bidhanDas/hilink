import Image from 'next/image';
import React from 'react'

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}   bg-cover bg-no-repeat bg-center   rounded-5xl`}>
     <div className="flex flex-col h-full items-start justify-between px-20 py-10">

      <div className="flex items-center justify-center gap-x-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div><h4 className="text-[18px] font-[700] text-white">{title}</h4></div>
          <div><p className="text-[14px] font-[400] text-white">{subtitle}</p></div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-6">
        <span className="flex -space-x-4">
          <Image className="h-10 w-10 rounded-full" src={'/person-1.png'} alt="person" width={52} height={52} />
          <Image className="h-10 w-10 rounded-full" src={'/person-2.png'} alt="person" width={52} height={52} />   
          <Image className="h-10 w-10 rounded-full" src={'/person-3.png'} alt="person" width={52} height={52} /> 
          <Image className="h-10 w-10 rounded-full" src={'/person-4.png'} alt="person" width={52} height={52} /> 
        </span>
        <p className="text-[20px] font-[700] text-white">{peopleJoined}</p>
      </div>

     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='max-container md:px-16 px-4 py-20 mb-20'>

      <div className="hide-scrollbar overflow-x-auto    flex gap-x-8  h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      
    </section>
  )
}

export default Camp