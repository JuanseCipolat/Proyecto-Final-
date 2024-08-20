import React from 'react';
import '../../styles/pages/Retro.css'; 

const RetroItem = ({ titulo, contenido, imagen }) => {
  return (
    <div className="retro-item">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};

export default RetroItem;
