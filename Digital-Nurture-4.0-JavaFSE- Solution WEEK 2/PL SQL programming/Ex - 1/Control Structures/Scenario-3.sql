create database abi;

use abi;

CREATE TABLE loans (
    loan_id INT AUTO_INCREMENT PRIMARY KEY,  
    customer_id INT NOT NULL,                
    due_date DATE NOT NULL                   
);

INSERT INTO loans (customer_id, due_date)
VALUES 
(1, CURDATE() + INTERVAL 10 DAY),
(2, CURDATE() + INTERVAL 20 DAY),
(3, CURDATE() - INTERVAL 5 DAY);  

SELECT * FROM loans;

DELIMITER $$

CREATE PROCEDURE CheckUpcomingLoans()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE v_customer_id INT;
    DECLARE v_due_date DATE;

    DECLARE loan_cursor CURSOR FOR 
        SELECT customer_id, due_date
        FROM loans
        WHERE due_date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN loan_cursor;

    loan_due_loop: LOOP
        FETCH loan_cursor INTO v_customer_id, v_due_date;

        IF done THEN
            LEAVE loan_due_loop;
        END IF;

    END LOOP;

    CLOSE loan_cursor;
END$$

DELIMITER ;

CALL CheckUpcomingLoans();

SELECT * FROM loans;

