DROP TABLE IF EXISTS movie;

CREATE TABLE movie (
    movieId SERIAL PRIMARY KEY,
    movieName VARCHAR(30)
);

INSERT INTO movie (movieName) VALUES ('Shutter Island');
INSERT INTO movie (movieName) VALUES ('The Batman');
INSERT INTO movie (movieName) VALUES ('Knives Out');
INSERT INTO movie (movieName) VALUES ('The Prestige');
INSERT INTO movie (movieName) VALUES ('Forrest Gump');
INSERT INTO movie (movieName) VALUES ('The Shawshank Redemption');
INSERT INTO movie (movieName) VALUES ('Inception');
INSERT INTO movie (movieName) VALUES ('Dune');
INSERT INTO movie (movieName) VALUES ('Alien');
INSERT INTO movie (movieName) VALUES ('1917');