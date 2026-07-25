import Cabecalho from "./components/Cabecalho"
import CartaoProduto from "./components/CartaoProduto"

const App = () => {

  const produtos = [
    {
      id: 1,
      nome: "Notebook 💻",
      preco: 3000
    },
    {
      id: 2,
      nome: "Mouse 🖱️",
      preco: 300
    },
    {
      id: 3,
      nome: "Teclado ⌨️",
      preco: 500
    },
    {
      id: 4,
      nome: "Headset 🎧",
      preco: 450
    },
    {
      id: 5,
      nome: "Microfone 🎙️",
      preco: 350
    }
  ]
  return (
    <div>
      <Cabecalho />
      {
        produtos.map((p) => (
          <CartaoProduto
            nome={p.nome}
            id={p.id}
            preco={p.preco}
          />
        ))
      }
    </div>
  )
}

export default App