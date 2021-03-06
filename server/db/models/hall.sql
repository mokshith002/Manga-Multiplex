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
INSERT INTO hall VALUES (2, 2, 'A1', false);
INSERT INTO hall VALUES (2, 2, 'A2', false);
INSERT INTO hall VALUES (2, 2, 'A3', false);
INSERT INTO hall VALUES (2, 2, 'A4', false);
INSERT INTO hall VALUES (2, 2, 'A5', false);
INSERT INTO hall VALUES (2, 2, 'B1', false);
INSERT INTO hall VALUES (2, 2, 'B2', false);
INSERT INTO hall VALUES (2, 2, 'B3', false);
INSERT INTO hall VALUES (2, 2, 'B4', false);
INSERT INTO hall VALUES (2, 2, 'B5', false);
INSERT INTO hall VALUES (2, 2, 'C1', false);
INSERT INTO hall VALUES (2, 2, 'C2', false);
INSERT INTO hall VALUES (2, 2, 'C3', false);
INSERT INTO hall VALUES (2, 2, 'C4', false);
INSERT INTO hall VALUES (2, 2, 'C5', false);
INSERT INTO hall VALUES (2, 2, 'D1', false);
INSERT INTO hall VALUES (2, 2, 'D2', false);
INSERT INTO hall VALUES (2, 2, 'D3', false);
INSERT INTO hall VALUES (2, 2, 'D4', false);
INSERT INTO hall VALUES (2, 2, 'D5', false);
INSERT INTO hall VALUES (2, 2, 'E1', false);
INSERT INTO hall VALUES (2, 2, 'E2', false);
INSERT INTO hall VALUES (2, 2, 'E3', false);
INSERT INTO hall VALUES (2, 2, 'E4', false);
INSERT INTO hall VALUES (2, 2, 'E5', false);
INSERT INTO hall VALUES (3, 3, 'A1', false);
INSERT INTO hall VALUES (3, 3, 'A2', false);
INSERT INTO hall VALUES (3, 3, 'A3', false);
INSERT INTO hall VALUES (3, 3, 'A4', false);
INSERT INTO hall VALUES (3, 3, 'A5', false);
INSERT INTO hall VALUES (3, 3, 'B1', false);
INSERT INTO hall VALUES (3, 3, 'B2', false);
INSERT INTO hall VALUES (3, 3, 'B3', false);
INSERT INTO hall VALUES (3, 3, 'B4', false);
INSERT INTO hall VALUES (3, 3, 'B5', false);
INSERT INTO hall VALUES (3, 3, 'C1', false);
INSERT INTO hall VALUES (3, 3, 'C2', false);
INSERT INTO hall VALUES (3, 3, 'C3', false);
INSERT INTO hall VALUES (3, 3, 'C4', false);
INSERT INTO hall VALUES (3, 3, 'C5', false);
INSERT INTO hall VALUES (3, 3, 'D1', false);
INSERT INTO hall VALUES (3, 3, 'D2', false);
INSERT INTO hall VALUES (3, 3, 'D3', false);
INSERT INTO hall VALUES (3, 3, 'D4', false);
INSERT INTO hall VALUES (3, 3, 'D5', false);
INSERT INTO hall VALUES (3, 3, 'E1', false);
INSERT INTO hall VALUES (3, 3, 'E2', false);
INSERT INTO hall VALUES (3, 3, 'E3', false);
INSERT INTO hall VALUES (3, 3, 'E4', false);
INSERT INTO hall VALUES (3, 3, 'E5', false);
INSERT INTO hall VALUES (4, 4, 'A1', false);
INSERT INTO hall VALUES (4, 4, 'A2', false);
INSERT INTO hall VALUES (4, 4, 'A3', false);
INSERT INTO hall VALUES (4, 4, 'A4', false);
INSERT INTO hall VALUES (4, 4, 'A5', false);
INSERT INTO hall VALUES (4, 4, 'B1', false);
INSERT INTO hall VALUES (4, 4, 'B2', false);
INSERT INTO hall VALUES (4, 4, 'B3', false);
INSERT INTO hall VALUES (4, 4, 'B4', false);
INSERT INTO hall VALUES (4, 4, 'B5', false);
INSERT INTO hall VALUES (4, 4, 'C1', false);
INSERT INTO hall VALUES (4, 4, 'C2', false);
INSERT INTO hall VALUES (4, 4, 'C3', false);
INSERT INTO hall VALUES (4, 4, 'C4', false);
INSERT INTO hall VALUES (4, 4, 'C5', false);
INSERT INTO hall VALUES (4, 4, 'D1', false);
INSERT INTO hall VALUES (4, 4, 'D2', false);
INSERT INTO hall VALUES (4, 4, 'D3', false);
INSERT INTO hall VALUES (4, 4, 'D4', false);
INSERT INTO hall VALUES (4, 4, 'D5', false);
INSERT INTO hall VALUES (4, 4, 'E1', false);
INSERT INTO hall VALUES (4, 4, 'E2', false);
INSERT INTO hall VALUES (4, 4, 'E3', false);
INSERT INTO hall VALUES (4, 4, 'E4', false);
INSERT INTO hall VALUES (4, 4, 'E5', false);
INSERT INTO hall VALUES (5, 5, 'A1', false);
INSERT INTO hall VALUES (5, 5, 'A2', false);
INSERT INTO hall VALUES (5, 5, 'A3', false);
INSERT INTO hall VALUES (5, 5, 'A4', false);
INSERT INTO hall VALUES (5, 5, 'A5', false);
INSERT INTO hall VALUES (5, 5, 'B1', false);
INSERT INTO hall VALUES (5, 5, 'B2', false);
INSERT INTO hall VALUES (5, 5, 'B3', false);
INSERT INTO hall VALUES (5, 5, 'B4', false);
INSERT INTO hall VALUES (5, 5, 'B5', false);
INSERT INTO hall VALUES (5, 5, 'C1', false);
INSERT INTO hall VALUES (5, 5, 'C2', false);
INSERT INTO hall VALUES (5, 5, 'C3', false);
INSERT INTO hall VALUES (5, 5, 'C4', false);
INSERT INTO hall VALUES (5, 5, 'C5', false);
INSERT INTO hall VALUES (5, 5, 'D1', false);
INSERT INTO hall VALUES (5, 5, 'D2', false);
INSERT INTO hall VALUES (5, 5, 'D3', false);
INSERT INTO hall VALUES (5, 5, 'D4', false);
INSERT INTO hall VALUES (5, 5, 'D5', false);
INSERT INTO hall VALUES (5, 5, 'E1', false);
INSERT INTO hall VALUES (5, 5, 'E2', false);
INSERT INTO hall VALUES (5, 5, 'E3', false);
INSERT INTO hall VALUES (5, 5, 'E4', false);
INSERT INTO hall VALUES (5, 5, 'E5', false);
INSERT INTO hall VALUES (6, 6, 'A1', false);
INSERT INTO hall VALUES (6, 6, 'A2', false);
INSERT INTO hall VALUES (6, 6, 'A3', false);
INSERT INTO hall VALUES (6, 6, 'A4', false);
INSERT INTO hall VALUES (6, 6, 'A5', false);
INSERT INTO hall VALUES (6, 6, 'B1', false);
INSERT INTO hall VALUES (6, 6, 'B2', false);
INSERT INTO hall VALUES (6, 6, 'B3', false);
INSERT INTO hall VALUES (6, 6, 'B4', false);
INSERT INTO hall VALUES (6, 6, 'B5', false);
INSERT INTO hall VALUES (6, 6, 'C1', false);
INSERT INTO hall VALUES (6, 6, 'C2', false);
INSERT INTO hall VALUES (6, 6, 'C3', false);
INSERT INTO hall VALUES (6, 6, 'C4', false);
INSERT INTO hall VALUES (6, 6, 'C5', false);
INSERT INTO hall VALUES (6, 6, 'D1', false);
INSERT INTO hall VALUES (6, 6, 'D2', false);
INSERT INTO hall VALUES (6, 6, 'D3', false);
INSERT INTO hall VALUES (6, 6, 'D4', false);
INSERT INTO hall VALUES (6, 6, 'D5', false);
INSERT INTO hall VALUES (6, 6, 'E1', false);
INSERT INTO hall VALUES (6, 6, 'E2', false);
INSERT INTO hall VALUES (6, 6, 'E3', false);
INSERT INTO hall VALUES (6, 6, 'E4', false);
INSERT INTO hall VALUES (6, 6, 'E5', false);
INSERT INTO hall VALUES (7, 7, 'A1', false);
INSERT INTO hall VALUES (7, 7, 'A2', false);
INSERT INTO hall VALUES (7, 7, 'A3', false);
INSERT INTO hall VALUES (7, 7, 'A4', false);
INSERT INTO hall VALUES (7, 7, 'A5', false);
INSERT INTO hall VALUES (7, 7, 'B1', false);
INSERT INTO hall VALUES (7, 7, 'B2', false);
INSERT INTO hall VALUES (7, 7, 'B3', false);
INSERT INTO hall VALUES (7, 7, 'B4', false);
INSERT INTO hall VALUES (7, 7, 'B5', false);
INSERT INTO hall VALUES (7, 7, 'C1', false);
INSERT INTO hall VALUES (7, 7, 'C2', false);
INSERT INTO hall VALUES (7, 7, 'C3', false);
INSERT INTO hall VALUES (7, 7, 'C4', false);
INSERT INTO hall VALUES (7, 7, 'C5', false);
INSERT INTO hall VALUES (7, 7, 'D1', false);
INSERT INTO hall VALUES (7, 7, 'D2', false);
INSERT INTO hall VALUES (7, 7, 'D3', false);
INSERT INTO hall VALUES (7, 7, 'D4', false);
INSERT INTO hall VALUES (7, 7, 'D5', false);
INSERT INTO hall VALUES (7, 7, 'E1', false);
INSERT INTO hall VALUES (7, 7, 'E2', false);
INSERT INTO hall VALUES (7, 7, 'E3', false);
INSERT INTO hall VALUES (7, 7, 'E4', false);
INSERT INTO hall VALUES (7, 7, 'E5', false);
INSERT INTO hall VALUES (8, 8, 'A1', false);
INSERT INTO hall VALUES (8, 8, 'A2', false);
INSERT INTO hall VALUES (8, 8, 'A3', false);
INSERT INTO hall VALUES (8, 8, 'A4', false);
INSERT INTO hall VALUES (8, 8, 'A5', false);
INSERT INTO hall VALUES (8, 8, 'B1', false);
INSERT INTO hall VALUES (8, 8, 'B2', false);
INSERT INTO hall VALUES (8, 8, 'B3', false);
INSERT INTO hall VALUES (8, 8, 'B4', false);
INSERT INTO hall VALUES (8, 8, 'B5', false);
INSERT INTO hall VALUES (8, 8, 'C1', false);
INSERT INTO hall VALUES (8, 8, 'C2', false);
INSERT INTO hall VALUES (8, 8, 'C3', false);
INSERT INTO hall VALUES (8, 8, 'C4', false);
INSERT INTO hall VALUES (8, 8, 'C5', false);
INSERT INTO hall VALUES (8, 8, 'D1', false);
INSERT INTO hall VALUES (8, 8, 'D2', false);
INSERT INTO hall VALUES (8, 8, 'D3', false);
INSERT INTO hall VALUES (8, 8, 'D4', false);
INSERT INTO hall VALUES (8, 8, 'D5', false);
INSERT INTO hall VALUES (8, 8, 'E1', false);
INSERT INTO hall VALUES (8, 8, 'E2', false);
INSERT INTO hall VALUES (8, 8, 'E3', false);
INSERT INTO hall VALUES (8, 8, 'E4', false);
INSERT INTO hall VALUES (8, 8, 'E5', false);
INSERT INTO hall VALUES (9, 9, 'A1', false);
INSERT INTO hall VALUES (9, 9, 'A2', false);
INSERT INTO hall VALUES (9, 9, 'A3', false);
INSERT INTO hall VALUES (9, 9, 'A4', false);
INSERT INTO hall VALUES (9, 9, 'A5', false);
INSERT INTO hall VALUES (9, 9, 'B1', false);
INSERT INTO hall VALUES (9, 9, 'B2', false);
INSERT INTO hall VALUES (9, 9, 'B3', false);
INSERT INTO hall VALUES (9, 9, 'B4', false);
INSERT INTO hall VALUES (9, 9, 'B5', false);
INSERT INTO hall VALUES (9, 9, 'C1', false);
INSERT INTO hall VALUES (9, 9, 'C2', false);
INSERT INTO hall VALUES (9, 9, 'C3', false);
INSERT INTO hall VALUES (9, 9, 'C4', false);
INSERT INTO hall VALUES (9, 9, 'C5', false);
INSERT INTO hall VALUES (9, 9, 'D1', false);
INSERT INTO hall VALUES (9, 9, 'D2', false);
INSERT INTO hall VALUES (9, 9, 'D3', false);
INSERT INTO hall VALUES (9, 9, 'D4', false);
INSERT INTO hall VALUES (9, 9, 'D5', false);
INSERT INTO hall VALUES (9, 9, 'E1', false);
INSERT INTO hall VALUES (9, 9, 'E2', false);
INSERT INTO hall VALUES (9, 9, 'E3', false);
INSERT INTO hall VALUES (9, 9, 'E4', false);
INSERT INTO hall VALUES (9, 9, 'E5', false);
INSERT INTO hall VALUES (10, 10, 'A1', false);
INSERT INTO hall VALUES (10, 10, 'A2', false);
INSERT INTO hall VALUES (10, 10, 'A3', false);
INSERT INTO hall VALUES (10, 10, 'A4', false);
INSERT INTO hall VALUES (10, 10, 'A5', false);
INSERT INTO hall VALUES (10, 10, 'B1', false);
INSERT INTO hall VALUES (10, 10, 'B2', false);
INSERT INTO hall VALUES (10, 10, 'B3', false);
INSERT INTO hall VALUES (10, 10, 'B4', false);
INSERT INTO hall VALUES (10, 10, 'B5', false);
INSERT INTO hall VALUES (10, 10, 'C1', false);
INSERT INTO hall VALUES (10, 10, 'C2', false);
INSERT INTO hall VALUES (10, 10, 'C3', false);
INSERT INTO hall VALUES (10, 10, 'C4', false);
INSERT INTO hall VALUES (10, 10, 'C5', false);
INSERT INTO hall VALUES (10, 10, 'D1', false);
INSERT INTO hall VALUES (10, 10, 'D2', false);
INSERT INTO hall VALUES (10, 10, 'D3', false);
INSERT INTO hall VALUES (10, 10, 'D4', false);
INSERT INTO hall VALUES (10, 10, 'D5', false);
INSERT INTO hall VALUES (10, 10, 'E1', false);
INSERT INTO hall VALUES (10, 10, 'E2', false);
INSERT INTO hall VALUES (10, 10, 'E3', false);
INSERT INTO hall VALUES (10, 10, 'E4', false);
INSERT INTO hall VALUES (10, 10, 'E5', false);