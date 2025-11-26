import React from 'react';
import { toggleTheme } from '../theme';  // ⬅️ IMPORTAÇÃO

const Header = () => (
  <header className="header">
    <div className="header-top">
      <h1>Poke Deck</h1>

      {/* BOTÃO DE ALTERAR TEMA */}
      <button className="theme-btn" onClick={toggleTheme}>
        Alternar Tema
      </button>
    </div>

    <p>Escolha um tipo de Pokémon para ver sua coleção!</p>
  </header>
);

export default Header;
