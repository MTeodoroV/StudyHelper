import React from 'react'
import './input.css'

export const FieldInput = (props) => {
  return (
    <div className='container'>
        <div className="login">
            <input className="inputField" placeholder={props.placeholder}/>
        </div>
    </div>
  )
}
