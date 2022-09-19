import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
    <container className="container">
        <button type='button' className='button' onClick={() => console.log("Foi")}>
            {props.placeholder}
        </button>
    </container>
  )
}
