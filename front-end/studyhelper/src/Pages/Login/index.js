import React, { useState } from 'react'
import { Button } from '../../components/Button/button';
import { FieldInput } from '../../components/Input/input';
import './styles.css'

export const Login = () => {

    const [email, setEmail] = useState("");

    return (
        <section className='formLogin'> 
            <form>
                <FieldInput placeholder="Email"/>
                <FieldInput placeholder="Senha"/>
                <Button placeholder="Login"/>
                <div className="Cadastro">
                    <p>Não tem cadastro? Clique</p>
                    <a>aqui</a>
                </div>
            </form>
        </section>
  )
}
