
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req, res){
	res.render('index',{
		title : 'Bienvenidos'
	});
});
app.get('/suscribete', function(req, res){
	res.render('suscribete',{
		title : "Subscripcion"
	});
});
app.get('/bellezas', function(req, res){
	res.render('bellezas', {
		title : "Nuestras Bellezas"
	});
});
app.get('/contactanos', function(req, res){
	res.render('contactanos',{
		title : "Contactanos"
	});
});
app.get('/login', function(req, res){
	res.render('login',{
		title : "Iniciando Sesion"
	});
});
app.get('/info', function(req, res){
	res.render('info',{
		title : "Informacion"
	});
});
app.get('/system', function(req, res){
	res.render('system',{
		title : "system"
	});
});
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
