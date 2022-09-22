import React from 'react'
import './InputTextArea.css'

export const InputTextArea = (props) => {
  return (
    <div>
        <textarea className='inputTextArea' placeholder={props.placeholder}/>
    </div>
  )
}
