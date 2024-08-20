import React from 'react';
import '../../styles/pages/Noticias.css'; 

const NoticiaItem = ({ titulo, contenido, imagen }) => {
  return (
    <div className="noticia-item">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};

export default NoticiaItem;
