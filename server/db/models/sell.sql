DROP TABLE IF EXISTS sell;

CREATE TABLE sell (
    ticketId INTEGER REFERENCES ticket (ticketId),
    employeeId INTEGER REFERENCES employee (empId)
    
);