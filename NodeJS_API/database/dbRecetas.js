var config = require("../config.js");
var mysql = require('mysql');

if (process.env.NODE_ENV == 'production'){
	var db = config.productionDatabase;
} 
else {
	var db = config.developmentDatabase;
}

exports.GetRecetas = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT * FROM recetas', function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = rows;		
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};

exports.GetView = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT * from vreceta', function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = rows;					
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};

exports.GetPersona = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('CALL p_receta ( ? )',[req.query.id_receta], function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = rows;					
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};

exports.InsertRecetas = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        Nombre: req.query.nombre,
        Descripcion: req.query.descripcion,
        Fecha: req.query.fecha,
        Nivel: req.query.nivel,
        Porciones: req.query.porciones,
        Tiempo: req.query.tiempo,
        ID_Chef: req.query.id_chef,
        ID_categoria: req.query.id_categoria
    };
	connection.query('INSERT INTO recetas SET ?', post, function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = {
				'message' : 'Inserted'};			
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};

exports.UpdateRecetas = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
		Nombre: req.query.nombre,
        Descripcion: req.query.descripcion,
        Fecha: req.query.fecha,
        Nivel: req.query.nivel,
        Porciones: req.query.porciones,
        Tiempo: req.query.tiempo,
        ID_Chef: req.query.id_chef,
        ID_categoria: req.query.id_categoria
    };
	connection.query('UPDATE recetas SET ? WHERE ID_receta = ?', [post, req.query.id_receta], function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = {
				'message' : 'Updated'};			
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};

exports.DeleteRecetas = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();

	connection.query('DELETE FROM recetas WHERE ID_receta = ?', [req.query.id_receta], function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = {
				'message' : 'Deleted'};			
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};