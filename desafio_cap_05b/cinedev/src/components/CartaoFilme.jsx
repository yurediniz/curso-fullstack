const CartaoFilme = ({id, titulo, genero, nota}) => {
  return (
    <div>
        <h2>Título: {titulo}</h2>
        <p><b>Gênero:</b> {genero}</p>
        <p><b>Nota:</b> {nota}</p>
        {nota >=9 && <p>⭐</p>} 
    </div>
  )
}

export default CartaoFilme