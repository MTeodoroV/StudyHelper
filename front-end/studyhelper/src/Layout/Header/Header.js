import React from 'react'
import iconStudyHelper from '../../public/img/iconStudyHelper.png'
//import { FiLogOut } from 'react-icons/fi';
import { FaUserEdit } from 'react-icons/fa';

import './Header.css'

export const Header = () => {
  const teste = 1;
  
  if(teste == 0){
    return (
      <header className='header'>
          <input className='search' placeholder='Pesquisar'></input>
          <div className="materia">
              <button className='pt'>Português</button>
              <button className='math'>Matemática</button>
          </div>
          <div class="dropdown" style={{ float: "left"}}>
            <img className="profilePhoto" src={iconStudyHelper}></img>
              <div class="dropdown-content">
                <a href="#">Editar Perfil <FaUserEdit className="ancora"/></a>
                <a href="#">Sair</a>
              </div>
          </div>
      </header>
    )
  } else {
    return (
      <header className='header'>
          <div className="internalMateria">
              <button className='exercisePT'>Português - Verbo</button>
              <button className='backButton'>Voltar</button>
          </div>
          <div class="dropdown" style={{ float: "left"}}>
            <img className="profilePhoto" src={iconStudyHelper}></img>
              <div class="dropdown-content">
                <a href="#">Editar Perfil <FaUserEdit className="ancora"/></a>
                <a href="#">Sair</a>
              </div>
          </div>
      </header>
    )
  }
}
