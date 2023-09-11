import React, {ReactNode} from 'react'
import Image, {StaticImageData} from 'next/image'
import {BiLogoReact, BiLogoNodejs, BiLogoCss3} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'



interface cardProp{
  children: ReactNode,
  img: StaticImageData
}
  
function Project(props: cardProp) {
  return (
    <div className='flex flex-col items-center h-[350px] w-[350px] bg-gray-400 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.20]'>
      <h3 className='p-4'>{props.children}</h3>
      <Image 
      src={props.img}
      alt=''
      height={100}
      width={500}
      />
      <div className='text-[#62dafb] text-4xl flex justify-around w-full mt-4'>
        <BiLogoReact />
        <TbBrandNextjs />
        <BiLogoNodejs />
        <AiFillHtml5 />
        <BiLogoCss3 />
      </div>
    </div>
  )
}

export default Project
