CREATE DATABASE IF NOT EXISTS filme_tmdb;
USE filme_tmdb;
CREATE TABLE IF NOT EXISTS comentario (
    id INT(11) AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(999) NOT NULL,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id) );
    INSERT INTO comentario VALUE (0, 'Vania', 'Adorei os filmes', 0);
    INSERT INTO comentario VALUE (0, 'Marcelo', 'Pouca variedade de filmes', 0);