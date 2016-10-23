var express = require('express');
var router = express.Router();
var dbPersonas = require('../database/dbPersonas.js');
//localhost:3000/personas
router.get('/', function(req, res, next) {
  	dbPersonas.GetPersonas(req, res, next);	
});
//localhost:3000/personas/DeletePersonas?id_persona=
router.get('/DeletePersonas', function(req, res, next) {
  	dbPersonas.DeletePersonas(req, res, next);	
});
//localhost:3000/personas/InsertPersonas?username=&clave=&apellido1=&apellido2=&email=&nombre=
router.get('/InsertPersonas', function(req, res, next) {
  	dbPersonas.InsertPersonas(req, res, next);	
});
//localhost:3000/personas/UpdatePersonas?id_persona=&username=&clave=&apellido1=&apellido2=&email=&nombre=
router.get('/UpdatePersonas', function(req, res, next) {
  	dbPersonas.UpdatePersonas(req, res, next);	
});

module.exports = router;