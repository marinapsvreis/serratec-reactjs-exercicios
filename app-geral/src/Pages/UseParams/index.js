import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Body, Container, Header} from '../style'

export function UseParams() {
  let { idUseParams } = useParams();

  const [userInput, setUserInput] = React.useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleClick() {
    idUseParams = userInput;

    setUserInput("");

    navigate("/useparams/" + idUseParams);
  }

  if (idUseParams !== undefined) {
    return (
      <Body>
        <Container>
          <Header>Página com parâmetro URL: {idUseParams}</Header>
        </Container>
      </Body>
    );
  } else {
    return (
      <Body>
        <Container>
          <Header>
            <label>Insira um parâmetro: </label>
            <input type="text" onChange={handleChange} value={userInput} />
            <button type="submit" onClick={handleClick}>
              Enviar
            </button>
          </Header>
        </Container>
      </Body>
    );
  }
}