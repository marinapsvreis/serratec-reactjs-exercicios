import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from '../../Context/data'
import {Body, Container, Header} from '../style'
import {Lista, ItemLista} from './style'
export const Home = () => {
  const [usuario, setUsuario] = useState({nome: "Marina", idade: 30})
  const {name, handleSetName} = useContext(DataContext)

  return (
    <Body>
      <Container>
      <Header>
        <h2>Bem vindo!</h2>
        <h3>Base de Conhecimento sobre React JS</h3>
      </Header>
      <Lista>
        <Link to="/contador" style={{textDecoration: "none"}}><ItemLista>Contador</ItemLista></Link><br/>
        <Link to="/comunicacaodireta" style={{textDecoration: "none"}}><ItemLista>Comunicação Direta</ItemLista></Link><br/>
        <Link to="/comunicacaoindireta" style={{textDecoration: "none"}}><ItemLista>Comunicação Indireta</ItemLista></Link><br/>
        <Link to="/comunicacaocontrolada" style={{textDecoration: "none"}}><ItemLista>Comunicação Controlada</ItemLista></Link><br/>
        <Link to="/lista" style={{textDecoration: "none"}}><ItemLista>Lista de Compras<br/></ItemLista></Link><br/>
        <Link to="/rendercondicional" style={{textDecoration: "none"}}><ItemLista>Renderizacao Condicional</ItemLista></Link><br/>
        <Link to={`/quemsomos/${usuario.nome}&${usuario.idade}`} style={{textDecoration: "none"}}><ItemLista>Quem somos (desafio)</ItemLista></Link><br/>      
        <Link to="/notfound" style={{textDecoration: "none"}}><ItemLista>NotFound</ItemLista></Link><br/>              
        <Link to="/useparams" style={{textDecoration: "none"}}><ItemLista>UseParams e UseNavigate</ItemLista></Link><br/>
        <Link to="/apipage" style={{textDecoration: "none"}}><ItemLista>API Page</ItemLista></Link><br/>              
      </Lista> 
      </Container>
      <input type="text" placeholder="Digite seu nome" value={name} onChange={handleSetName}/>
      <p>Made by {name}</p>                
    </Body>
  )
}
