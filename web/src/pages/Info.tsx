import React from 'react'
import '../styles/pages/info.css'
import { Link } from 'react-router-dom'
import Back from '../components/Back'

export default function Info(){
  return (
    <div id='pag-info'>
      <Back />
      <main>
        <div className='info-func'>
          <fieldset>
            <legend>Info</legend>
            <img />
            <div className='info-content'>
              <p>Nome: Romulo Lima</p>
              <p>Função: DBA</p>

              <button className='botao-excluir' type='reset'>
                Excluir
              </button>
              <Link to='/detalhes'  >
                <button className='detalhes'>
                  Detalhes
                </button>
              </Link>
            </div>
          </fieldset>
        </div>
      </main>
    </div>
  )
}