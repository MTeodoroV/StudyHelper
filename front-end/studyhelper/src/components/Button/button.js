import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
    <container className="container">
        <button type='button' className='button'>
            {props.placeholder}
        </button>
    </container>
  )
}
