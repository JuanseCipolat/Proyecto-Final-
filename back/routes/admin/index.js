const express = require('express');
const router = express.Router();
const noticiasModel = require('../../models/noticiasModel'); 
const reviewsModel = require('../../models/reviewsModel');   
const retroModel = require('../../models/retroModel');       
const productosModel = require('../../models/productosModel'); 

router.get('/', async (req, res) => {
  try {
    const noticias = await noticiasModel.getNoticias();
    const reviews = await reviewsModel.getReviews();
    const retro = await retroModel.getRetro();
    const productos = await productosModel.getProductos();

    res.render('admin/index', {
      noticias,
      reviews,
      retro,
      productos,
      layout: 'admin/layout'
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
