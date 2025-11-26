import React from 'react';
import ListItem from './ListItem';

const List = ({ pokemons, onSelect }) => (
  <div className="list-container">
    <div className="deck">
      {pokemons.map(pokemon => (
        <ListItem 
          key={pokemon.name} 
          pokemon={pokemon} 
          onSelect={onSelect}
        />
      ))}
    </div>
  </div>
);

export default List;
