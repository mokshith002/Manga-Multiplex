DROP TABLE IF EXISTS movie;

CREATE TABLE movie (
    movieId SERIAL PRIMARY KEY,
    movieName VARCHAR(30)
);

INSERT INTO movie (movieName) VALUES ('Batman');