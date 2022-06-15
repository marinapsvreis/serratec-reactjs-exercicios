import './App.css'
import { Root } from './Routes/Root'
import { Contexto } from "./Context/data"

export function App() {
  return (
    <Contexto>
      <Root/>
    </Contexto>
  )
}

export default App
