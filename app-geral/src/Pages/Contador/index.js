import React, {useEffect, useState} from 'react'
import {Body, Container, Header} from '../style'
import { CaixaContador, NumeroContador, BotaoContador } from './style';

export const Contador = props => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`
  })

  return (
    <Body>
      <Container>
      <Header>Contador</Header>
      <CaixaContador>
      <NumeroContador>{contador}</NumeroContador>
      <BotaoContador onClick={() => setContador(contador + 1)}>+</BotaoContador>
      <BotaoContador onClick={() => setContador(contador - 1)}>-</BotaoContador>
      <BotaoContador onClick={() => setContador(0)}>Clean</BotaoContador></CaixaContador>
    </Container>
    </Body>
  )
}