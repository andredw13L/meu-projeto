function OutraLista({itens}) {
    return (
        <>
          <h3>lista de coisas boas:</h3>
          {itens.length > 0 ?(
            // Index cria um id único para cada item
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            )
            )) : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}

export default OutraLista