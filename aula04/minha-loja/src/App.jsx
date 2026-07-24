import React from 'react'
import Cabecalho from './components/Cabecalho'
import CartaoProduto from './components/CartaoProduto'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
const App = () => {
  const produtos = [
   {id: 1, nome: "Teclado mecânico", preco: 320, descricao: "Teclado Logitech"},
   {id: 1, nome: "Headser gamer", preco: 430, descricao: "Headset Logitech"},
   {id: 1, nome: "Mouse sem fio", preco: 300, descricao: "Mouse Logitech"},
  ]
  return (
    <div>
      <TrabalhandoComImagens/>
      <Cabecalho />
      <h1>Lista de Produtos</h1>
      {
        produtos.map((p) => (
          <CartaoProduto key={p.id} nome={p.nome} preco={p.preco} descricao={p.descricao} />
        ))
      }

    </div>
  )
}

export default App