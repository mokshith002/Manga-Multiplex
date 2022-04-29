DROP TABLE IF EXISTS show;

CREATE TABLE show (
    showId SERIAL PRIMARY KEY,
    hallNo INTEGER REFERENCES hall_id (id),
    movieId INTEGER REFERENCES movie (movieId),
    startTime TIME,
    price INTEGER
);

INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(1, 1, '11:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(2, 2, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(3, 3, '13:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(4, 4, '14:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(5, 5, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(6, 6, '16:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(7, 7, '17:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(8, 8, '18:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(9, 9, '19:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(10, 10, '20:00:00', 150);
