const express = require('express');
const router = express.Router();
const productosModel = require('../../models/productosModel');
const cloudinary = require('cloudinary').v2;

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await productosModel.getProductos();
        res.render('admin/productos', { productos, layout: 'admin/layout' });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        let data = req.body;

        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
        }

        // Asegúrate de que los nombres de los campos coincidan con las columnas de la tabla productos
        const productoData = {
            nombre: data.nombre,        // Campo 'nombre' en la tabla
            descripcion: data.descripcion,  // Campo 'descripcion' en la tabla
            precio: data.precio,        // Campo 'precio' en la tabla
            stock: data.stock,          // Campo 'stock' en la tabla
            imagen: data.imagen         // Campo 'imagen' en la tabla
        };

        await productosModel.insertProducto(productoData);
        res.redirect('/admin/productos');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Editar un producto
router.put('/:id', async (req, res) => {
    try {
        let data = req.body;

        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const resultado = await cloudinary.uploader.upload(imagen.tempFilePath);
            data.imagen = resultado.secure_url;
        }

        // Asegúrate de que los nombres de los campos coincidan con las columnas de la tabla productos
        const productoData = {
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            stock: data.stock,
            imagen: data.imagen
        };

        await productosModel.updateProductoById(req.params.id, productoData);
        res.redirect('/admin/productos');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        await productosModel.deleteProductoById(req.params.id);
        res.redirect('/admin/productos');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
