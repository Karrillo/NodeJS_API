var express = require('express');
var router = express.Router();
var dbUsuarios = require('../database/dbUsuarios.js');
//localhost:3000/usuarios
router.get('/', function(req, res, next) {
  	dbUsuarios.GetUsuarios(req, res, next);	
});
//localhost:3000/usuarios/DeleteUsuarios?id_usuario=
router.get('/DeleteUsuarios', function(req, res, next) {
  	dbUsuarios.DeleteUsuarios(req, res, next);	
});
//localhost:3000/usuarios/InsertUsuarios?id_persona=
router.get('/InsertUsuarios', function(req, res, next) {
  	dbUsuarios.InsertUsuarios(req, res, next);	
});
//localhost:3000/usuarios/UpdateUsuarios?id_persona=&id_usuario=
router.get('/UpdateUsuarios', function(req, res, next) {
  	dbUsuarios.UpdateUsuarios(req, res, next);	
});
//localhost:3000/usuarios/UsuariosDatos?id_usuario=
router.get('/UsuariosDatos', function(req, res, next) {
  	dbUsuarios.GetAllUsuariosData(req, res, next);	
});
//localhost:3000/usuarios/UsuariosComment?id_usuario=
router.get('/UsuariosComment', function(req, res, next) {
  	dbUsuarios.GetAllCommentUsuarios(req, res, next);	
});

module.exports = router;