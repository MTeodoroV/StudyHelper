import React, { useState } from 'react'
import { FieldInput } from '../Input/input'
import cadastro from '../../public/img/cadastro.png'
import emailMask from './Mask'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'

export const Register = () => {
    const photos = ['https://i.imgur.com/0nJ6mOe.png', 'https://i.imgur.com/AbjupGx.png', 'https://i.imgur.com/cpPs0UN.png', 'https://i.imgur.com/Euhyyyp.png']
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.checkValidity();
        console.log(email)
        if (!email) {
            toast.error('Erro ao tentar fazer o cadastro.', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
          return false;
    }}
    
    const toggleRequiredField = (e) => {
        if (!e.target.value) {
          document.getElementById(`${e.target.id}_em_`).style.display = "block";
        } else {
          document.getElementById(`${e.target.id}_em_`).style.display = "none";
        }
      };
    
    

  return (
    <section className='formRegister'>
        <div>
            <img className="img" src={cadastro} alt="imgCadastro" />
        </div>
            <div>
                <div className='containerPhotos'>
                    {photos.map((link) =>
                    <img className='teste'
                        onClick={() => setPhoto(link)}
                        style={{
                        opacity: photo === link ? 1 : 0.3,
                        }}
                        src={link}
                    />
                    )}
                </div>
                <form className='fieldForm' onSubmit={ (e) =>  handleSubmit(e)}>
                    <FieldInput className="fields" placeholder="Nome"/>
                    <FieldInput className="fields" 
                        placeholder="Email"
                        toggleRequiredField={(e) => toggleRequiredField(e)}
                        message={"Insira um email valido"}
                        required={true}
                        value={email}
                        setValue={setEmail}
                        type="text"
                        specialValidation={emailMask(email)}
                    />
                    <FieldInput className="fields" placeholder="Senha"/>
                    <FieldInput className="fields"placeholder="Confirmar senha"/>
                    <button className="buttonRegister" type='submit' value="Submit">Cadastrar</button>
                </form>
            </div>
            <ToastContainer/>
    </section>
  )
}
