CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_dept IN VARCHAR2,
    p_bonus_percent IN NUMBER
) AS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE department = p_dept;

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('HR', 10);  
END;
/

SELECT * FROM employees WHERE department = 'HR';
