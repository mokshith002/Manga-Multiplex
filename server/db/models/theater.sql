DROP TABLE IF EXISTS theater;

CREATE TABLE theater(
    theaterId SERIAL PRIMARY KEY,
    theaterName VARCHAR(30),
    location VARCHAR(30)
);

INSERT INTO theater (theaterName, location) VALUES ('PVR', 'Hyderabad');
INSERT INTO theater (theaterName, location) VALUES ('ACL', 'Lucknow');
INSERT INTO theater (theaterName, location) VALUES ('Vox', 'Hyderabad');
INSERT INTO theater (theaterName, location) VALUES ('Novo', 'Delhi');
INSERT INTO theater (theaterName, location) VALUES ('PVR', 'Mumbai');
INSERT INTO theater (theaterName, location) VALUES ('Liberty', 'Delhi');
