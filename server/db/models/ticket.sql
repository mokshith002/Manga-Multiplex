DROP TABLE IF EXISTS ticket;

CREATE TABLE ticket (
    ticketId SERIAL PRIMARY KEY,
    showId INTEGER REFERENCES show (showId),
    employeeId INTEGER REFERENCES employee (empId),
    seatNo VARCHAR(10),
    price INTEGER
);