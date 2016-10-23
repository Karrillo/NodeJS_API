var express = require('express');
var router = express.Router();
var dbRecetas = require('../database/dbRecetas.js');
//localhost:3000/recetas
router.get('/', function(req, res, next) {
  	dbRecetas.GetRecetas(req, res, next);	
});
//localhost:3000/recetas/DeleteRecetas?id_receta=
router.get('/DeleteRecetas', function(req, res, next) {
  	dbRecetas.DeleteRecetas(req, res, next);	
});
//localhost:3000/recetas/InsertRecetas?nombre=&descripcion=&fecha=0000-00-00&nivel=&porciones=&tiempo=00:00:00&id_chef=&id_categoria=
router.get('/InsertRecetas', function(req, res, next) {
  	dbRecetas.InsertRecetas(req, res, next);	
});
//localhost:3000/recetas/UpdateRecetas?id_receta=&nombre=&descripcion=&fecha=0000-00-00&nivel=&porciones=&tiempo=00:00:00&id_chef=&id_categoria=
router.get('/UpdateRecetas', function(req, res, next) {
  	dbRecetas.UpdateRecetas(req, res, next);	
});
//localhost:3000/recetas/RecetaView
router.get('/RecetaView', function(req, res, next) {
  	dbRecetas.GetView(req, res, next);	
});
//localhost:3000/recetas/RecetaPersona?id_receta=
router.get('/RecetaPersona', function(req, res, next) {
  	dbRecetas.GetPersona(req, res, next);	
});

module.exports = router;