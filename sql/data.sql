DROP SCHEMA IF EXISTS proyectoIntegrador;

CREATE SCHEMA proyectoIntegrador;

USE proyectoIntegrador;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
username VARCHAR(255) UNIQUE,
foto VARCHAR(255) NOT NULL,
password VARCHAR(300) NOT NULL,
fechanacimiento DATE NOT NULL,
dni INT(9) NOT NULL,
createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAT TIMESTAMP NULL
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
foto VARCHAR(255) NOT NULL,

createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAT TIMESTAMP NULL,

usuarioId INT UNSIGNED,
FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
comentario VARCHAR(255) NOT NULL,

createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAT TIMESTAMP NULL,

usuarioId INT UNSIGNED,
FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
productoId INT UNSIGNED,
FOREIGN KEY (productoId) REFERENCES productos(id)
);

INSERT INTO usuarios (email, username, foto, password, fechanacimiento, dni) 
VALUES
('tfontana@udesa.edu.ar', 'Tofo', 'https://via.placeholder.com/101x99', '1234', '2003-06-01', 44642281),
('talvarezdemalde@udesa.edu.ar', 'Tad', 'https://via.placeholder.com/101x99', 'Messi', '2002-04-11', 94131379),
('tbrody@udesa.edu.ar', 'Tom', 'https://via.placeholder.com/101x99', 'Tom123', '2002-12-07', 44289671),
('lmessi@udesa.edu.ar', 'MessiL', 'https://via.placeholder.com/101x99', 'LaScaloneta', '1987-04-11', 37890012),
('jalvarez@udesa.edu.ar', 'LaAraña', 'https://via.placeholder.com/101x99', 'JuliCrack', '2000-01-31', 40912301);


INSERT INTO productos (nombre, descripcion, foto, usuarioId)
VALUES 
('Air Force 1', 'Nike', 'airforce1.jpeg', 1), 
('Forum Bad Bunny', 'Adidas', 'BBforum.jpeg', 1), 
('Jordan 1 Mocha', 'Nike', 'JordanMocha.jpeg', 2), 
('220', 'NewBalance', 'newBalance2002.jpeg', 2), 
('Dunk Low Panda', 'Nike', 'panda.jpeg', 3), 
('Yeezy 350 Desert Sage', 'Adidas', 'JordanMocha.jpeg', 3), 
('All Star', 'Converse', 'allStar.jpeg', 4), 
('Air Max 97', 'Nike', 'airmax97.jpeg', 4), 
('Yeezy Slides', 'Adidas', 'slides.jpeg', 5), 
('Old Skool', 'Vans', 'vans.jpeg', 5);



INSERT INTO comentarios (comentario, usuarioId, productoId) VALUES
 ('Tremendo Producto', 1, 2),
 ('Historicas', 2, 1),
 ('Excelente calidad!', 3, 4), 
 ('Horribles', 4, 3), 
 ('Me las compro si o si!', 5, 2), 
 ('No me gustan nada jajajaja', 1, 3), 
 ('Las quiero', 2, 5), 
 ('Las necesito', 3, 1), 
 ('Combinan con todo', 4, 5), 
 ('Dame mil', 5, 4);