DROP TABLE IF EXISTS theater;

CREATE TABLE theater(
    theaterId SERIAL PRIMARY KEY,
    theaterName VARCHAR(30),
    location VARCHAR(30)
);