import React, {useEffect, useState} from 'react'

export const Contador = props => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`
  })

  return (
    <>
      <h3>Contador</h3>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(0)}>Clean</button>
    </>
  )
}