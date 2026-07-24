import Cabecalho from './components/Cabecalho'
import Banner from './components/Banner'
import CartaoLanches from './components/CartaoLanches'

const lanches = [
    {
        id:1,
        nome:"X-Burger",
        preco:25,
        descricao:"Brioche, Carne 180g, Queijo e Maionese Especial"
    },
    {
        id:2,
        nome:"X-Burger Bacon",
        preco:30,
        descricao:"Brioche, Carne 180g, Queijo, Bacon e Maionese Especial"
    },
    {
        id:3,
        nome:"X-Burger Duplo",
        preco:40,
        descricao:"Brioche, 2xCarne 120g, 2xQueijo, e Maionese Especial"
    },
    {
        id:4,
        nome:"X-Burger Duplo",
        preco:45,
        descricao:"Brioche, 2xCarne 120g, 2xQueijo, 2xBacon e Maionese Especial"
    },
    {   
        id:5,
        nome:"Adicional Combo",
        preco:15,
        descricao:"Batata Frita 200g e Refri Lata 350ml"
    }
]

const App = () => {
  return (
    <div>
        <Banner/>
        <Cabecalho/>
        <h2>Cardápio</h2>
        {lanches.map((l) => (
            <CartaoLanches 
                key={l.id}
                nome={l.nome}
                preco={l.preco}
                descricao={l.descricao}
            />
        ))}
    </div>
  )
}

export default App