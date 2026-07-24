import React from 'react'

const CartaoProduto = ({nome, preco, descricao}) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
      <p>Descrição: {descricao}</p>
    </div>
  )
}

export default CartaoProduto