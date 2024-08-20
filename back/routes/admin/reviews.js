const express = require('express');
const router = express.Router();
const reviewsModel = require('../../models/reviewsModel');
const cloudinary = require('../../cloudinary')

// Obtener todas las reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await reviewsModel.getReviews();
        res.render('admin/reviews', { reviews, layout: 'admin/layout' });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Crear una nueva review
router.post('/', async (req, res) => {
    try {
        let data = req.body;

        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
        }

        await reviewsModel.createReview(data);
        res.redirect('/admin/reviews');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Editar una review
router.put('/:id', async (req, res) => {
    try {
        let data = req.body;

        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
        }

        await reviewsModel.updateReview(req.params.id, data);
        res.redirect('/admin/reviews');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Eliminar una review
router.delete('/:id', async (req, res) => {
    try {
        await reviewsModel.deleteReview(req.params.id);
        res.redirect('/admin/reviews');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
