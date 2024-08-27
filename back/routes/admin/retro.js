const express = require('express');
const router = express.Router();
const retroModel = require('../../models/retroModel');
const cloudinary = require('cloudinary').v2;
const fs = require('fs-extra');

// Obtener todos los juegos retro
router.get('/', async (req, res) => {
    try {
        const retro = await retroModel.getRetro();
        res.render('admin/retro', { retro, layout: 'admin/layout' });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Crear un nuevo juego retro
router.post('/', async (req, res) => {
    try {
        let data = req.body;

        // Si hay imagen, cargarla a Cloudinary
        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
            await fs.unlink(imagen.tempFilePath); // Eliminar archivo temporal
        }

        await retroModel.createRetro(data);
        res.redirect('/admin/retro');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Editar un juego retro
router.put('/:id', async (req, res) => {
    try {
        let data = req.body;

        // Si hay imagen, cargarla a Cloudinary
        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
            await fs.unlink(imagen.tempFilePath); // Eliminar archivo temporal
        }

        await retroModel.updateRetro(req.params.id, data);
        res.redirect('/admin/retro');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Eliminar un juego retro
router.delete('/:id', async (req, res) => {
    try {
        await retroModel.deleteRetro(req.params.id);
        res.redirect('/admin/retro');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
