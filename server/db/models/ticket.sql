DROP TABLE IF EXISTS ticket;

CREATE TABLE ticket (
    ticketId SERIAL PRIMARY KEY,
    showId INTEGER REFERENCES show (showId),
    employeeId INTEGER REFERENCES employee (empId),
    seatNo VARCHAR(10)
); 

INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	3, 'A1');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	3, 'A2');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	3, 'A3');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	4, 'A4');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	4, 'A5');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	4, 'B1');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	5, 'B2');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	5, 'B3');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	5, 'B4');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (1,	6, 'B5');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	6, 'C1');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	6, 'C2');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	7, 'C3');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	7, 'C4');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	7, 'C4');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	8, 'D1');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	8, 'D2');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	8, 'D3');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	9, 'D4');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (2,	9, 'D5');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (3,	9, 'E1');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (3,	10,	'E2');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (3,	10,	'E3');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (3,	10,	'E4');
INSERT INTO ticket (showId, employeeId, seatNo) VALUES (3,	10,	'E5');
