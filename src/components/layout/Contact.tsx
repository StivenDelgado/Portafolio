import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <div className='flex w-full h-full justify-center items-center text-white'>
      <div className='w-[65%] flex flex-col items-center gap-20 h-full mt-36 '>
        <h3 className='text-6xl'>
            Contact<span className='text-[#D0BFFF]'>.</span>
        </h3>
        <div className='w-full h-[70%] flex justify-center items-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.20] '>
            <Form />
        </div>
      </div>
    </div>
  )
}
export default Contact
