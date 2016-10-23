var config = require("../config.js");
var mysql = require('mysql');

if (process.env.NODE_ENV == 'production'){
	var db = config.productionDatabase;
} 
else {
	var db = config.developmentDatabase;
}

exports.GetCategorias = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT * FROM Categorias', function(err, rows, fields){
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

exports.GetAllRecipes = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT r.Nombre FROM categorias AS c INNER JOIN recetas AS r ON c.ID_categoria=r.ID_categoria WHERE c.Nombre= ?',[req.query.nombre], function(err, rows, fields){
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

exports.InsertCategorias = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        Nombre: req.query.nombre
    };
	connection.query('INSERT INTO Categorias SET ?', post, function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = {
				'message' : 'Inserted'
			};			
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};

exports.UpdateCategorias = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        Nombre: req.query.nombre
    };
	connection.query('UPDATE Categorias SET ? WHERE ID_categoria = ?', [post, req.query.id_categoria], function(err, rows, fields){
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

exports.DeleteCategorias = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();

	connection.query('DELETE FROM Categorias WHERE ID_categoria = ?', [req.query.id_categoria], function(err, rows, fields){
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