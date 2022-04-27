DROP TABLE IF EXISTS hall;

CREATE TABLE hall (
    hallNo INTEGER REFERENCES hall_id (id),
    showId INTEGER REFERENCES show (showId),
    seatNo VARCHAR(10),
    isBooked BOOLEAN,
    PRIMARY KEY (hallno, showId, seatNo)
 );

INSERT INTO hall VALUES (1, 1, 'A1', false);
INSERT INTO hall VALUES (1, 1, 'A2', false);
INSERT INTO hall VALUES (1, 1, 'A3', false);
INSERT INTO hall VALUES (1, 1, 'A4', false);
INSERT INTO hall VALUES (1, 1, 'A5', false);
INSERT INTO hall VALUES (1, 1, 'B1', false);
INSERT INTO hall VALUES (1, 1, 'B2', false);
INSERT INTO hall VALUES (1, 1, 'B3', false);
INSERT INTO hall VALUES (1, 1, 'B4', false);
INSERT INTO hall VALUES (1, 1, 'B5', false);
INSERT INTO hall VALUES (1, 1, 'C1', false);
INSERT INTO hall VALUES (1, 1, 'C2', false);
INSERT INTO hall VALUES (1, 1, 'C3', false);
INSERT INTO hall VALUES (1, 1, 'C4', false);
INSERT INTO hall VALUES (1, 1, 'C5', false);
INSERT INTO hall VALUES (1, 1, 'D1', false);
INSERT INTO hall VALUES (1, 1, 'D2', false);
INSERT INTO hall VALUES (1, 1, 'D3', false);
INSERT INTO hall VALUES (1, 1, 'D4', false);
INSERT INTO hall VALUES (1, 1, 'D5', false);
INSERT INTO hall VALUES (1, 1, 'E1', false);
INSERT INTO hall VALUES (1, 1, 'E2', false);
INSERT INTO hall VALUES (1, 1, 'E3', false);
INSERT INTO hall VALUES (1, 1, 'E4', false);
INSERT INTO hall VALUES (1, 1, 'E5', false);
