export default function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="tcg-card" onClick={onClick}>
      <div className="tcg-header">
        <span className="tcg-name">{pokemon.name}</span>
        <span className="tcg-hp">HP {pokemon.hp || 60}</span>
      </div>

      <img className="tcg-art" src={pokemon.image} alt={pokemon.name} />

      <div className="tcg-type-bar">{pokemon.types.join(" / ")}</div>
    </div>
  );
}
