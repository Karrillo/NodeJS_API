var express = require('express');
var router = express.Router();
var dbProcedimientos = require('../database/dbProcedimientos.js');
//localhost:3000/procedimientos
router.get('/', function(req, res, next) {
  	dbProcedimientos.GetProcedimientos(req, res, next);	
});
//localhost:3000/procedimientos/DeleteProcedimientos?id_procedimiento=
router.get('/DeleteProcedimientos', function(req, res, next) {
  	dbProcedimientos.DeleteProcedimientos(req, res, next);	
});
//localhost:3000/procedimientos/InsertProcedimientos?numeracion=&procedimiento=&id_receta=
router.get('/InsertProcedimientos', function(req, res, next) {
  	dbProcedimientos.InsertProcedimientos(req, res, next);	
});
//localhost:3000/procedimientos/UpdateProcedimientos?id_procedimiento=&numeracion=&procedimiento=&id_receta=
router.get('/UpdateProcedimientos', function(req, res, next) {
  	dbProcedimientos.UpdateProcedimientos(req, res, next);	
});
//localhost:3000/procedimientos/RecetaProcedimientos?id_receta=
router.get('/RecetaProcedimientos', function(req, res, next) {
  	dbProcedimientos.GetAllProcedimientos(req, res, next);	
});

module.exports = router;