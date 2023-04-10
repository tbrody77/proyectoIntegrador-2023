drop schema proyectoIntegrador;
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

FKuserId INT UNSIGNED,
FOREIGN KEY (FKuserId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
comentario VARCHAR(255) NOT NULL,

createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAT TIMESTAMP NULL,

FKuserId INT UNSIGNED,
FOREIGN KEY (FKuserId) REFERENCES usuarios(id),

FKproducoId INT UNSIGNED,
FOREIGN KEY (FKproducoId) REFERENCES productos(id)
);

INSERT INTO usuarios (email, username, foto, password, fechanacimiento, dni)
VALUES ('tfontana@udesa.edu.ar', 'Tofo', 'https://via.placeholder.com/101x99', '1234', '2003-06-01', 44642281),
('talvarezdemalde@udesa.edu.ar', 'Tad', 'https://via.placeholder.com/101x99', 'Messi', '2002-04-11', 94131379),
('tbrody@udesa.edu.ar', 'Tom', 'https://via.placeholder.com/101x99', 'Tom123', '2002-12-7', 44289671),
('lmessi@udesa.edu.ar', 'MessiL', 'https://via.placeholder.com/101x99', 'LaScaloneta', '1987-04-11', 37890012),
('jalvarez@udesa.edu.ar', 'LaAraña', 'https://via.placeholder.com/101x99', 'JuliCrack', '2000-31-01', 40912301);


INSERT INTO productos (nombre, descripcion, foto)
VALUES ('Air Force 1', 'Nike', '/../public/images/airforce1.jpeg'), 
('Forum Bad Bunny', 'Adidas', '/../public/images/BBforum.jpeg'), 
('Jordan 1 Mocha', 'Nike', '/../public/images/JordanMocha.jpeg'), 
('220', 'NewBalance', '/../public/images/newBalance2002.jpeg'), 
('Dunk Low Panda', 'Nike', '/../public/images/panda.jpeg'), 
('Yeezy 350 Desert Sage', 'Adidas', '/../public/images/JordanMocha.jpeg'), 
('All Star', 'Converse', '/../public/images/allStar.jpeg'), 
('Air Max 97', 'Nike', '/../public/images/airmax97.jpeg'), 
('Yeezy Slides', 'Adidas', '/../public/images/slides.jpeg'), 
('Old Skool', 'Vans', '/../public/images/vans.jpeg');



INSERT INTO comentarios (comentario)
VALUES ('Tremendo Producto'),
 ('Historicas'),
 ('Excelente calidad!'), 
 ('Horribles'), 
 ('Me las compro si o si!'), 
 ('No me gustan nada jajajaja'), 
 ('Las quiero'), 
 ('Las necesito'), 
 ('Combinan con todo'), 
 ('Dame mil');


