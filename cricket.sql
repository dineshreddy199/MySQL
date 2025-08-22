show databases;

create database Cricket;

USE Cricket;

INSERT INTO Countries (country_id,country_name) VALUES
(1,"India"),
(2,"Austrila"),
(3,"South Africa"),
(4,"New Zealand"),
(5,"Pakistan"),
(6,"West Indies"),
(7,"Afghanistan"),
(8,"Bangladesh");


select * From Countries;
desc Countries;

CREATE TABLE India 
(
Cricketer_Name varchar(25) primary key unique,
Role varchar(15),
Date_Of_Birth date,
Jersey_Number int not null
);

INSERT INTO India (Cricketer_Name,Role,Date_Of_Birth,Jersey_Number) values
("Rohith Sharma","Right-Batter","1987-04-30",45);

INSERT INTO India (Cricketer_Name,Role,Date_Of_Birth,Jersey_Number) values
("Yashasvi Jaiswal","Left-Batter","2001-12-28",64),
("VIRAT KOHLI","Right-Batter","1988-11-05",18),
("Rishabh Pant","Wicket Keeper","1997-10-04",17),
("Arshdeep Singh","Left-Arm Fast","1999-02-05",02),
("Jasprit Bumrah","Right-Arm Fast","1993-12-06",93);

select * FROM India;
desc India;

/*
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);	

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
*/

alter table India
modify column Date_Of_Birth date not null,
modify column Jersey_Number int null;