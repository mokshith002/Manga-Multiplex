DROP TABLE IF EXISTS show;

CREATE TABLE show (
    showId SERIAL PRIMARY KEY,
    hallNo INTEGER REFERENCES hall_id (id),
    movieId INTEGER REFERENCES movie (movieId),
    startTime TIME,
    endTime TIME
);

INSERT INTO show (hallNo, movieId, startTime, endTime) VALUES (1, 1, '10:00:00', '13:00:00');