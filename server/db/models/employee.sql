DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    empId SERIAL PRIMARY KEY,
    theaterId INTEGER REFERENCES theater (theaterId),
    email VARCHAR(35) NOT NULL,
    passwordHash VARCHAR(40) NOT NULL,
    empName VARCHAR(50),
    contactNo VARCHAR(12),
    role VARCHAR(20),
    education VARCHAR(30)
);