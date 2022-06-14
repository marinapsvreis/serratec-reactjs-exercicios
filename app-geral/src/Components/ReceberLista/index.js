import { CardLista, ContainerLista } from "./style"

export const ReceberLista = props => {
  return (
    <>
      <ContainerLista>
        {props.items.map(res => (
          <CardLista>{res}</CardLista>
        ))}
      </ContainerLista>
    </>
  )
}
