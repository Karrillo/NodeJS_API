create database Proyecto
GO
USE Proyecto
GO
create table Personas(
	ID_persona bigint AUTO_INCREMENT primary key not null,
	Username varchar(15) not null unique,
	Clave	varchar(15) not null,
	Nombre varchar(15) not null,
	Apellido1 varchar(20) not null,
	Apellido2 varchar(20) not null,	
	Email	varchar(50) not null
)
GO
create table Usuarios(
	ID_usuario bigint AUTO_INCREMENT primary key not null,
	ID_persona  bigint not null unique, 
	FOREIGN KEY(ID_persona) REFERENCES Personas(ID_persona)
)
GO
create table Chef(
	ID_chef bigint AUTO_INCREMENT primary key not null,
	ID_persona  bigint not null unique,
	FOREIGN KEY(ID_persona) REFERENCES Personas(ID_persona)
)
GO
create table Categorias(
	ID_categoria bigint AUTO_INCREMENT primary key not null,
	Nombre varchar(15) not null unique
)
GO
create table Recetas(
	ID_receta bigint AUTO_INCREMENT primary key not null,
	Nombre varchar(50) not null,
	Descripcion	varchar(70) not null, 
	Fecha 	datetime not null,
	Nivel 	char(1)  not null,
	Porciones tinyint not null,
	Tiempo	time not null,
	ID_chef bigint not null,
	ID_categoria bigint not null,
	FOREIGN KEY(ID_categoria) REFERENCES Categorias(ID_categoria),
	FOREIGN KEY(ID_chef) REFERENCES Chef(ID_chef)
)
GO
create table Comentarios(
	ID_comentario bigint AUTO_INCREMENT primary key not null,
	Fecha 	datetime not null,
	Texto tinytext not null,
	ID_usuario bigint not null,
	ID_receta bigint not null,
	FOREIGN KEY(ID_usuario) REFERENCES Usuarios(ID_usuario),
	FOREIGN KEY(ID_receta) REFERENCES Recetas(ID_receta)
)
GO
create table Ingredientes(
	ID_Ingrediente bigint AUTO_INCREMENT primary key not null,
	Ingrediente varchar(50) not null,
	ID_receta bigint not null,
	FOREIGN KEY(ID_receta) REFERENCES Recetas(ID_receta)
)
GO
create table Procedimientos(
	ID_Procedimiento bigint AUTO_INCREMENT primary key not null,
	Numeracion tinyint not null,
	Procedimiento tinytext not null,
	ID_receta bigint not null,
	FOREIGN KEY(ID_receta) REFERENCES Recetas(ID_receta)
)

--VIEW
CREATE VIEW `Vreceta` AS 
SELECT p.Username, r.Nombre as rnombre, cc.Nombre as cnombre 
FROM personas as p 
INNER JOIN chef as c on p.ID_persona=c.ID_persona 
INNER JOIN recetas AS r on c.ID_chef=r.ID_chef 
INNER JOIN categorias as cc on r.ID_categoria=cc.ID_categoria

--TRIGGERS
CREATE TRIGGER `tr_usuario` AFTER INSERT ON `personas`
 FOR EACH ROW INSERT INTO usuarios (ID_persona) 
VALUES (NEW.ID_persona)

CREATE TRIGGER `TR_chef` AFTER INSERT ON `usuarios`
 FOR EACH ROW INSERT INTO chef (id_persona) 
VALUES (NEW.id_persona)

--PROCEDURE
CREATE PROCEDURE `P_receta`(IN `id` BIGINT)
SELECT r.Nombre,i.Ingrediente,p.Numeracion,p.Procedimiento 
FROM recetas as r 
INNER JOIN ingredientes AS i on r.ID_receta=i.ID_receta 
INNER JOIN procedimientos as p on r.ID_receta=p.ID_receta 
WHERE r.ID_receta = id

CREATE PROCEDURE `P_chef`(IN `id` BIGINT)
SELECT p.Username, r.Nombre as rnombre, cc.Nombre as cnombre 
FROM personas as p INNER JOIN chef as c on p.ID_persona=c.ID_persona 
INNER JOIN recetas AS r on c.ID_chef=r.ID_chef 
INNER JOIN categorias as cc on r.ID_categoria=cc.ID_categoria 
WHERE c.ID_chef=id