import styles from './CartaoProduto.module.css'
const CartaoProduto = ({id, nome, preco}) => {
  return (
    <div className={styles.cartao}>
        <b>Nome do Produto: {nome}</b>
        <p>Código do Produto: {id}</p>
        <p className={styles.preco}>Preço: {Number(preco).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</p>
    </div>
  )
}

export default CartaoProduto

