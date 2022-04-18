DROP TABLE IF EXISTS show;

CREATE TABLE show (
    showId SERIAL PRIMARY KEY,
    hallNo INTEGER REFERENCES hall (hallNo),
    movieId INTEGER REFERENCES movie (movieId),
    theaterId INTEGER REFERENCES theater (theaterId),
    startTime TIME,
    endTime TIME
);