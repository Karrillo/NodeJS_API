var config = require("../config.js");
var mysql = require('mysql');

if (process.env.NODE_ENV == 'production'){
	var db = config.productionDatabase;
} 
else {
	var db = config.developmentDatabase;
}

exports.GetProcedimientos = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT * FROM Procedimientos', function(err, rows, fields){
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

exports.GetAllProcedimientos = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	connection.query('SELECT numeracion, Procedimiento FROM Procedimientos WHERE ID_receta = ?',[req.query.id_receta], function(err, rows, fields){
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

exports.InsertProcedimientos = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        Numeracion: req.query.numeracion,
        Procedimiento: req.query.procedimiento,
        ID_Receta: req.query.id_receta
    };
	connection.query('INSERT INTO Procedimientos SET ?', post, function(err, rows, fields){
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

exports.UpdateProcedimientos = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();
	var post = {
        Numeracion: req.query.Numeracion,
        Procedimiento: req.query.Procedimiento,
        ID_Receta: req.query.ID_receta
    };
	connection.query('UPDATE Procedimientos SET ? WHERE ID_Receta = ?', [post, req.query.id_procedimiento], function(err, rows, fields){
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

exports.DeleteProcedimientos = function(req, res, next) {
	var connection = mysql.createConnection({
		host : 		db.host,
		user : 		db.user, 
		password :	db.password, 
		database :	db.dbName
	});
	connection.connect();

	connection.query('DELETE FROM Procedimientos WHERE IDReceta = ?', [req,query,id_procedimiento], function(err, rows, fields){
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