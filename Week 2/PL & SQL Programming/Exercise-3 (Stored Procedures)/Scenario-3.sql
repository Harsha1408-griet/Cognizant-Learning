CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN NUMBER,
    p_to_account_id   IN NUMBER,
    p_amount          IN NUMBER
)
AS
    v_from_balance NUMBER;
BEGIN
    SELECT balance
    INTO v_from_balance
    FROM accounts
    WHERE accountid = p_from_account_id
    FOR UPDATE;
    IF v_from_balance < p_amount THEN
        INSERT INTO transfer_log(message) VALUES ('Failed: Insufficient balance.');
        COMMIT;
        RETURN;
    END IF;
    UPDATE accounts
    SET balance = balance - p_amount,
        lastmodified = SYSDATE
    WHERE accountid = p_from_account_id;
    UPDATE accounts
    SET balance = balance + p_amount,
        lastmodified = SYSDATE
    WHERE accountid = p_to_account_id;
    INSERT INTO transfer_log(message) VALUES ('Transfer successful.');
    COMMIT;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        INSERT INTO transfer_log(message) VALUES ('Failed: Account not found.');
        COMMIT;
    WHEN OTHERS THEN
        ROLLBACK;
        INSERT INTO transfer_log(message) VALUES ('Failed: Unexpected error.');
        COMMIT;
END;
/

BEGIN
    TransferFunds(1, 2, 500);
END;
/

SELECT * FROM transfer_log ORDER BY log_time DESC;
