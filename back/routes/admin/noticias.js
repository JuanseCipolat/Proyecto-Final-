const express = require('express');
const router = express.Router();
const noticiasModel = require('../../models/noticiasModel');
const cloudinary = require('cloudinary').v2;

// Obtener todas las noticias
router.get('/', async (req, res) => {
    try {
        const noticias = await noticiasModel.getNoticias();
        res.render('admin/noticias', { noticias, layout: 'admin/layout' });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Crear una nueva noticia
router.post('/', async (req, res) => {
    try {
        let data = req.body;

        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
        }

        await noticiasModel.createNoticia(data);
        res.redirect('/admin/noticias');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Editar una noticia
router.put('/:id', async (req, res) => {
    try {
        let data = req.body;

        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
        }

        await noticiasModel.updateNoticia(req.params.id, data);
        res.redirect('/admin/noticias');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Eliminar una noticia
router.delete('/:id', async (req, res) => {
    try {
        await noticiasModel.deleteNoticia(req.params.id);
        res.redirect('/admin/noticias');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
