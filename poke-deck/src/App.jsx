import React, { useState, useEffect } from 'react';
import { fetchPokemonsByType } from './api';
import { loadTheme } from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Button from './components/Button';
import PokemonDetails from './components/PokemonDetails';   // ⬅️ IMPORTAR DETALHES

const types = ['water', 'fire', 'grass', 'electric'];

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);  // ⬅️ POKÉMON SELECIONADO

  useEffect(() => {
    loadTheme();
  }, []);

  const handleTypeClick = async (type) => {
    setLoading(true);
    const data = await fetchPokemonsByType(type);
    setPokemons(data);
    setLoading(false);
  };

  return (
    <div>
      <Header />

      {/* ⬅️ MODAL DE DETALHES */}
      {selected && (
        <PokemonDetails 
          pokemon={selected} 
          onClose={() => setSelected(null)} 
        />
      )}

      <div className="buttons">
        {types.map(t => (
          <Button key={t} type={t} onClick={handleTypeClick} />
        ))}
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <List pokemons={pokemons} onSelect={setSelected} />  // ⬅️ ENVIA A FUNÇÃO
      )}

      <Footer />
    </div>
  );
};

export default App;
