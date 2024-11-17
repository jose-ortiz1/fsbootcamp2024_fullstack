-- To add a primary key on existing table
 ALTER TABLE employees ADD PRIMARY KEY (employee_id);

CREATE TABLE `employees` (
   `employee_id` int NOT NULL,
   `first_name` varchar(255) NOT NULL,
   `last_name` varchar(255) DEFAULT NULL,
   `status` tinyint(1) DEFAULT '1',
   `salary` int NOT NULL DEFAULT '10000',
   `department_id` int NOT NULL,
   PRIMARY KEY (`employee_id`),
   KEY `department_id` (`department_id`),
   CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
 -- Task run any update on employees table using employee id
 select * from employees;
 
 UPDATE employees 
 SET last_name = 'O'
 WHERE employee_id = 9;
