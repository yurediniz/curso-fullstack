import styles from '../CartaoLivro.module.css'

const CartaoLivro = ({id, titulo, autor, disponivel}) => {
  return (
    <div className={disponivel ? styles.disponivel : styles.emprestado}>
        <h2>Titulo: {titulo}</h2>
        <p><b>Autor:</b> {autor}</p>
        <p>{disponivel ? "✅ Disponível na estante" : "❌ Emprestado"}</p>
    </div>
  )
}

export default CartaoLivro