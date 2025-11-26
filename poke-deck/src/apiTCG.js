export async function getTCGCard(pokemonName) {
  try {
    // Remove letras maiúsculas para evitar falhas na busca
    const name = pokemonName.toLowerCase();

    const res = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${name}`
    );

    const json = await res.json();

    // caso nenhuma carta exista:
    if (!json.data || json.data.length === 0) return null;

    return json.data[0]; // primeira carta encontrada
  } catch (err) {
    console.error("Erro ao buscar carta TCG:", err);
    return null;
  }
}
