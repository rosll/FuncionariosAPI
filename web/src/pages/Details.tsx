import React from 'react'
import '../styles/pages/details.css'
import Back from '../components/Back'

export default function Details() {
  return(
    <div id='pag-details'>
      <Back />
      <main>
        <div className='details-func'>
          <fieldset>
            <legend>+ Info</legend>
            <div className='details-content'>
              <p>Nome: Romulo Lima</p>
              <p>Departamento: TI</p>
              <p>Email: romulo123@msnyahoo.us</p>
              <p>Telefone: 1234567895</p>      
            </div>
          </fieldset>
        </div>
      </main>
    </div>
  )
}