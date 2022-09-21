import React from 'react'
import './input.css'

export const FieldInput = (props) => {
  return (
    <div className='container'>
        <div>
            <input className="inputField" placeholder={props.placeholder}/>
        </div>
    </div>
  )
}
