create database abi;

use abi;

CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique customer ID
    name VARCHAR(100) NOT NULL,                  -- Customer name
    age INT NOT NULL,                            -- Age of the customer
    loan_interest_rate DECIMAL(5,2) NOT NULL     -- Loan interest rate (e.g., 5.25%)
);

INSERT INTO customers (name, age, loan_interest_rate)
VALUES 
('John Doe', 65, 5.25),
('Jane Smith', 45, 4.75),
('Robert Brown', 70, 6.00),
('Emily Davis', 55, 5.00),
('Michael Johnson', 62, 5.50);


SELECT * FROM customers;

DELIMITER $$

CREATE PROCEDURE AdjustLoanInterestRates()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE v_customer_id INT;
    DECLARE v_age INT;
    DECLARE v_loan_interest_rate DECIMAL(10,2);

    DECLARE cust_cursor CURSOR FOR 
        SELECT customer_id, loan_interest_rate, age 
        FROM customers;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cust_cursor;

    loan_adjustment_loop: LOOP
        FETCH cust_cursor INTO v_customer_id, v_loan_interest_rate, v_age;

        IF done THEN
            LEAVE loan_adjustment_loop;
        END IF;

        IF v_age > 60 THEN
            UPDATE customers
            SET loan_interest_rate = v_loan_interest_rate - 1
            WHERE customer_id = v_customer_id;
        END IF;
    END LOOP;

    CLOSE cust_cursor;
END$$

DELIMITER ;

CALL AdjustLoanInterestRates();

SELECT * FROM customers;