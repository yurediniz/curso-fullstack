const CartaoProduto = ({id, nome, preco}) => {
  return (
    <div>
        <b>Nome do Produto: {nome}</b>
        <p>Código do Produto: {id}</p>
        <p>Preço: {Number(preco).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</p>
    </div>
  )
}

export default CartaoProduto

