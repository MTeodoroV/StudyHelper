import React, { useState } from 'react';
import { FieldInput } from '../../components/Input/input';
//import ToastyContainer from '../../components/Toast/toastContainer';
//import { errorToast } from '../../components/Toast/toast';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export const Login = () => {
    //const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function sendEmail(e){
        e.preventDefault();
        toast.error('Erro ao tentar fazer o login', {
            position: toast.POSITION.BOTTOM_RIGHT
        });        
    }

    return (
        <section className='formLogin'>
                <form onSubmit={sendEmail}>
                    <FieldInput placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                    <FieldInput placeholder="Senha" 
                    onChange={(e) => setSenha(e.target.value)}
                    value={senha}/>
                <div className='buttonLogin'>
                    <button className="button" type='submit' value="Submit">Login</button>
                </div>
                <div className="Cadastro">
                    <p>Não tem cadastro? Clique aqui</p>
                </div>
                </form>
                <ToastContainer/>
        </section>
  )
}
