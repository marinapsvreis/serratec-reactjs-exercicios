import React from 'react'

export const ComponenteFilho = props => {
  return (
    <>
      <h3>{props.nome}</h3>
      <h3>{props.idade}</h3>
      <h3>{props.nerd ? 'Verdadeiro' : 'Falso'}</h3>
    </>
  )
}
