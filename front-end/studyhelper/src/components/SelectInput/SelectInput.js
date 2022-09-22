import React from 'react'
import './SelectInput.css'

export const SelectInput = () => {
  return (
    <div>
        <select  className="inputSelectField" name="cars" id="cars">
            <option value="" disabled selected hidden>Matéria</option>
            <option className="selectOption" value="Portugues">Português</option>
            <option className="selectOption" value="Matematica">Matemática</option>
        </select>
    </div>
  )
}
