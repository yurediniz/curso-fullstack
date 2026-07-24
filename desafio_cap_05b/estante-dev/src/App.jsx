import Cabecalho from './components/Cabecalho'
import CartaoLivro from './components/CartaoLivro'

const livros = [
    {
        id:1,
        titulo:"Entendendo Algoritmos",
        autor:"Aditya Y. Bhargava",
        disponivel: true
    },
    {
        id:2,
        titulo:"Código Limpo",
        autor:"Robert C. Martin",
        disponivel: true
    },
    {
        id:3,
        titulo:"Algoritmos - Teoria e Prática",
        autor:"Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein",
        disponivel: false
    },
    {
        id:4,
        titulo:"Ultra-aprendizado",
        autor:"Scott Young",
        disponivel: false
    }
]

const App = () => {
    return (
        <div>
            <Cabecalho />
            <h1>Livros:</h1>
            {livros.map((l) => (
                <CartaoLivro
                    key={l.id}
                    titulo={l.titulo}
                    autor={l.autor}
                    disponivel={l.disponivel}
                />
            ))}
        </div>
    )
}

export default App