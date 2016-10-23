var express = require('express');
var router = express.Router();
var dbCategorias = require('../database/dbCategorias.js');
//localhost:3000/categorias
router.get('/', function(req, res, next) {
  	dbCategorias.GetCategorias(req, res, next);	
});
//localhost:3000/categorias/DeleteCategorias?id_categoria=
router.get('/DeleteCategorias', function(req, res, next) {
  	dbCategorias.DeleteCategorias(req, res, next);	
});
//localhost:3000/categorias/InsertCategorias?nombre=
router.get('/InsertCategorias', function(req, res, next) {
  	dbCategorias.InsertCategorias(req, res, next);	
});
http://localhost:3000/categorias/UpdateCategorias?id_categoria=&nombre=
router.get('/UpdateCategorias', function(req, res, next) {
  	dbCategorias.UpdateCategorias(req, res, next);	
});
//localhost:3000/categorias/RecetasCategoria?id_categoria=pasta
router.get('/RecetasCategoria', function(req, res, next) {
  	dbCategorias.GetAllRecipes(req, res, next);	
});

module.exports = router;