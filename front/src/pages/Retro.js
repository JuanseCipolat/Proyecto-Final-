import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/Retro.css';

const Retro = () => {
  const [retro, setRetro] = useState([]);

  useEffect(() => {
    const fetchRetro = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/retro');
        setRetro(response.data);
      } catch (error) {
        console.error("Error fetching retro games:", error);
      }
    };

    fetchRetro();
  }, []);

  return (
    <main className="retro-container">
      <h2 className="retro-title">Retro</h2>
      <div className="retro-section">
        <h3 className="retro-section-title">Juegos Clásicos</h3>
        {retro.filter(item => item.tipo === "juego").map((item) => (
          <div key={item.id} className="retro-item">
            <h4 className="retro-item-title">{item.titulo}</h4>
            <img src={item.imagen} alt={item.titulo} className="retro-item-img" />
            <p className="retro-item-text">{item.contenido}</p>
          </div>
        ))}
      </div>
      <div className="retro-section">
        <h3 className="retro-section-title">Consolas Retro</h3>
        {retro.filter(item => item.tipo === "consola").map((item) => (
          <div key={item.id} className="retro-item">
            <h4 className="retro-item-title">{item.titulo}</h4>
            <img src={item.imagen} alt={item.titulo} className="retro-item-img" />
            <p className="retro-item-text">{item.contenido}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Retro;
