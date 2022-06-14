import React from 'react'
import { ComponenteFilho } from '../../Components/ComponenteFilho'
import {Body, Container, Header} from '../style'

export const ComponentePai = () => {
  return (
    <Body>
     <Container>
      <Header>
      <ComponenteFilho nome="Marina" idade={30} nerd={true} />
      </Header>
     </Container>
    </Body>
  )
}
