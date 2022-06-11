import React, { useState } from 'react'
import { ReceberLista } from './ReceberLista'
export const FazerLista = () => {
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])

  function handleChange(e) {
    setItem(e.target.value)
  }

  function saveItem(items) {
    items.push(item)
    setItems(items)
    setItem('')
    document.getElementById('inputItem').value = ''
  }

  return (
    <>
      <label>Digite um item:</label>
      <input type="text" id="inputItem" onChange={e => handleChange(e)}></input>
      <button onClick={() => saveItem(items)} value="Salvar">
        Salvar
      </button>
      <button onClick={() => setItems([])}>Clear List</button>
      <h3>Lista de Compras:</h3>
      <ReceberLista items={items} />
    </>
  )
}
