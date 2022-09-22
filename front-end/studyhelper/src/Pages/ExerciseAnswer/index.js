import React from 'react'
import { InternalExerciseAnswer } from '../../components/InternalExerciseAnswer/InternalExerciseAnswer'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'

export const ExerciseAnswerScreen = () => {
  return (
    <div>
        <Header/>
        <InternalExerciseAnswer/>
        <Footer/>
    </div>
  )
}
