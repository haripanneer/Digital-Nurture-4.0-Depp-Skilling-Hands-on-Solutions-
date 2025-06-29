create database abi;

use abi;

CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,                  
    age INT NOT NULL,                            
    loan_interest_rate DECIMAL(5,2) NOT NULL     
);

DESCRIBE customers;

ALTER TABLE customers ADD COLUMN balance DECIMAL(10,2) NOT NULL DEFAULT 0.00;

INSERT INTO customers (name, balance, age, loan_interest_rate)
VALUES 
('John Doe', 1000.00, 45, 5.25),
('Jane Smith', 1500.00, 30, 4.75),
('Robert Brown', 2000.00, 65, 6.00);

INSERT INTO customers (name, age, loan_interest_rate)
VALUES 
('John Doe', 65, 5.25),
('Jane Smith', 45, 4.75),
('Robert Brown', 70, 6.00),
('Emily Davis', 55, 5.00),
('Michael Johnson', 62, 5.50);


SELECT * FROM customers;

DELIMITER $$

CREATE PROCEDURE AdjustBalances()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE v_customer_id INT;
    DECLARE v_balance DECIMAL(10,2);

    DECLARE cust_cursor CURSOR FOR 
        SELECT customer_id, balance 
        FROM customers;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cust_cursor;

    balance_update_loop: LOOP
        FETCH cust_cursor INTO v_customer_id, v_balance;

        IF done THEN
            LEAVE balance_update_loop;
        END IF;

        UPDATE customers
        SET balance = v_balance + 100
        WHERE customer_id = v_customer_id;
    END LOOP;

    CLOSE cust_cursor;
END$$

DELIMITER ;

/

CALL AdjustBalances();

SELECT * FROM customers;

