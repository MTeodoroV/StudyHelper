import React from 'react'
import { AddModule } from '../../components/AddModule/AddModule'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'

export const AddModuleScreen = () => {
  return (
    <div>
        <Header title="Adicionar modulo"/>
        <AddModule/>
        <Footer/>
    </div>
  )
}
