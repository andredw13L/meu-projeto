import Item from './Item';

function List() {
    return (
        /* Fragments: Criação do componente sem um componente pai, <div> */
        <>
         <h1>Minha Lista</h1>
         <ul>
            <Item marca="Ferrari" />
            <Item marca="Ford" />
            <Item marca="Fiat" />
         </ul>
        </>
    )
}

export default List