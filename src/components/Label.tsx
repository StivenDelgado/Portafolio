import React, {ReactNode} from 'react'
interface labelProps{
    htmlfor: string
    children: ReactNode
}

function Label(props : labelProps) {
  return (
    <label htmlFor={props.htmlfor} className='text-white flex flex-col'>
        {props.children}
    </label>
  )
}

export default Label
