DROP TABLE IF EXISTS hall;

CREATE TABLE hall (
    hallNo SERIAL PRIMARY KEY,
    theaterId INTEGER REFERENCES theater (theaterId),
    seatNo INTEGER,
    isBooked BOOLEAN
 );