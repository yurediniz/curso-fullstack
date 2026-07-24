import React from 'react'
import Cabecalho from './components/Cabecalho'
import CartaoLanches from './components/CartaoLanches'
import Banner from './components/Banner'

const App = () => {

  const lanches = [
    {id: 1, nome: "X-Bacon", preco: 35, descricao:  "Carne, Queijo, Bacon e Molho Especial"},
    {id: 2, nome: "X-Salada", preco: 32, descricao: "Carne, Queijo, Salada e Molho Especial"},
    {id: 3, nome: "Duplo X-Buguer", preco: 40, descricao: "Duas Carnes, Queijo e Molho Especial"},
    {id: 4, nome: "Duplo X-Buguer Bacon", preco: 45, descricao: "Duas Carnes, Queijo, Bacon e Molho Especial"}
  ]

  return (
    <div>
      <Cabecalho/>
      <h1>Cardápio</h1>
      <Banner />
      {lanches.map((l) => (
        <CartaoLanches key={l.ip} nome={l.nome} preco={l.preco} descricao={l.descricao}/>
      ))}
    </div>
  )
}

export default App