-- INNER JOIN: Returns records that have matching values in both tables
-- LEFT JOIN: Returns all records from the left table, and the matched records from the right table
-- RIGHT JOIN: Returns all records from the right table, and the matched records from the left table

select * from departments;

select * from employees;

-- to show common data from both the tables
SELECT employees.first_name, employees.last_name, departments.department_name from employees
INNER JOIN departments
ON employees.department_id = departments.department_id;
