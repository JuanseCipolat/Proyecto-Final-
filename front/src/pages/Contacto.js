
import React from 'react';
import '../styles/components/pages/Contacto.css';

const Contacto = () => {
  return (
    <div className="main">
      <section className="seccion-contacto">
        <h2>Contacto</h2>
        <form action="#" method="post">
          <div className="grupo-formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="grupo-formulario">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="grupo-formulario">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </div>
          <div className="grupo-formulario">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contacto;
