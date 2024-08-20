require('dotenv').config(); 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var fileUpload = require('express-fileupload');
var createError = require('http-errors');
var cloudinary = require('./cloudinary'); 
var methodOverride = require('method-override');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/index');
var noticiasRouter = require('./routes/admin/noticias');
var reviewsRouter = require('./routes/admin/reviews');
var retroRouter = require('./routes/admin/retro');
var productosRouter = require('./routes/admin/productos');
var apiRouter = require('./routes/api');

var app = express();


app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


app.use(methodOverride('_method')); 

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'frecuenciagamer23',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true,
}));

// Middleware para verificar autenticación
secured = async (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
};

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin', secured, adminRouter);
app.use('/admin/noticias', secured, noticiasRouter);
app.use('/admin/reviews', secured, reviewsRouter);
app.use('/admin/retro', secured, retroRouter);
app.use('/admin/productos', secured, productosRouter);
app.use('/api', cors(), apiRouter);

// Agregar ruta para logout
app.use('/admin/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin/login');
  });
});

// Manejo de errores
app.use(function (req, res, next) {
  next(createError(404)); 
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
