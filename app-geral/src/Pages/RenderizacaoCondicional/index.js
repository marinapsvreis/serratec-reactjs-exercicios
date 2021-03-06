import { useState } from 'react'
import {Body, Container, Header} from '../style'

export const RenderizacaoCondicional = () => {
  const [isLogado, setIsLogado] = useState(false)

  function SaudacaoUsuario() {
    return <h3>Bem vindo de Volta!</h3>
  }

  function SaudacaoVisitante() {
    return <h3>Por favor, registre-se.</h3>
  }

  function validarLogInLogOff(props) {
    if (props) {
      return <SaudacaoUsuario />
    } else {
      return <SaudacaoVisitante />
    }
  }

  function logar() {
    if (isLogado) {
      setIsLogado(false)
    } else {
      setIsLogado(true)
    }
  }

  return (
    <Body>
      <Container>
        <Header>
        {validarLogInLogOff(isLogado)}
      <button onClick={() => logar()}>{isLogado ? 'Log-off' : 'Login'}</button>
        </Header>
      </Container>
    </Body>
  )
}
