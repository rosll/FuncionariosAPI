import React from 'react'
import '../styles/pages/dashboard.css'
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div id='pag-dashboard'>
      <main>
        <form className='form-dashboard'>
           <fieldset>
            <legend>Cadastro</legend>
            <div className='input-sessao'>
              <label>Nome</label>
              <input />
            </div>

            <div className='input-sessao'>
              <label>Email</label>
              <input />
            </div>

            <div className='input-sessao'>
              <label>Telefone</label>
              <input />
            </div>

            <div className='input-sessao'>
              <label>Departamento</label>
              <input />
            </div>

            <div className='input-sessao'>
              <label>Função</label>
              <input />
            </div>

            <div className='input-sessao'>
              <label>Fotos</label>
              <div className='fotos-func'>
                <label className='nova-foto'>
                  <FiPlus size={19} color="#2ad680" />
                </label>
              </div>
              {/* <input id="image[]"/> */}
            </div>

          </fieldset>

          <Link to='/info' >
            <button className='botao-salvar' type='submit'>
              Salvar
            </button>
          </Link>
        </form>
      </main>
    </div>
  )
}