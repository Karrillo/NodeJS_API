var express = require('express');
var router = express.Router();
var dbIngredientes = require('../database/dbIngredientes.js');
//localhost:3000/ingredientes
router.get('/', function(req, res, next) {
  	dbIngredientes.GetIngredientes(req, res, next);	
});
//localhost:3000/ingredientes/DeleteIngredientes?id_ingrediente=
router.get('/DeleteIngredientes', function(req, res, next) {
  	dbIngredientes.DeleteIngredientes(req, res, next);	
});
//localhost:3000/ingredientes/InsertIngredientes?ingrediente=&id_receta=
router.get('/InsertIngredientes', function(req, res, next) {
  	dbIngredientes.InsertIngredientes(req, res, next);	
});
//localhost:3000/ingredientes/UpdateIngredientes?id_ingrediente=&ingrediente=&id_receta=
router.get('/UpdateIngredientes', function(req, res, next) {
  	dbIngredientes.UpdateIngredientes(req, res, next);	
});
//localhost:3000/ingredientes/RecetaIngredientes?id_receta
router.get('/RecetaIngredientes', function(req, res, next) {
  	dbIngredientes.GetAllIngredientes(req, res, next);	
});

module.exports = router;