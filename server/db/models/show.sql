DROP TABLE IF EXISTS show;

CREATE TABLE show (
    showId SERIAL PRIMARY KEY,
    hallNo INTEGER REFERENCES hall_id (id),
    movieId INTEGER REFERENCES movie (movieId),
    startTime TIME,
    price INTEGER
);

INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(1, 1, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(2, 2, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(3, 3, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(4, 4, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(5, 5, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(6, 6, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(7, 7, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(8, 8, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(9, 9, '9:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(10, 10, '9:00:00', 150);

INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(1, 1, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(2, 2, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(3, 3, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(4, 4, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(5, 5, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(6, 6, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(7, 7, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(8, 8, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(9, 9, '12:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(10, 10, '12:00:00', 150);

INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(1, 1, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(2, 2, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(3, 3, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(4, 4, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(5, 5, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(6, 6, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(7, 7, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(8, 8, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(9, 9, '15:00:00', 150);
INSERT INTO SHOW (hallNo, movieId, startTime, price)VALUES(10, 10, '15:00:00', 150);
