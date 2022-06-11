import React from 'react'

export const IndiretaFilho = props => {
  return (
    <>
      <p>Filho chamada:</p>
      <button onClick={() => props.funcaoInformacao('Carlos', '72', true)}>
        Enviar informações
      </button>
    </>
  )
}
