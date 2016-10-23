var config = require("../config.js");
var mysql = require('mysql');

if (process.env.NODE_ENV == 'production'){
	var db = config.productionDatabase;
} 
else {
	var db = config.developmentDatabase;
}

exports.GetChef = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT * FROM chef', function(err, rows, fields){
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

exports.GetAllrecipes = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('CALL p_chef ( ? )',[req.query.id_chef], function(err, rows, fields){
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

exports.GetAllChefData = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT p.nombre, p.apellido1, p.apellido2, p.clave, p.username FROM chef AS c INNER JOIN Personas AS p ON c.ID_persona = p.ID_persona WHERE ID_chef = ?',[req.query.id_chef], function(err, rows, fields){
		res.set('Access-Control-Allow-Origin', '*');
		if(err){			
			res.status(500).send( err );
			connection.end();
		} 
		else {
			var jsonResult = {
				'nombre': rows[0].nombre,
				'apellido1': rows[0].apellido1,
				'apellido2': rows[0].apellido2,
				'clave': rows[0].clave,
				'username': rows[0].username
			};			
			res.json(jsonResult);
			res.end();
			connection.end();
		}		
	});	
};

exports.GetAllRecipesChef = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT r.nombre FROM recetas AS r INNER JOIN chef AS c ON r.ID_chef = c.ID_chef WHERE r.ID_chef = ?',[req.query.id_chef], function(err, rows, fields){
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

exports.InsertChef = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        ID_persona: req.query.id_persona
    };
	connection.query('INSERT INTO chef SET ?', post, function(err, rows, fields){
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

exports.UpdateChef = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        ID_persona: req.query.id_persona
    };
	connection.query('UPDATE Chef SET ? WHERE ID_chef = ?', [post, req.query.id_chef], function(err, rows, fields){
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

exports.DeleteChef = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();

	connection.query('DELETE FROM chef WHERE ID_chef = ?', [req.query.id_chef], function(err, rows, fields){
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