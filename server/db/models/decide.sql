DROP TABLE IF EXISTS decide;

CREATE TABLE decide (
    employeeId INTEGER REFERENCES employee (empId),
    showId INTEGER REFERENCES show (showId)
    
);