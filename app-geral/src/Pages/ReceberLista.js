export const ReceberLista = props => {
  return (
    <>
      <ol>
        {props.items.map(res => (
          <li>{res}</li>
        ))}
      </ol>
    </>
  )
}
