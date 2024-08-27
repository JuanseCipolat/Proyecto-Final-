import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/Retro.css';

const Retro = () => {
  const [retro, setRetro] = useState([]);

  useEffect(() => {
    const fetchRetro = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/retro`);
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
      <div className="retro-list">
        {retro.length > 0 ? (
          retro.map((item) => (
            <div key={item.id} className="retro-item">
              <h4 className="retro-item-title">{item.titulo}</h4>
              <img src={item.imagen} alt={item.titulo} className="retro-item-img" />
              <p className="retro-item-text">{item.contenido}</p>
            </div>
          ))
        ) : (
          <p>No hay juegos retro cargados.</p>
        )}
      </div>
    </main>
  );
}

export default Retro;
