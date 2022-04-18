DROP TABLE IF EXISTS movie;

CREATE TABLE movie (
    movieId SERIAL PRIMARY KEY,
    movieName VARCHAR(30),
);