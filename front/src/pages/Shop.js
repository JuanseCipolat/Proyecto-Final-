import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/Shop.css';

const Shop = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
        setProductos(response.data);
      } catch (error) {
        console.error("Error fetching productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <main className="shop-container">
      <h2 className="shop-title">Tienda</h2>
      <div className="shop-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="shop-item">
            <img src={producto.imagen} alt={producto.nombre} className="shop-item-img" />
            <h3 className="shop-item-title">{producto.nombre}</h3>
            <p className="shop-item-text">{producto.descripcion}</p>
            <p className="shop-item-price">${producto.precio}</p>
            <button className="shop-item-button">Comprar</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Shop;
