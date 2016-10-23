var config = require("../config.js");
var mysql = require('mysql');

if (process.env.NODE_ENV == 'production'){
	var db = config.productionDatabase;
} 
else {
	var db = config.developmentDatabase;
}

exports.GetIngredientes = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT * FROM ingredientes', function(err, rows, fields){
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

exports.GetAllIngredientes = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT ingrediente FROM ingredientes WHERE ID_receta = ?',[req.query.id_receta], function(err, rows, fields){
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

exports.InsertIngredientes = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        Ingrediente: req.query.ingrediente,
        ID_receta: req.query.id_receta
    };
	connection.query('INSERT INTO ingredientes SET ?', post, function(err, rows, fields){
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

exports.UpdateIngredientes = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        Ingrediente: req.query.ingrediente,
        ID_receta: req.query.id_receta
    };
	connection.query('UPDATE ingredientes SET ? WHERE ID_ingrediente = ?', [post, req.query.id_ingrediente], function(err, rows, fields){
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

exports.DeleteIngredientes = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();

	connection.query('DELETE FROM ingredientes WHERE ID_ingrediente = ?', [req.query.id_ingrediente], function(err, rows, fields){
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