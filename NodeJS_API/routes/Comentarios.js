var express = require('express');
var router = express.Router();
var dbComentarios = require('../database/dbComentarios.js');
//localhost:3000/comentarios
router.get('/', function(req, res, next) {
  	dbComentarios.GetComentarios(req, res, next);	
});
//localhost:3000/comentarios/DeleteComentarios?id_comentario=
router.get('/DeleteComentarios', function(req, res, next) {
  	dbComentarios.DeleteComentarios(req, res, next);	
});
//localhost:3000/comentarios/InsertComentarios?texto=&fecha=0000-00-00&id_usuario=&id_receta=
router.get('/InsertComentarios', function(req, res, next) {
  	dbComentarios.InsertComentarios(req, res, next);	
});
//localhost:3000/comentarios/UpdateComentarios?id_comentario=&texto=&fecha=0000-00-00&id_usuario=&id_receta=
router.get('/UpdateComentarios', function(req, res, next) {
  	dbComentarios.UpdateComentarios(req, res, next);	
});
//localhost:3000/comentarios/ComentariosReceta?id_receta=
router.get('/ComentariosReceta', function(req, res, next) {
  	dbComentarios.GetAllCommentRecipe(req, res, next);	
});

module.exports = router;