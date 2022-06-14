import React, { useState, useEffect } from 'react'
import { ControladaFilho } from '../../Components/ControladaFilho'
import {Body, Container, Header} from '../style'

export const ControladaPai = props => {
  const [nome, setNome] = useState('')

  function handleChange(e) {
    setNome(e.target.value)
  }

  useEffect(() => {
    document.title = `${nome}`
  })

  return (
    <Body>
      <Container>
        <Header>
          <label>
          Nome: <ControladaFilho nome={nome} />
          </label>
          <br></br>
          <input type="text" onChange={e => handleChange(e)}></input>
        </Header>
      </Container>
    </Body>
  )
}
