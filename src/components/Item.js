import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
  return (
    <>
     <li>{marca} - {ano_lancamento}</li>
    </>
  )
}


// Definir um tipo que é esperado ser atribuído à props 
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
}

// Se houver uma default Props o isRequired não gerará um aviso



// Tipo padrão erm caso de ausência
Item.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 0,
}

export default Item