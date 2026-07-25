import styles from '../CartaoDestino.module.css'
const CartaoDestino = ({id, cidade, pais, preco}) => {
  return (
    <div>
        <p>Cidade: {cidade}</p>
        <p>País: {pais}</p>
        <p>Preço: R${preco}</p>
    </div>
  )
}

export default CartaoDestino