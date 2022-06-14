import React, { useState } from 'react'
import { IndiretaFilho } from '../../Components/IndiretaFilho'
import {Body, Container, Header} from '../style'

export const IndiretaPai = () => {
  const [pai, setPai] = useState({
    nome: '',
    idade: 0,
    nerd: false
  })

  function informacaoDoPai(nome, idade, nerd) {
    setPai({
      nome: nome,
      idade: idade,
      nerd: nerd
    })
  }

  return (
    <Body>
      <Container>
      <Header>
      <div>
        <h3>{pai.nome}</h3>
        <h3>{pai.idade}</h3>
        <h3>{pai.nerd ? 'Verdadeiro' : 'Falso'}</h3>
      </div>
      <IndiretaFilho funcaoInformacao={informacaoDoPai}></IndiretaFilho>
      </Header>
      </Container>
    </Body>
  )
}
