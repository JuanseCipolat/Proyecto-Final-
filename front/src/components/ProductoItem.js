import React from 'react';
import '../../styles/pages/Shop.css'; 

const ProductoItem = ({ nombre, descripcion, precio, imagen }) => {
  return (
    <div className="producto-item">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default ProductoItem;
