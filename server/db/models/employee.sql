DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    empId SERIAL PRIMARY KEY,
    theaterId INTEGER REFERENCES theater (theaterId),
    empName VARCHAR(50),
    contactNo VARCHAR(12),
    role VARCHAR(20),
    education VARCHAR(30)
);