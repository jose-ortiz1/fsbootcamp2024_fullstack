use fsbootcamp2024;

-- This is my work in my dev branch
-- think of it as a big project that i worked on

-- adding the comment to make it appear in the git diff

-- AUTO_INCREMENT - check the id of previously inserted row and increment(plus) 1 to it.
-- UNIQUE - avoids addings duplicate values in the column
-- PRIMARY_KEY make sure that each value is unique in that column

-- CREATE TABLE `fsbootcamp2024`.`departments` (
--   `department_id` INT NOT NULL AUTO_INCREMENT,
--   `department_name` VARCHAR(45) NOT NULL,
--   `status` TINYINT(1) NULL DEFAULT 1,
--   PRIMARY KEY (`department_id`),
-- UNIQUE INDEX `department_name_UNIQUE` (`department_name` ASC) );

INSERT INTO fsbootcamp2024.departments VALUES(3, 'HR', 1);

SELECT * FROM fsbootcamp2024.departments;

-- Advance level command to create a table from an existing table
CREATE table test_employees AS
SELECT * from fsbootcamp2024.employees;

-- truncate command to erase/delete everything from a table
TRUNCATE TABLE test_employees;

-- drop command to delete the data plus the table
DROP table test_employees;

select * from test_employees;

-- ALter query to modify the table structure
-- Add a salary column to employees table
ALTER TABLE fsbootcamp2024.employees
	ADD COLUMN salary INT NOT NULL default '10000';

-- Task 1
-- Add a new column name age to employees table.alter
ALTER TABLE fsbootcamp2024.employees
	ADD column age INT NOT NULL;

-- TO delete a column
ALTER TABLE fsbootcamp2024.employees
	DROP column age;


-- add a new column and a foreign key constraint
ALTER TABLE fsbootcamp2024.employees
	ADD department_id INT NOT NULL;
ALTER TABLE fsbootcamp2024.employees
    ADD FOREIGN KEY (department_id) REFERENCES departments(department_id);
    
-- Update department_id in employees table to be anything from department_id of department table
-- do the above step for all employees
SET SQL_SAFE_UPDATES = 0;
UPDATE fsbootcamp2024.employees
SET department_id = 2
WHERE employee_id = 2 OR employee_id = 8;
SET SQL_SAFE_UPDATES = 1;

-- another way of updating the remaining department_ids
SET SQL_SAFE_UPDATES = 0;
UPDATE fsbootcamp2024.employees
SET department_id = 3
WHERE department_id = 0;
SET SQL_SAFE_UPDATES = 1;


select * from employees;

select * from departments;
-- show inner join and left join