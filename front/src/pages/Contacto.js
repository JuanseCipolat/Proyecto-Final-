import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/Contacto.css';

const Contacto = () => {
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [estadoMensaje, setEstadoMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormularioDatos((prevDatos) => ({ ...prevDatos, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/enviar-correo`, formularioDatos);
      setEstadoMensaje(response.data.mensaje);
      setFormularioDatos({ nombre: '', correo: '', mensaje: '' });
    } catch (error) {
      setEstadoMensaje('Error al enviar el mensaje');
    }
  };

  return (
    <div className="main">
      <section className="seccion-contacto">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="grupo-formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={formularioDatos.nombre} onChange={handleChange} required />
          </div>
          <div className="grupo-formulario">
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" value={formularioDatos.correo} onChange={handleChange} required />
          </div>
          <div className="grupo-formulario">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" value={formularioDatos.mensaje} onChange={handleChange} required></textarea>
          </div>
          <div className="grupo-formulario">
            <button type="submit">Enviar</button>
          </div>
        </form>
        {estadoMensaje && <p>{estadoMensaje}</p>}
      </section>
    </div>
  );
}

export default Contacto;
