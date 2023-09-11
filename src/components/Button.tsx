
import React, {ReactNode,MouseEventHandler} from 'react'

interface ButtonProps {
  children?: ReactNode;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button(props : ButtonProps) {

  return (
    <button className={props.className} type='submit' onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
