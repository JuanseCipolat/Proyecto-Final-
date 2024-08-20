var express = require("express");
var router = express.Router();
var usuariosModel = require("./../../models/usuariosModel");

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("admin/login", { layout: "admin/layout" });
});

/* POST login form */
router.post("/", async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(
      usuario,
      password
    );

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect("/admin");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

/* GET logout */
router.get("/logout", function (req, res, next) {
  req.session.destroy(function(err) {
    res.redirect("/admin/login");
  });
});

/* POST register form */
router.post("/register", async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    await usuariosModel.createUser(usuario, password);

    res.redirect("/admin/login");
  } catch (error) {
    console.log(error);
    res.render("admin/login", {
      layout: "admin/layout",
      error: true,
    });
  }
});

module.exports = router;
