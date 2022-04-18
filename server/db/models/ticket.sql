DROP TABLE IF EXISTS ticket;

CREATE TABLE ticket (
    ticketId SERIAL PRIMARY KEY,
    showId INTEGER REFERENCES show (showId),
    employeeId INTEGER REFERENCES employee (employeeId),
    hallNo INTEGER REFERENCES hall (hallNo),
    seatNo INTEGER,
    price INTEGER
);