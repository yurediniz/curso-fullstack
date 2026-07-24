import Cabecalho from './components/Cabecalho'
import CartaoFilme from './components/CartaoFilme'

const filmes = [
    {
        id: 1,
        titulo: "A Morte do Demônio: Em Chamas",
        genero: "Terror",
        nota: 7.5
    },
    {
        id: 2,
        titulo: "A Odisseia",
        genero: "Ação, Aventura",
        nota: 9.7
    },
    {
        id: 3,
        titulo: "Moana",
        genero: "Filme para família, Comédia, Aventura",
        nota: 8.4
    },
    {
        id: 4,
        titulo: "O Convite",
        genero: "Comédia",
        nota: 9.0
    },
    {
        id: 5,
        titulo: "Minions & Monstros",
        genero: "Animação, Aventura, Comédia, Filme para família",
        nota: 7.5
    }
]

const App = () => {
    return (
        <div>
            <Cabecalho/>
            <h1>Em cartaz:</h1>
            {filmes.map((f) => (
                <CartaoFilme
                    key={f.id}
                    titulo={f.titulo}
                    genero={f.genero}
                    nota={f.nota}
                />
            ))}
        </div>
    )
}

export default App