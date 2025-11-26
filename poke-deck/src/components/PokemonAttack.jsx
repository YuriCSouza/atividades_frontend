import React from "react";

export default function PokemonAttack({ attack }) {
  return (
    <div className="tcg-attack">
      <div className="atk-header">
        <strong className="atk-name">{attack.name}</strong>
        {attack.damage && <span className="atk-dmg">{attack.damage}</span>}
      </div>
      <p className="atk-desc">{attack.text || "Sem descrição."}</p>
    </div>
  );
}
