import React from 'react'
import { HelperButton } from '../../components/HelperButton/HelperButton'
import { InternalExercise } from '../../components/InternalExercise/InternalExercise'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'

export const ExerciseScreen = () => {
  return (
    <div>    
        <Header/>
        <InternalExercise/>
        <HelperButton message="Para ver a solução click no icone de chat"/>
        <Footer/>
    </div>
  )
}
