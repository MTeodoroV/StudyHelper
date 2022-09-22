import React from 'react'
import { FieldInput } from '../Input/input'
import { InputTextArea } from '../inputTextArea/InputTextArea'
import { SelectInput } from '../SelectInput/SelectInput'
import './AddModule.css'

export const AddModule = () => {
  return (
    <div>
        <section className='sectionModule'>
            <form className='formModule'>
                <FieldInput placeholder="Titulo do modulo. Ex.:Verbo,Operação"/>
                <SelectInput placeholder="Matéria"/>
                <InputTextArea placeholder="Explicação do conteúdo"/>
                <button className='submit'>Criar Modulo</button>
            </form>
        </section>

    </div>
  )
}
