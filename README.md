A simple CRUD NestJS app using MongoDB.

Creating an employee:
  You can create a new employee by sending a POST request to /employees, with all of the necessary data in the  
  request's body:

  Name,
  Email Address,
  Phone Number,
  City,
  Zip Code, 
  Address Line 1,
  Address Line 2 (optional),
  Date of Employment,
  Date of Birth

Getting a list of employees:
  You can fetch a list of employees by sending a GET request to /employees.

Getting a single employee:
  You can fetch a single employee by sending a GET request to /employees with their ID as a parameter.

Updating an employee's information:
  You can update an employee's information by sending a PUT request to /employees with their ID, as well as  
  the data to be changed in the request's body.

Deleting an employee:
  You can delete an employee by sending a DELETE request to /employees with their ID.  
  Note: the employee will be soft deleted, their data will still remain in the database.