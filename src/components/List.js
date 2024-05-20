import Item from './Item';

function List() {
    return (
        /* Fragments: Criação do componente sem um componente pai, <div> */
        <>
         <h1>Minha Lista</h1>
         <ul>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item marca="Ford" ano_lancamento={1964}/>
            <Item marca="Fiat" ano_lancamento={2014}/>
         </ul>
        </>
    )
}

export default List