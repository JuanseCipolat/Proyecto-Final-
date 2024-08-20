import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/Noticias.css';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/noticias');
        setNoticias(response.data);
      } catch (error) {
        console.error("Error fetching noticias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <main className="noticias-container">
      <h2 className="noticias-title">Noticias</h2>
      {noticias.map((noticia) => (
        <div key={noticia.id} className="noticia">
          <img src={noticia.imagen} alt={noticia.titulo} className="noticia-img" />
          <h3 className="noticia-title">{noticia.titulo}</h3>
          <p className="noticia-text">{noticia.contenido}</p>
        </div>
      ))}
    </main>
  );
}

export default Noticias;
