DROP TABLE IF EXISTS show;

CREATE TABLE show (
    showId SERIAL PRIMARY KEY,
    hallNo INTEGER REFERENCES hall_id (id),
    movieId INTEGER REFERENCES movie (movieId),
    startTime TIME,
    price INTEGER
);

INSERT INTO show (hallNo, movieId, startTime, price) VALUES (1, 1, '10:00:00', 250);