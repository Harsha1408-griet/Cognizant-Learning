BEGIN 
  FOR cust IN ( 
    SELECT CustomerID, TRUNC(MONTHS_BETWEEN(SYSDATE, DOB)/12) AS Age 
    FROM Customers 
  ) LOOP 
    IF cust.Age > 60 THEN 
      UPDATE Loans 
      SET InterestRate = InterestRate - 1 
      WHERE CustomerID = cust.CustomerID; 
 
      DBMS_OUTPUT.PUT_LINE('1% discount applied to Customer ID: ' || cust.CustomerID || ' (Age: ' || cust.Age || ')'); 
    END IF; 
  END LOOP; 
 
  COMMIT; 
END;