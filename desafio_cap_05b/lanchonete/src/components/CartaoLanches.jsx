const CartaoLanches = ({id, nome, preco, descricao}) => {
  return (
    <div>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Preco:</b> R$ {preco}</p>
        <p><b>Descricao:</b> {descricao}</p>
    </div>
  )
}

export default CartaoLanches