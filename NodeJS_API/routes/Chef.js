var express = require('express');
var router = express.Router();
var dbChef = require('../database/dbChef.js');
//localhost:3000/Chef
router.get('/', function(req, res, next) {
  	dbChef.GetChef(req, res, next);	
});
//localhost:3000/Chef/DeleteChef?id_chef=
router.get('/DeleteChef', function(req, res, next) {
  	dbChef.DeleteChef(req, res, next);	
});
//localhost:3000/Chef/InsertChef?id_persona=
router.get('/InsertChef', function(req, res, next) {
  	dbChef.InsertChef(req, res, next);	
});
//localhost:3000/Chef/UpdateChef?id_chef=&id_persona=
router.get('/UpdateChef', function(req, res, next) {
  	dbChef.UpdateChef(req, res, next);	
});
//localhost:3000/Chef/ChefDatos?id_chef=
router.get('/ChefDatos', function(req, res, next) {
  	dbChef.GetAllChefData(req, res, next);	
});
//localhost:3000/Chef/ChefRecetas?id_chef=
router.get('/ChefRecetas', function(req, res, next) {
  	dbChef.GetAllRecipesChef(req, res, next);	
});

module.exports = router;