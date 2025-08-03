In this hands-on, I demonstrated the difference between Hibernate and Spring Data JPA using a simple Employee entity.

I created the Employee entity and used Spring Data JPA's JpaRepository to simplify data access.

So basically in the addEmployee() method in EmployeeService, it shows how Spring Data JPA reduces boilerplate by replacing manual session and transaction management with a simple save() call.

In the OrmLearnApplication, the class was modified to test addEmployee() and show the result via logs.

The console output and MySQL database confirm the successful insert operation using Spring Data JPA.