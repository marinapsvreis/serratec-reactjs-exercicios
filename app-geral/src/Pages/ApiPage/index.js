import { useEffect, useState } from 'react';
import {Body, Container, Header} from '../style'
import {api} from '../../Services/api'

export const ApiPage = () => {
  const [cliente, setCliente] = useState({
      nomeCompleto: "",
      email: ""
  })

  const [clienteList, setClienteList] = useState([])

  const [idCliente, setIdCliente] = useState()

  function handleChange(e){
    setIdCliente(e.target.value)
  }

  function handleClick(){
    getCliente()
  }

  const getCliente = async () => {
    const response = await api.get(`cliente/${idCliente}`)
    setCliente(response.data)
  }

  // useEffect(()=>{
  //   //const client = 3
  //   const getCliente = async () => {
  //     const response = await api.get(`cliente/${idCliente}`)
  //     setCliente(response.data)
  //   }
  //   getCliente()
  //   console.log(cliente)
  // }, [])

  return (
    <Body>
      <Container>
        <Header>
          Buscar Cliente API <br/>
          <input type="number" onChange={handleChange}></input>
          <button onClick={handleClick}>Buscar</button>
          <p>{cliente.nomeCompleto}</p>
          <p>{cliente.email}</p>          
        </Header>
      </Container>
    </Body>
  )
}
