import React from 'react';

const Button = ({ type, onClick }) => (
  <button onClick={() => onClick(type)} className="type-button">
    {type.charAt(0).toUpperCase() + type.slice(1)}
  </button>
);

export default Button;
