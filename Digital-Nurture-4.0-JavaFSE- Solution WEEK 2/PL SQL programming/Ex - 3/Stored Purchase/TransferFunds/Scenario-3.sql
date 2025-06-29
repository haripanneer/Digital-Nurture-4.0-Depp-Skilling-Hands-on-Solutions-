create database abi;

use abi;

CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,  
    account_holder VARCHAR(100) NOT NULL,       
    balance DECIMAL(10,2) NOT NULL DEFAULT 0.00 
);

INSERT INTO accounts (account_holder, balance)
VALUES
('John Doe', 1000.00),
('Jane Smith', 1500.00),
('Robert Brown', 2000.00);

SELECT * FROM accounts;

DELIMITER $$

CREATE PROCEDURE TransferFunds(
    IN source_account_id INT,
    IN target_account_id INT,
    IN transfer_amount DECIMAL(10, 2)
)
BEGIN
    DECLARE source_balance DECIMAL(10, 2);
    SELECT balance INTO source_balance
    FROM accounts
    WHERE account_id = source_account_id;
    IF source_balance < transfer_amount THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient funds in the source account';
    ELSE
        UPDATE accounts 
        SET balance = balance - transfer_amount
        WHERE account_id = source_account_id;
        UPDATE accounts 
        SET balance = balance + transfer_amount
        WHERE account_id = target_account_id;
    END IF;
END$$

DELIMITER ;

CALL TransferFunds(101, 102, 500.00);

SELECT * FROM accounts;