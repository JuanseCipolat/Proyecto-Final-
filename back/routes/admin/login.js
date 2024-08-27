var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

// Ruta para mostrar la pantalla de login
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

// Ruta para procesar el login o la creación de un nuevo usuario
router.post('/', async (req, res, next) => {
  try {
    if (req.body.new_user) {
      // Proceso de creación de usuario
      var usuario = req.body.new_usuario;
      var password = req.body.new_password;

      // Crear nuevo usuario en la base de datos
      await usuariosModel.createUser({ usuario: usuario, password: password });

      // Mostrar mensaje de éxito
      res.render('admin/login', {
        layout: 'admin/layout',
        success: 'Usuario creado exitosamente.'
      });
    } else {
      // Proceso de login
      var usuario = req.body.usuario;
      var password = req.body.password;

      // Verificar usuario y contraseña
      var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

      if (data) {
        req.session.id_usuario = data.id;
        req.session.usuario = data.usuario;
        res.redirect('/admin');
      } else {
        res.render('admin/login', {
          layout: 'admin/layout',
          error: 'Usuario o contraseña incorrectos. Inténtalo de nuevo.'
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.render('admin/login', {
      layout: 'admin/layout',
      error: 'Ocurrió un error, inténtalo nuevamente.'
    });
  }
});

module.exports = router;
