import React from 'react';
import Item from './titre';
import PokemonCard from './pokemoncard';

const List =({data}) =>{
    
    return(
    <ul>
       {data.map((pokemons, index)=>(
        <Item key={`pokemons`+ index}{...pokemons} />
        ))}:

    </ul>
    );
}

export default List