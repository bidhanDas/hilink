import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
  }

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button className={`flex items-center justify-center gap-x-3 rounded-full border ${variant} ${full && 'w-full'}`} type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className='text-[16px] font-[700] cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button