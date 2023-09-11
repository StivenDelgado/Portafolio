import React, {} from 'react'

interface InputProps
{
    type: string
    placeholder: string
    name: string
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input( props: InputProps) {
  return (
    <input onChange={props.onChange} type={props.type} placeholder={props.placeholder + '...'} name={props.name} className='rounded-md p-2 w-[60%] bg-[#D0BFFF] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.20]'/>
  )
}

export default Input
