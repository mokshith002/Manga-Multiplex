DROP TABLE IF EXISTS decide;

CREATE TABLE decide (
    employeeId INTEGER REFERENCES employee (empId),
    showId INTEGER REFERENCES show (showId)
);



INSERT INTO decide	VALUES(	1	,	1	);
INSERT INTO decide	VALUES(	1	,	2	);
INSERT INTO decide	VALUES(	1	,	3	);
INSERT INTO decide	VALUES(	1	,	4	);
INSERT INTO decide	VALUES(	1	,	5	);
INSERT INTO decide	VALUES(	2	,	6	);
INSERT INTO decide	VALUES(	2	,	7	);
INSERT INTO decide	VALUES(	2	,	8	);
INSERT INTO decide	VALUES(	2	,	9	);
INSERT INTO decide	VALUES(	2	,	10	);
