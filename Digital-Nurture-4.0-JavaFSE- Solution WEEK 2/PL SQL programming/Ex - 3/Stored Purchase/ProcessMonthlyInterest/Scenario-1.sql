create database abi;

use abi;
CREATE TABLE savings_accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY, 
    account_holder_name VARCHAR(100) NOT NULL, 
    balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

INSERT INTO savings_accounts (account_holder_name, balance) VALUES
('Alice Johnson', 1000.00),
('Bob Smith', 1500.50),
('Charlie Brown', 2000.75),
('Diana Prince', 2500.20);

SELECT * FROM savings_accounts;

DELIMITER $$

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE account_id INT;
    DECLARE account_balance DECIMAL(10,2);
    DECLARE account_cursor CURSOR FOR 
        SELECT account_id, balance 
        FROM savings_accounts;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN account_cursor;

    account_loop: LOOP
        FETCH account_cursor INTO account_id, account_balance;

        IF done THEN
            LEAVE account_loop;
        END IF;

        UPDATE savings_accounts 
        SET balance = balance + (account_balance * 0.01)
        WHERE account_id = account_id;
    END LOOP;

    CLOSE account_cursor;
END$$

DELIMITER ;


CALL ProcessMonthlyInterest();

SELECT * FROM savings_accounts;