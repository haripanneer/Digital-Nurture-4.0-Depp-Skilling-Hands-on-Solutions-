use abi;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,        
    name VARCHAR(100) NOT NULL,              
    bonus DECIMAL(10,2) NOT NULL DEFAULT 0.00 
);

INSERT INTO employees (name, bonus)
VALUES
('Alice', 2000.00),
('Bob', 3000.00),
('Charlie', 1500.00);

ALTER TABLE employees ADD department VARCHAR(100);

UPDATE employees
SET department = 'HR'
WHERE id = 1;

UPDATE employees
SET department = 'Finance'
WHERE id = 2;

UPDATE employees
SET department = 'IT'
WHERE id = 3;

ALTER TABLE employees ADD salary DECIMAL(10,2) DEFAULT 0.00;

UPDATE employees
SET salary = 50000
WHERE id = 1;

UPDATE employees
SET salary = 60000
WHERE id = 2;

UPDATE employees
SET salary = 45000
WHERE id = 3;


select*from employees;

DELIMITER $$

CREATE PROCEDURE UpdateEmployeeBonus(
    IN department_name VARCHAR(100),
    IN bonus_percentage DECIMAL(5, 2)
)
BEGIN
    UPDATE employees
    SET salary = salary + (salary * (bonus_percentage / 100))
    WHERE department = department_name;
END$$

DELIMITER ;

CALL UpdateEmployeeBonus(1, 500.00);


select*from employees;
