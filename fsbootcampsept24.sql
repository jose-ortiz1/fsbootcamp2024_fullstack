-- to create a database
CREATE database fsbootcamp2024;

-- TO select a particular database
use fsbootcamp2024;

-- to create a table
CREATE TABLE fsbootcamp2024.employees (
	employee_id int NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NULL,
    status tinyint(1) default 1
);

-- to select specific columns
select employee_id, first_name from fsbootcamp2024.employees;

-- to select everything from a column
select * from fsbootcamp2024.employees;

-- insert query to insert data without column names
-- in this case we need to provide value for all the column
INSERT INTO fsbootcamp2024.employees VALUES (1, 'Harsh', 'Gurm', 1);

-- inserting data for specific columns
INSERT INTO fsbootcamp2024.employees(employee_id, first_name, LAST_NAME) VALUES (3, 'Julia', 'Will');

INSERT INTO fsbootcamp2024.employees(employee_id, LAST_NAME) VALUES (4,'Gurm');

-- multiple rows insert at once
INSERT INTO fsbootcamp2024.employees(employee_id, first_name) 
VALUES (5, 'Mihir'), (6, 'Deepika'), (7, 'Farzaneh'), (8, 'Darcey'), (9, 'Judith');

-- write a select statement that shows first name and last name from employees table
select first_name, last_name from employees;

-- to arrange the result in a specific order we use order by clause
-- Order by column_name ASC|DESC;
select * from employees
ORDER BY employee_id DESC;

-- task arrange employees in ascending order of their first_name
select * from employees
order by first_name;

-- filteration of data is using where clause
-- to find an employee based on their first_name
SELECT * 
from employees
WHERE first_name = 'Farzaneh';

-- employee who's first name starts with a F
select * from employees
WHERE first_name LIKE 'F%';

-- Task 1 select all the employees whose first name contain a letter 'a'
SELECT * from fsbootcamp2024.employees
WHERE first_name LIKE '%a%' OR last_name LIKE '%a%';

-- Task 2 is to select all the employees who last_name is empty
SELECT * from fsbootcamp2024.employees
WHERE last_name IS NULL;

-- Task 3 select employees who employee_id greater than 3 and last_name is empty
SELECT * from fsbootcamp2024.employees
WHERE employee_id > 5 and last_name IS NULL;

-- Update the last name where employee id is 4
SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET first_name = 'Harry', last_name = 'Gurm', status = 0
WHERE employee_id = 4;
SET SQL_SAFE_UPDATES = 1;


-- to delete an employee who's at id 6
SET SQL_SAFE_UPDATES = 0;
DELETE FROM employees WHERE employee_id = 6; 
SET SQL_SAFE_UPDATES = 1;

-- delete all the employees whos status is 0
SET SQL_SAFE_UPDATES = 0;
DELETE FROM employees 
WHERE status = 0; 
SET SQL_SAFE_UPDATES = 1;

select * from employees;

-- Show how to use foreign key
-- show about truncate, drop
-- ALTER query:
-- Add column, drop column, modify column
-- INNER JOIN, LEFT/RIGHT JOIN

