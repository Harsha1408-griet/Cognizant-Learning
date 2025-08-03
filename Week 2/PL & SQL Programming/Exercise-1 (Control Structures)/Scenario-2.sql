BEGIN 
  FOR cust IN ( 
    SELECT CustomerID, Balance FROM Customers 
  ) LOOP 
    IF cust.Balance > 10000 THEN 
      UPDATE Customers 
      SET IsVIP = 'TRUE' 
      WHERE CustomerID = cust.CustomerID; 
 
      DBMS_OUTPUT.PUT_LINE('VIP Status set for Customer ID: ' || cust.CustomerID); 
    END IF; 
  END LOOP; 
 
  COMMIT; 
END; 