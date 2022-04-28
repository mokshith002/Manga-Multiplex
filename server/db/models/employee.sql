DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    empId SERIAL PRIMARY KEY,
    email VARCHAR(35) NOT NULL,
    passwordHash VARCHAR(80) NOT NULL,
    empName VARCHAR(50),
    contactNo VARCHAR(12),
    role VARCHAR(20),
    education VARCHAR(30)
);

INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'chirag@gmail.com', 	'4d925f4ab0f021fbd20bae65277b9fce', 	'Chirag', 	'918079685778', 	 'Manager', 	 'BBA'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'arkishman@gmail.com', 	'9ea5a099c1e256589827af530f79017b', 	'Arkishman', 	'917282430189', 	 'Manager', 	 'BSc'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'tushar@gmail.com', 	'1e2640f7544f67e596c917c90bce2e76', 	'Tushar', 	'917887342001', 	 'Counter Staff', 	 '12th'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'chenan@gmail.com', 	'40d76c97f4737f45050f9e600bd2b3c1', 	'Chenan', 	'916127971688', 	 'Counter Staff', 	 '12th'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'jaju@gmail.com', 	'c1c1c58a7757b1768ebecc8fff9240eb', 	'Jaju', 	'918917496487', 	 'Counter Staff', 	 '12th'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'prajwal@gmail.com', 	'f7282bbe5a8e70f9ea8bd526c9de6649', 	'Prajwal', 	'916419781802', 	 'Counter Staff', 	 '12th'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'chinmay@gmail.com', 	'c593ef362131bc5a62ade51ccf9df6dd', 	'Chinmay', 	'916127932199', 	 'Counter Staff', 	 '12th'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'milind@gmail.com', 	'0c5a688f2c3a19dfb400dd212fe1ee20', 	'Milind', 	'917979850901', 	 'Counter Staff', 	 '12th'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'ashwin@gmail.com', 	'b5f42090f322ad938251e131cd8a7677', 	'Ashwin', 	'917074117394', 	 'Counter Staff', 	 '12th'	);
INSERT INTO employee(email, passwordHash, empName, contactNo, role, education) VALUES(	'arun@gmail.com', 	'95eb0d5132725371acb6fd5a643592ad', 	'Arun', 	'918327025472', 	 'Counter Staff', 	 '12th'	);
