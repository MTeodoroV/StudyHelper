import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { Footer } from '../../Layout/Footer/Footer'
import { Module } from '../Module/Module'
//import { AddButton } from '../AddButton/AddButton'
import { HelperButton } from '../HelperButton/HelperButton'
import { EditButton } from '../EditButton/EditButton'

export const Home = () => {
  return (
    <div>    
        <Header/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <Module placeholder="Verbo"/>
          <HelperButton message="Você pode editar o modulo"/>
          <EditButton/>
        <Footer/>
    </div>
  )
}
