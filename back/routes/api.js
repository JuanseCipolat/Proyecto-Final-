const express = require('express');
const router = express.Router();
const noticiasModel = require('../models/noticiasModel');
const productosModel = require('../models/productosModel');
const reviewsModel = require('../models/reviewsModel');
const retroModel = require('../models/retroModel');
const nodemailer = require('nodemailer');

// Ruta para obtener todas las noticias
router.get('/noticias', async (req, res) => {
    try {
        const noticias = await noticiasModel.getNoticias(); 
        res.json(noticias); 
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para obtener todos los productos
router.get('/productos', async (req, res) => {
    try {
        const productos = await productosModel.getProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para obtener todas las reviews
router.get('/reviews', async (req, res) => {
    try {
        const reviews = await reviewsModel.getReviews();
        res.json(reviews);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para obtener todos los juegos retro
router.get('/retro', async (req, res) => {
    try {
        const retro = await retroModel.getRetro();
        res.json(retro);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para enviar correo electrónico

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

// Endpoint para manejar el envío del correo
router.post('/enviar-correo', async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const mailOptions = {
    from: correo, 
    to: 'jscipolat@gmail.com', 
    subject: `Nuevo mensaje de ${nombre} desde el formulario de contacto`,
    text: mensaje,
    html: `<p><strong>Nombre:</strong> ${nombre}</p>
           <p><strong>Correo:</strong> ${correo}</p>
           <p><strong>Mensaje:</strong></p>
           <p>${mensaje}</p>`
  };

  try {
    // Envío del correo
    await transporter.sendMail(mailOptions);
    res.status(200).json({ mensaje: '¡Correo enviado con éxito!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al enviar el correo' });
  }
});

module.exports = router;


module.exports = router;
