DROP TABLE IF EXISTS decide;

CREATE TABLE decide (
    employeeId INTEGER REFERENCES employee (employeeId),
    showId INTEGER REFERENCES show (showId)
    
);