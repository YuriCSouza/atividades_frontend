import React, { useEffect, useState } from "react";

const ListItem = ({ pokemon, onSelect }) => {
  const id = pokemon.url.split("/")[6];
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const json = await res.json();

      setDetails({
        image: json.sprites.front_default,
        name: json.name,
        type: json.types[0].type.name,
        hp: json.stats[0].base_stat,
        id
      });
    };

    load();
  }, [id]);

  if (!details) return null;

  return (
    <div className="poke-card" onClick={() => onSelect(details)}>
      <div className={`poke-header ${details.type}`}>
        <span className="poke-name">{details.name}</span>
        <span className="poke-hp">{details.hp} HP</span>
      </div>

      <img className="poke-img" src={details.image} alt={details.name} />

      <div className="poke-type-label">Tipo: {details.type}</div>
    </div>
  );
};

export default ListItem;
