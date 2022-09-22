import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HelperButton.css'

export const HelperButton = (props) => {
    function helpMessage(){
        toast.success(props.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        });        
    }

    return (
        <div>
            <button className='helperButtonModule' onClick={() => helpMessage()}>?</button>
            <ToastContainer/>
        </div>
    )
}
