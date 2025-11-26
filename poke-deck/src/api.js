const BASE_URL = "https://pokeapi.co/api/v2";

// Busca pokémons por tipo (ex: fire, water, grass)
export async function fetchPokemonsByType(type) {
  try {
    const response = await fetch(`${BASE_URL}/type/${type}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar Pokémons por tipo");
    }

    const data = await response.json();

    // A API retorna um array diferenciado
    // Aqui deixo só os nomes e URLs dos pokémons
    const pokemons = data.pokemon.map((p) => ({
      name: p.pokemon.name,
      url: p.pokemon.url
    }));

    return pokemons;
  } catch (error) {
    console.error(error);
    return [];
  }
}
