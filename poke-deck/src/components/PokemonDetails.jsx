import React, { useEffect, useState } from "react";

export default function PokemonDetails({ pokemon, onClose }) {
  const [info, setInfo] = useState(null);
  const [tcg, setTcg] = useState(null);

  // 🔧 Normaliza nomes entre PokéAPI e TCG API
  function normalizeName(name) {
    const map = {
      "nidoran♀": "Nidoran F",
      "nidoran♂": "Nidoran M",
      "nidoran-f": "Nidoran F",
      "nidoran-m": "Nidoran M",
      "farfetch’d": "Farfetchd",
      "mr-mime": "Mr. Mime",
      "mime-jr": "Mime Jr",
      "type-null": "Type: Null",
      "flabébé": "Flabebe",
    };
    const cleaned = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
    return map[name] || map[cleaned] || name;
  }

  useEffect(() => {
    async function load() {
      try {
        // 1️⃣ Pega dados do Pokémon
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        const data = await res.json();
        setInfo(data);

        // 2️⃣ Pega dados da TCG API
        const fixedName = normalizeName(pokemon.name);
        const query = encodeURIComponent(`name:${fixedName} supertype:pokemon`);
        const tcgRes = await fetch(
          `https://api.pokemontcg.io/v2/cards?q=${query}&pageSize=1`,
          { headers: { "X-Api-Key": "512e1232-93c3-4c10-a2cd-5af6e4dbb7ba" } }
        );

        if (!tcgRes.ok) {
          // Se o status da resposta não for 200, tratamos como erro
          console.warn(`Erro TCG API: ${tcgRes.status}`);
          setTcg(null);
          return;
        }

        const tcgJson = await tcgRes.json();
        setTcg(tcgJson?.data?.[0] || null);

      } catch (err) {
        console.error("Erro ao carregar TCG:", err);
        setTcg(null); // garante que não quebre o React
      }
    }

    load();
  }, [pokemon]);

  if (!info) return <p>Carregando carta...</p>;

  const hp = info.stats[0].base_stat;
  const types = info.types.map((t) => t.type.name).join(", ");

  return (
    <div className="modal-overlay">
      <div className="poke-tcg-card">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className={`tcg-header ${info.types[0].type.name}`}>
          <span className="tcg-name">{info.name}</span>
          <span className="tcg-hp">{hp} HP</span>
        </div>

        <img
          className="tcg-art"
          src={info.sprites.other["official-artwork"].front_default}
          alt={info.name}
        />

        <div className="tcg-type-bar">{types}</div>

        <div className="tcg-attacks">
          <h3>Ataques</h3>
          {!tcg?.attacks?.length && <p>Nenhum ataque TCG encontrado.</p>}
          {tcg?.attacks?.map((atk, i) => (
            <div key={i} className="tcg-attack">
              <div className="atk-header">
                <span className="atk-name">{atk.name}</span>
                <span className="atk-dmg">{atk.damage || "-"}</span>
              </div>
              <p className="atk-desc">{atk.text || "Sem descrição."}</p>
            </div>
          ))}
        </div>

        <div className="tcg-info">
          <p><strong>Peso:</strong> {info.weight}</p>
          <p><strong>Altura:</strong> {info.height}</p>
          <p><strong>Base XP:</strong> {info.base_experience}</p>
        </div>
      </div>
    </div>
  );
}
