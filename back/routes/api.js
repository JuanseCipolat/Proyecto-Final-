const express = require('express');
const router = express.Router();
const noticiasModel = require('../models/noticiasModel');
const productosModel = require('../models/productosModel');
const reviewsModel = require('../models/reviewsModel');
const retroModel = require('../models/retroModel');

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

module.exports = router;
