import React from 'react'
import '../styles/components/back.css'
import { useHistory } from 'react-router-dom'

export default function Back() {
  const { goBack } = useHistory()

  return (
    <button className="back" type="button" onClick={goBack} >
      Voltar
    </button>
  )
}