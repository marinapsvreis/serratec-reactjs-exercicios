import {Link, useParams} from 'react-router-dom'
import {Body, Container, Header} from '../style'
import Foto from "../../Sources/foto-minha.jpg";
import {Image, Descricao} from "./style"

export const SecondPage = () => {
  let {nome, idade} = useParams();

  return (
    <Body>
      <Container>
        <Header>
          <h3>Quem somos</h3>
          <Image src={Foto} alt="" />
          <h4> Olá eu sou o/a {nome} e eu tenho {idade} anos</h4>
          <Descricao>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
          </Descricao>
          <Link to="/">Página Inicial</Link>
        </Header>
      </Container>
    </Body>
  )
}
