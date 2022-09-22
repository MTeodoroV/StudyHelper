import React from 'react'
import './Module.css'

export const Module = (props) => {
  return (
    <div className='listModule'>
        <div className='moduleBoxMath'>
            {props.placeholder}
        </div>
        <div className='moduleBoxMath'>
            {props.placeholder}
        </div>
        <div className='moduleBoxMath'>
            {props.placeholder}
        </div>
    </div>
  )
}
