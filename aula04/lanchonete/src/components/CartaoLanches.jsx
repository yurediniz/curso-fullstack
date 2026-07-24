import React from 'react'

const CartaoLanches = ({id, nome, preco, descricao}) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Preco: R$ {preco}</p>
        <p>Descricao: {descricao}</p>
    </div>
  )
}

export default CartaoLanches